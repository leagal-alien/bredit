(function(module){
    module.controller('AppController',['$scope','$rootScope',function($scope){
        $scope.$on('title',function($evt,$title){
            $scope.title = $title;
        });

    }]);
}(app.module));
