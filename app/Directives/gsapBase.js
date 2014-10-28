/**
 * Created by arnold.krumins on 24/10/2014.
 */
ak.directive('gsapBase',function(){

    return{
      restrict:'EA',
        controller: function(){

           this.Timeline = function(){

               return TimelineMax;

           };

            this.Tween = function(){

                return TweenMax;

            };


        }

    }

})