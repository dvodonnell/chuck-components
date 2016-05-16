import Component from 'lib.component';

export default Component.createClass({

    render : function(attrs, children) {

        var pars = {
            className : 'form-control',
            type : attrs.type || 'text',
            name : attrs.name || '',
            placeholder : attrs.placeholder || ''
        };

        if (attrs.onKeyUp) {
            pars['onkeyup'] = attrs.onKeyUp;
        }

        if (attrs.onChange) {
            pars['onchange'] = attrs.onChange;
        }

        return Component.DOM("input")(pars);

    }

});