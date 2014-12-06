/**
 * Created by arnold.krumins on 03/12/2014.
 */
ak.directive('countDown', function($timeout){

    var _sentenceEndExp = /(\.|\?|!)$/g;

    function BulletText(text,element)
    {

        var words = text.split(" "),
            tl = new TimelineMax({delay:0.6, repeat:0, repeatDelay:4}),
            wordCount = words.length,
            time = 0,
            word, duration, isSentenceEnd, i;

        for(i = 0; i < wordCount; i++){
            word = words[i];
            isSentenceEnd = _sentenceEndExp.test(word);
            element.append("<h3>" + word + "</h3>");
            duration = Math.max(0.5, word.length * 0.08); //longer words take longer to read, so adjust timing. Minimum of 0.5 seconds.
            if (isSentenceEnd) {
                duration += 0.6; //if it's the last word in a sentence, drag out the timing a bit for a dramatic pause.
            }

            var current = element.find('h3')[i];

            //set opacity and scale tso 0 initially. We set z to 0.01 just to kick in 3D rendering in the browser which makes things render a bit more smoothly.
            TweenLite.set(current, {autoAlpha:0, scale:0, z:0.01});
            //the SlowMo ease is like an easeOutIn but it's configurable in terms of strength and how long the slope is linear. See http://www.greensock.com/v12/#slowmo and http://api.greensock.com/js/com/greensock/easing/SlowMo.html
            tl.to(current, duration, {scale:1.2,  ease:SlowMo.ease.config(0.25, 0.9)}, time)
                //notice the 3rd parameter of the SlowMo config is true in the following tween - that causes it to yoyo, meaning opacity (autoAlpha) will go up to 1 during the tween, and then back down to 0 at the end.
                .to(current, duration, {autoAlpha:1, ease:SlowMo.ease.config(0.25, 0.9, true)}, time);
            time += duration - 0.05;
            if (isSentenceEnd) {
                time += 0.6; //at the end of a sentence, add a pause for dramatic effect.
            }
        }


    }


    return{
        restrict:'EA',
        replace:true,
        scope:{ text:'@', show:'=' },
        link: function(scope,element,attrs){

            scope.$watch('show',function(){

                if(scope.show)
                {
                    BulletText(scope.text,element);

                    $timeout(function(){

                        scope.$apply(function(){
                            scope.show = false;
                        })

                    },0)


                }

            })


        }

    }

})