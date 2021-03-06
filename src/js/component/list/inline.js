import Component from 'lib.component';
import List from './../list.js';

export default Component.createClass({

    render : function(attrs, children) {

        var cN = attrs.className || '';

        cN += ' list-inline';

        return List({
            className : cN,
            items : attrs.items
        });

    }

});