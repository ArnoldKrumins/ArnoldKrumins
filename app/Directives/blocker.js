/**
 * Created by arnold.krumins on 30/10/2014.
 */
ak.directive('blocker',function($window,$interval){

    return{
        restrict:'EA',
        link:function(scope,element,attrs){


            var div = angular.element('<div class="box"></div>');



            var width = $window.innerWidth;
            var height = $window.innerHeight;

            element.append(div.css('top','100px'));

//            var timer=$interval(function(){
//
//            },100);


        }

    }


})