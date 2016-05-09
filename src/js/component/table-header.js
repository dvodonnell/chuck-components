import Component from 'lib.component';

export default Component.createClass({

    render : function(attrs) {

        var cols = [];

        for (var i=0; i < attrs.headers.length; i++) {
            cols.push(Component.DOM("th")({}, [attrs.headers[i]]));
        }

        return Component.DOM("thead")({}, [Component.DOM("tr")({
            className : 'table-row table-header-row' + ((attrs.className) ? ' ' + attrs.className : '')
        }, (cols.length > 0)  ? cols : [])]);

    }

});