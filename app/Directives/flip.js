/**
 * Created by arnold.krumins on 07/12/2014.
 */
ak.directive('flip',function(){

    return{
        restrict:'A',
        scope:{ index:'=flip'},
        link: function(scope, element,attrs){

            scope.$on('flip-image', function(e,idx) {
                scope.$digest();
                if(scope.index === idx){

                    TweenMax.to(element.children()[0], 1.2, {rotationY:180, ease:Back.easeOut});
                    TweenMax.to(element.children()[1], 1.2, {rotationY:0, ease:Back.easeOut});

                }

            })

        }
 }

})