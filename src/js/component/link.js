import Component from 'lib.component';

export default Component.createClass({

    render : function(attrs, children) {

        var props = {
            href : attrs.href || '#',
            className : attrs.className || '',
            id : attrs.id || ''
        };

        if (attrs.onClick) {
            props['onClick'] = function(e){
                e.preventDefault();
                attrs.onClick(e);
            };
        }

        return Component.DOM("a")(props, children || []);

    }

});