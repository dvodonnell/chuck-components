import Component from 'lib.component';
import Container from './../container.js';

export default Component.createClass({

    render : function(attrs, children) {

        return Container(
            {
                className : 'containerCentred'
            },
            children || []
        );

    }

});