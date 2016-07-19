(function(module){
    module.controller('ItemController',[
        '$scope','$routeParams','$location','Items',
        function($scope,$routeParams,$location,Items){

            var uid = $routeParams['uid'];
            $scope.item = Items.get(uid);

            if(!$scope.item){
                $location.path('/list');
            }

            $scope.$emit('title','詳細');

            $scope.deleteItem = function(){
                Items.delete(uid);
                $location.path('/list');
            }

    }]);
}(app.module));