/**
 * Created by kruminsa on 5/11/2014.
 */
ak.directive('pulse',function(){

    return{
        restrict:'A',
        link:function(scope,element,attrs){
           TweenMax.to(element, 1, {scaleX:0.8, scaleY:0.8, force3D:true, yoyo:true, repeat:1, ease:Power1.easeInOut});
        }
    }

})