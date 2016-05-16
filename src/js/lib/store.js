var LibStore = function(initialState){
    this._store = initialState || {};
    this._subscribers = [];
};

LibStore.prototype = {

    subscribe : function(cb) {
        this._subscribers.push(cb);
    },

    alter : function(key, val, ignoreTrigger) {
        var parts = key.split('.'),
            rObj = this._store,
            parentObj = null;
        for (var i = 0; i < parts.length; i++) {
            var isProp = isNaN(parts[i]);
            if (!rObj[parts[i]]) {
                rObj[parts[i]] = {};
            }
            if ((i+1) < parts.length) {
                rObj = rObj[parts[i]];
            }
        }
        rObj[parts[(i > 0) ? i-1 : i]] = val;
        if (!ignoreTrigger) {
            this._trigger();
        }
    },

    alterBatch : function(keyVals) {
        for (key in keyVals) {
            this.alter(key, keyVals[key], true);
        }
        this._trigger();
    },

    getState : function() {
        return this._store;
    },

    _trigger : function() {
        for (var i = 0; i < this._subscribers.length; i++) {
            this._subscribers[i](this._store);
        }
    }

};

export default LibStore;