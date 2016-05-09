import Component from 'lib.component';

export default Component.createClass({

    render : function(attrs, children) {

        return Component.DOM('div')({
            className : attrs.className || ''
        }, children || []);

    }

});