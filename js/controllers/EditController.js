(function(module){
    module.controller('EditController',['$scope','$routeParams','$location','Items',
        function($scope,$routeParams,$location,Items){
            var uid = $routeParams['uid'];
            $scope.item = Items.get(uid);

            $scope.$emit('title','保存');

            $scope.saveItem = function(){
                if($scope.editItemForm.$valid) {
                    Items.save($scope.item, uid);
                    $location.path("/list");
                }
            };
            $scope.cancelItem = function(){
                $location.path("/list");
            };
    }]);
}(app.module));