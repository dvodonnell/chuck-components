import Component from 'lib.component';
import GridCol from './grid-col.js';

var ComponentGridRow = Component.createClass({

    render : function(attrs) {

        var cols = [];

        for (var i=0; i < attrs.items.length; i++) {
            cols.push(GridCol(attrs.items[i]));
        }

        return Component.DOM("div")({
            className : 'row'
        }, cols);

    }

});

export default ComponentGridRow;