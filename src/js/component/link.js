var Component = __dep.use('lib.component');

export default Component.createClass({

    render : function(attrs, children) {

        var props = {
            href : attrs.href || '#',
            className : attrs.className || ''
        };

        if (attrs.onClick) {
            props['onclick'] = function(e){
                e.preventDefault();
                attrs.onClick(e);
            };
        }

        return Component.DOM("a")(props, children || []);

    }

});