/**
 * Created by arnold.krumins on 24/10/2014.
 */
ak.directive('move',function(){

    return{
        restrict:'EA',
        require: '^gsapBase',
        scope:{

        },
        link: function(scope, element, attrs, gsapCtrl){


            element.on('click', function(e){

                e.preventDefault();
                var tween = gsapCtrl.Tween();
                tween.to(element, 3, {rotationY:360, transformOrigin:"left top", yoyo:true});
                //tween.play;

            })


        }

    }


})