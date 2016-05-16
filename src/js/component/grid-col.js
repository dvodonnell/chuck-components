import Component from 'lib.component';

var ComponentGridCol = Component.createClass({

    render : function(attrs) {

        var classes = "";

        for (screenSize in attrs.col) {
            classes += 'col-' + screenSize + '-' + attrs.col[screenSize] + " ";
        }

        if (attrs.className) {
            classes += ' ' + attrs.className;
        }

        return Component.DOM("div")({
            className : classes
        }, attrs.item || []);

    }

});

export default ComponentGridCol;