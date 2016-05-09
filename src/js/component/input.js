import Component from 'lib.component';

export default Component.createClass({

    render : function(attrs, children) {

        var pars = {
            className : 'form-control',
            type : attrs.type || 'text',
            value: (attrs.state && attrs.state.value) ? attrs.state.value : null,
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