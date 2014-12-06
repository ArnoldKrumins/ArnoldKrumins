/**
 * Created by arnold.krumins on 06/12/2014.
 */
ak.controller('ImageCtrl', function($scope){

    $scope.imageSections = [];
    $scope.shuffledSections = [];

    $scope.gridWidth =196;
    $scope.gridHeight =100;
    $scope.gridColumns =5;
    $scope.gridRows =6;


    $scope.init = function(){

        var limit =$scope.gridColumns * $scope.gridRows;

        for (var i = 0; i < limit; i++) {


            var top = Math.floor(i / $scope.gridColumns) * $scope.gridHeight + 'px';
            var left = (i * $scope.gridWidth) % ($scope.gridColumns * $scope.gridWidth) + 'px';

            var image = {
                "position":"absolute",
                "border":"1px solid rgba(211, 213, 210, 0)",
                "width": $scope.gridWidth-1 + 'px',
                "height": $scope.gridHeight-1 + 'px',
                "top":top,
                "left":left,
                "background": "url('Images/towerbridge-sm.jpg')" + '-' + left + ' -' + top
            }

            $scope.imageSections.push(image);

        }

        $scope.shuffledSections = _.shuffle($scope.imageSections);
    }

    $scope.range = function() {
        return new Array($scope.gridRows * $scope.gridColumns);
    };







})