/**
 * Created by arnold.krumins on 07/12/2014.
 */
ak.directive('endRepeat', ['$timeout','$rootScope', function ($timeout,$rootScope) {

    return {
        restrict: 'A',
        link: function (scope, element, attr) {
            if (scope.$last === true) {

            $rootScope.$broadcast('images-created');

            }
        }
    }
}]);