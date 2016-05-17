import Component from 'lib.component';
import TableCol from './table-col.js';

export default Component.createClass({

    render : function(attrs) {

        var cols = [];

        for (var i=0; i < attrs.cols.length; i++) {
            cols.push(TableCol({
            }, attrs.cols[i].content || []));
        }

        var props = {
            className : 'table-row' + ((attrs.className) ? ' ' + attrs.className : '')
        };

        if (attrs.onClick) {
            props.onClick = attrs.onClick;
        }

        return Component.DOM("tr")(props, (cols.length > 0)  ? cols : []);

    }

});