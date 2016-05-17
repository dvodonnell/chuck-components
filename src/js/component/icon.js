import Component from 'lib.component';

export default Component.createClass({

    render : function(attrs) {

        var props = {};

        var type = attrs.type || 'fa';

        if (type === 'fa') {
            props['className'] = 'fa fa-' + attrs.icon;
        }

        return Component.DOM("i")(props);

    }

});