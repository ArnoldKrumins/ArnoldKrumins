/**
 * Created by arnold.krumins on 06/12/2014.
 */
ak.controller('ImageCtrl', function($scope){

    $scope.showCountdown = false;

    $scope.imageSections = [];
    $scope.shuffledSections = [];
    $scope.imagePositions = [];
    $scope.imageShuffledPositions = [];

    $scope.gridWidth = 196;
    $scope.gridHeight = 100;
    $scope.gridColumns = 5;
    $scope.gridRows = 6;
    $scope.imageIndexes = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29];

    $scope.init = function(){

        var limit =$scope.gridColumns * $scope.gridRows;

        for (var i = 0; i < limit; i++) {

            var top = Math.floor(i / $scope.gridColumns) * $scope.gridHeight + 'px';
            var left = (i * $scope.gridWidth) % ($scope.gridColumns * $scope.gridWidth) + 'px';

            var pos = { left: left, top: top}
            $scope.imagePositions.push(pos);


            var image = {
                "position":"absolute",
                "border":"1px solid rgba(211, 213, 210, 0)",
                "width": $scope.gridWidth-1 + 'px',
                "height": $scope.gridHeight-1 + 'px',
                "top":pos.top,
                "left":pos.left,
                "background": "url('Images/towerbridge-sm.jpg')" + '-' + pos.left + ' -' + pos.top
            }

            $scope.imageSections.push(image);

        }

        $scope.imageIndexes = _.shuffle($scope.imageIndexes);
        $scope.imageShuffledPositions = _.shuffle($scope.imagePositions);

        for (var i = 0; i < limit; i++) {

            var image = {
                "position":"absolute",
                "border":"1px solid rgba(211, 213, 210, 0)",
                "width": $scope.gridWidth-1 + 'px',
                "height": $scope.gridHeight-1 + 'px',
                "top":$scope.imagePositions[i].top,
                "left":$scope.imagePositions[i].left,
                "background": "url('Images/towerbridge-sm.jpg')" + '-' + $scope.imageShuffledPositions[i].left + ' -' + $scope.imageShuffledPositions[i].top
            }

            $scope.shuffledSections.push(image);

        }

    }

    $scope.range = function() {
        return new Array($scope.gridRows * $scope.gridColumns);
    };







})