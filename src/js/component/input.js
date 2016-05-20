import Component from 'lib.component';

export default Component.createClass({

    render : function(attrs, children) {

        var pars = {
            className : 'form-control',
            type : attrs.type || 'text',
            name : attrs.name || '',
            placeholder : attrs.placeholder || ''
        };

        if (attrs.onChange) {
            pars['onChange'] = function(e) {
                attrs.onChange(e.target.value);
            }
        }

        return Component.DOM("input")(pars);

    }

});