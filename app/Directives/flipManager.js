/**
 * Created by arnold.krumins on 07/12/2014.
 */
ak.directive('flipManager',function($timeout,$interval,$rootScope){

    return {
        restrict:'EA',
        scope:{ showCountdown:'=', imageIndexes:'=' },
        controller:function($scope){

            $scope.counter=0;

            $scope.update = function(){
                $timeout(function(){
                var idx = $scope.imageIndexes[$scope.counter++];
                $rootScope.$broadcast('flip-image',idx);
                })
            }

            $scope.$watch('showCountdown',function(){

                if($scope.showCountdown){

                    var limit = $scope.imageIndexes.length;
                    $interval($scope.update,150,limit);

                }

            })

        }

    }

})