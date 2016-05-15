import Component from 'lib.component';

export default Component.createClass({

    render : function(attrs, children) {

        var className = 'chuck-container';

        if (attrs) {
            if (attrs.fluid) {
                className += ' container-fluid';
            } else if (attrs.fixed) {
                className += ' container';
            }

            if (attrs.className) {
                className += ' ' + attrs.className;
            }
        }

        return Component.DOM("div")({
            className : className
        }, children || []);

    }

});