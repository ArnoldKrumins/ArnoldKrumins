/**
 * Created by arnold.krumins on 25/10/2014.
 */
ak.directive('stagger',function(){
    return{
        restrict: 'EA',
        scope:{
            children: '@'
        },
        link: function(scope,element,attrs){
            

            if (scope.children){
                TweenMax.staggerFrom(element.children(), 2, {scale:0.5, opacity:0, delay:0.5, ease:Elastic.easeOut, force3D:true}, 0.2);
            }else{
                TweenMax.staggerFrom(element, 2, {scale:0.5, opacity:0, delay:0.5, ease:Elastic.easeOut, force3D:true}, 0.2);
            }




        }




    }





})