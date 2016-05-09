export default {

    camera : {
        getPicture : function() {
            //...
        }
    },

    storage : {
        set : function(key, val) {
            sessionStorage.setItem(key, val);
        },
        get : function(key) {
            return sessionStorage.getItem(key);
        },
        removeItem : function(key) {
            sessionStorage.removeItem(key);
        }
    },

    location : {
        get : function() {
            var loc = window.location.hash.substr(1);
            if (loc.length > 0 && loc.charAt(0) === '/') {
                loc = loc.substr(1);
            }
            return loc;
        },
        set : function(hash) {
            window.location.hash = '/' + hash;
        },
        onChange : function(cb) {
            window.onhashchange = cb;
        }
    },

    container : {
        onResize : function(cb) {
            window.onresize = cb;
        },
        getDimensions : function() {
            return {
                width: window.innerWidth,
                height : window.innerHeight
            };
        },
        getDocHeight : function() {
            var body = document.body,
                html = document.documentElement;
            return Math.max( body.scrollHeight, body.offsetHeight,
                html.clientHeight, html.scrollHeight, html.offsetHeight );
        },
        onScroll : function(cb) {
            window.onscroll = function() {
                cb(window.scrollX, window.scrollY);
            };
        }
    },

    interaction : {
        keyPress : function(cb) {
            document.addEventListener("keydown", cb, false);
        }
    }

};