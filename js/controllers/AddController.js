(function(module){
    module.controller('AddController',['$scope','$location','Items','defaults',
        function($scope,$location,Items,defaults){
            $scope.item = angular.merge(defaults,{});

            $scope.$emit('title','追加');

            $scope.addItem = function(){
                if($scope.addItemForm.$valid) {
                    Items.add($scope.item);
                    $location.path("/list");
                }
            };
            $scope.cancelItem = function(){
                $location.path("/list");
            };
    }]);
}(app.module));