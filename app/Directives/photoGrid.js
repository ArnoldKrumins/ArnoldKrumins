/**
 * Created by arnold.krumins on 26/11/2014.
 */
ak.directive('photoGrid',function($timeout){

    return{
         restrict:'EA',
         replace:true,
         scope:{ imageSections:'=', shuffledSections:'=', showCountdown:'=', range:'&' },
         template:'<div id="photo-container">' +
                    '<div class="card-wrapper" ng-repeat="n in range() track by $index" end-repeat>' +
                        '<div class="card" ng-click="flip($index)" flip="$index"  >' +
                             '<div class="box front" value="{{$index}}" stagger ng-style="imageSections[$index]">{{$index}}</div>' +
                             '<div class="box back" value="{{$index}}" ng-style="shuffledSections[$index]"></div>' +
                        '</div>' +
                     '</div>' +
                   '</div>',
         controller: function($scope,$element, $attrs){

//             $scope.DisplayImage = function(index){
//
//                 var top = Math.floor(index / $scope.gridColumns) * $scope.gridHeight + 'px';
//                 var left = (index * $scope.gridWidth) % ($scope.gridColumns * $scope.gridWidth) + 'px';
//
//                 var image = {
//                     "position":"absolute",
//                     "border":"1px solid rgba(211, 213, 210, 0)",
//                     "width": $scope.gridWidth-1 + 'px',
//                     "height": $scope.gridHeight-1 + 'px',
//                     "top":top,
//                     "left":left,
//                     "background": "url('Images/towerbridge-sm.jpg')" + '-' + left + ' -' + top
//                 }
//
//                 $scope.images.push(image);
//
//                 return image;
//
//             }

            $scope.flip = function(index){
                TweenLite.to($element.children().children(index)[1].children[0], 1.2, {rotationY:180, ease:Back.easeOut});
                TweenLite.to($element.children().children(index)[1].children[1], 1.2, {rotationY:0, ease:Back.easeOut});

            }


         },
         link: function(scope,element,attrs){


             TweenLite.set(element, {height:scope.gridRows * scope.gridHeight + 1, width: scope.gridColumns * scope.gridWidth + 1});
             TweenLite.set(".box", {width:scope.gridWidth, height:scope.gridHeight, lineHeight:scope.gridHeight + "px"});


             scope.$on('images-created', function(event, args) {

                 TweenLite.set('.card-wrapper', {perspective:800});
                 TweenLite.set('.card', {transformStyle:"preserve-3d"});
                 TweenLite.set('.back', {rotationY:-180});
                 TweenLite.set(['.back', '.front'], {backfaceVisibility:"hidden"});

                 //TweenMax.staggerTo($(".card"), 1, {rotationY:-180, repeat:1, yoyo:true}, 0.1);



             });



             $timeout(function(){

                 scope.$apply(function(){
                     scope.showCountdown = true;
                 })
             },2000)

//            element.find('.card').on('click',function(){
//                TweenLite.to(this, 1.2, {rotationY:180, ease:Back.easeOut});
//                TweenLite.to(this, 1.2, {rotationY:0, ease:Back.easeOut});
//            })


         }

    }


})