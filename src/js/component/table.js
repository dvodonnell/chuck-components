import Component from 'lib.component';
import TableHeader from './table-header.js';
import TableRow from './table-row.js';

export default Component.createClass({

    render : function(attrs, children) {

        var rows = [];

        for (var i=0; i < attrs.rows.length; i++) {
            rows.push(TableRow({
                cols : attrs.rows[i]
            }));
        }

        var tableContents = [];

        if (attrs.headers) {
            tableContents.push(TableHeader({
                headers : attrs.headers
            }));
        }

        tableContents.push(Component.DOM("tbody")({}, (rows.length > 0)  ? rows : []));

        return Component.DOM("table")({
            className : 'table table-striped' + ((attrs.className) ? ' ' + attrs.className : '')
        }, tableContents);

    }

});