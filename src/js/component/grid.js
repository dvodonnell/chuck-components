import Component from 'lib.component';
import GridRow from './grid-row.js';

var ComponentGrid = Component.createClass({

    render : function(attrs) {

        var rows = [];

        for (var i=0; i < attrs.items.length; i++) {
            rows.push(GridRow({
                items : attrs.items[i]
            }));
        }

        return Component.DOM("div")({
            className : 'grid-container' + ((attrs.className) ? ' ' + attrs.className : '')
        }, (rows.length > 0)  ? rows : []);

    }

});

export default ComponentGrid;