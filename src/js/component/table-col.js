import Component from 'lib.component';

export default Component.createClass({

    render : function(attrs, children) {

        return Component.DOM("td")({
            className : 'table-column' + ((attrs.className) ? ' ' + attrs.className : '')
        }, children || []);

    }

});