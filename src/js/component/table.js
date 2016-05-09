var Component = __dep.use('lib.component'),
    TableHeader = __dep.use('component.tableHeader');

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