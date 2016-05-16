import Component from 'lib.component';

export default Component.createClass({

    render : function(attrs, children) {

        var items = [];

        if (attrs.items) {
            for (var i = 0; i < attrs.items.length; i++) {
                items.push(Component.DOM('li')({}, attrs.items[i]));
            }
        }

        return Component.DOM("ul")({
            className : attrs.className
        }, items);

    }

});