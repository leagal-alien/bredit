(function(){
    var routes = angular.module("main.routes",["ngRoute"])
        .config(function($routeProvider, $locationProvider){

            //$locationProvider.html5Mode(true);

            $routeProvider.when('/list',{
                templateUrl : 'views/list.html',
                controller  : 'ListController'
            }).when('/add',{
                templateUrl : 'views/add.html',
                controller  : 'AddController',
                resolve : {
                    defaults : function(){
                        return {
                            date : new Date()
                        }
                    }
                },
                reloadOnSearch: false
            }).when('/item/:uid/edit',{
                templateUrl : 'views/edit.html',
                controller  : 'EditController'
            }).when('/item/:uid',{
                templateUrl : 'views/item.html',
                controller  : 'ItemController'
            }).otherwise({
                redirectTo: '/list'
            });
        });

    routes.directive('routeHref',['$location',function($location){
        return {
            restrict : 'A',
            scope : {
                'routeHref' : '@'
            },
            link : function($scope,$element,$attrs){
                $element.on('click',function(){
                    $scope.$apply(function(){
                        $location.path($scope.routeHref);
                    });
                });
            }
        }
    }]);

    routes.run(['$rootScope','$location',function($rootScope,$location){

        $rootScope.$on('$routeChangeSuccess',function(event,cur,prev){
            if(window.ga){
                // 例えば、以下のようにしてAnalyticsでのPVとして処理する
                // $window.ga('send', 'pageview', {page: $location.path()});
            }
        });

        $rootScope.$on('$routeChangeStart',function(event,next,cur){
            if(!cur && $location.path().indexOf('/item') == 0){
                event.preventDefault();
                $location.path('/list');
            }
        });
    }]);
}());
