(function(app){
    var LocalStorageItems = function(){
        this.init();
    };
    var p = LocalStorageItems.prototype;

    p.init = function(){
        this.storage = window.localStorage;
        this.lastIndex = this.storage.getItem("edit-index");
        if(!this.lastIndex){
            this.lastIndex = 0;
        }
    };

    p.list = function(){
        var list = [];
        for (var uid in this.storage){
            if(uid.indexOf("edit-item-") == 0){
                var _uid = uid.substr(10);
                var data = JSON.parse(this.storage.getItem(uid));
                data.uid = _uid;
                list.push(data);
            }
        }
        return list;
    };

    p.get = function(uid){
        var key = "edit-item-" + uid;
        return JSON.parse(this.storage.getItem(key));
    };

    p.add = function(item){
        this.lastIndex++;
        var uid = "edit-item-" + this.lastIndex;
        this.storage.setItem(uid,JSON.stringify(item));
        this.storage.setItem("edit-index",this.lastIndex);
        return uid;
    };

    p.delete = function(uid){
        var _uid = "edit-item-" + uid;
        this.storage.removeItem(_uid);

        return true;
    };

    app.LocalStorageItems = LocalStorageItems;
}(app));
