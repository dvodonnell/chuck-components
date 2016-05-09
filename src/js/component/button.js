import Component from 'lib.component';

export default Component.createClass({

    render : function(attrs, children) {

        var elType = (attrs.href) ? 'a' : 'button';

        var props = {
            className : 'btn'
        };

        if (attrs.primary) {
            props.className += ' btn-primary';
        } else if (attrs.secondary) {
            props.className += ' btn-secondary';
        } else {
            props.className += ' btn-default';
        }

        if (attrs.className) {
            props.className += ' ' + attrs.className;
        }

        if (attrs.href) {
            props['href'] = attrs.href;
        }

        if (attrs.type) {
            props['type'] = attrs.type;
        }

        if (attrs.onClick) {
            props['onclick'] = attrs.onClick;
        }

        return Component.DOM(elType)(props, attrs.label || 'Go');

    }

});