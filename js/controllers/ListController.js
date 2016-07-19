(function(module){
    module.controller('ListController',['$scope','Items',function($scope,Items){
        $scope.$emit('title','一覧');

        $scope.items = Items.list();
    }]);
}(app.module));