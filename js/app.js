var app = this.app || {};
(function(app){
    'use strict';
    app.module = angular.module("main",["main.routes"]);

    app.module.factory('Items',[function(){
        return new app.LocalStorageItems();
    }]);
}(app));