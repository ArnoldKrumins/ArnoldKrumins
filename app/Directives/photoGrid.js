/**
 * Created by arnold.krumins on 26/11/2014.
 */
ak.directive('photoGrid',function($timeout,$log){



    function onDrop(dragged, dropped,gridWidth,gridHeight) {


        var droppedx = dropped.style.top.slice(0,-2);
        var droppedy = dropped.style.left.slice(0,-2);

        var draggedx = dragged.style.top.slice(0,-2);
        var draggedy = dragged.style.left.slice(0,-2);



//       var x  = Math.round(dx / gridWidth) * gridWidth;
//       var y  = Math.round(dy / gridHeight) * gridHeight;


        $log.info('Dragged x: ' + dragged.style.top.slice(0,-2) + ' y: ' + dragged.style.left.slice(0,-2));
        $log.info('Dropped x: ' + dropped.style.top.slice(0,-2) + ' y: ' + dropped.style.left.slice(0,-2));


//        TweenMax.fromTo(dropped, 1,{x:0,y:0},{x:196,y:0});
        //TweenMax.fromTo(dropped, 1, {x:droppedx,y:droppedy},{x:draggedy,y:draggedx});
//        TweenMax.fromTo(dropped, 1, {x:droppedx,y:droppedy},{x:draggedx,y:draggedy});
         TweenMax.to(dropped, 0.5, {x:0,y:0});
        //TweenMax.fromTo(dropped, 0.1, {opacity:1}, {opacity:0, repeat:3, yoyo:true});
        //$('.box').css("background-position").split(" ")[1]
    }

    return{
         restrict:'EA',
         replace:true,
         scope:{ imageSections:'=',
                 shuffledSections:'=',
                 showCountdown:'=',
                 range:'&',
                 gridRows:'@',
                 gridColumns:'@',
                 gridHeight:'@',
                 gridWidth:'@' },
         template:'<div class="image-container" id="photo-container">' +
                    '<div class="card-wrapper" ng-repeat="n in range() track by $index" end-repeat>' +
                        '<div class="card" flip="$index"  >' +
                             '<div class="box front" value="{{$index}}" stagger ng-style="imageSections[$index]">{{$index}}</div>' +
                             '<div class="box back" value="{{$index}}" ng-style="shuffledSections[$index]"></div>' +
                        '</div>' +
                     '</div>' +
                   '</div>',

         link: function(scope,element,attrs){


             TweenMax.set(element, {height:scope.gridRows * scope.gridHeight + 1, width: scope.gridColumns * scope.gridWidth + 1});
             TweenMax.set(".box", {width:scope.gridWidth, height:scope.gridHeight, lineHeight:scope.gridHeight + "px"});

             scope.$on('images-created', function(event, args) {

                 var droppables = $(".box");
                 var overlapThreshold = "50%";

                 TweenMax.set('.card-wrapper', {perspective:900});
                 TweenMax.set('.card', {transformStyle:"preserve-3d"});
                 TweenMax.set('.back', {rotationY:-180});
                 TweenMax.set(['.back', '.front'], {backfaceVisibility:"hidden"});

                 //TweenMax.staggerTo($(".card"), 1, {rotationY:-180, repeat:1, yoyo:true}, 0.1);

                 Draggable.create(".box", {
                 bounds:element,
                 edgeResistance:0.65,
                 type:"x,y",
                 throwProps:true,
                     snap: {
                         x: function(endValue) {
                             return Math.round(endValue / scope.gridWidth) * scope.gridWidth;
                         },
                         y: function(endValue) {
                             return Math.round(endValue / scope.gridHeight) * scope.gridHeight;
                         }
                     },


//                     onDrag: function(e) {
//                         var i = droppables.length;
//                         while (--i > -1) {
//                             if (this.hitTest(droppables[i], overlapThreshold)) {
//                                 $(droppables[i]).addClass("highlight");
//                             } else {
//                                 $(droppables[i]).removeClass("highlight");
//                             }
//
//                             /* ALTERNATE TEST: you can use the static Draggable.hitTest() method for even more flexibility, like passing in a mouse event to see if the mouse is overlapping with the element...
//                              if (Draggable.hitTest(droppables[i], e) && droppables[i] !== this.target) {
//                              $(droppables[i]).addClass("highlight");
//                              } else {
//                              $(droppables[i]).removeClass("highlight");
//                              }
//                              */
//                         }
//                     },
//                     onDragEnd:function(e) {
//                         var i = droppables.length;
//                         while (--i > -1) {
//                             if (this.hitTest(droppables[i], overlapThreshold)) {
//                                 onDrop(this.target, droppables[i]);
//                             }
//                         }
//                     },




                     onDragStart: function(e) {
                         $log.info(e);
                         $log.info('Start Drag ' + this.target);
                     },
                     onThrowComplete: function() {

                         var i = droppables.length;
                         while (--i > -1) {
                             if (this.hitTest(droppables[i], overlapThreshold)) {

                                 onDrop(this.target, droppables[i],scope.gridWidth,scope.gridHeight );

                             }
                         }



                     }
             });
         });




             $timeout(function(){

                 scope.$apply(function(){
                     scope.showCountdown = true;
                 })
             },2000)

         }

    }


})