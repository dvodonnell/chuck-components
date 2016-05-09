import Component from 'lib.component';

export default Component.createClass({

    render : function(attrs, children) {

        return Component.DOM('form')({
            className : 'form' + ((attrs.className) ? ' ' + attrs.className : ''),
            onSubmit : function(e) {
                e.preventDefault();
                if (attrs.service && attrs.service.onSubmit) {
                    attrs.service.onSubmit(e.target);
                }
            }
        }, children || []);

    }

});