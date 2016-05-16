import Component from 'lib.component';

export default Component.createClass({

    render : function(attrs, children) {

        var size = attrs.size || 1;

        return Component.DOM("h"+size)(attrs, children || []);

    }

});