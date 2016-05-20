import Component from 'lib.component';
import Input from './../input.js';
import Container from './../container.js';

export default Component.createClass({

    getInitialState : function() {
        return {
            editing : false
        };
    },

    handleChange : function() {

    },

    render : function(attrs, children) {

        var self = this;

        var els = [];

        var minSearchLength = attrs.minSearchLength || 1;

        els.push(Input({
            onChange : function(e) {
                console.log(e);
            }
        }));

        return Container({
            className : 'inputAutocomplete-container'
        }, els);

    }

});