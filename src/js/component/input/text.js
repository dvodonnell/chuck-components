import Component from 'lib.component';
import Input from './../input.js';

export default Component.createClass({

    render : function(attrs, children) {

        return Input({
            type : 'text'
        });

    }

});