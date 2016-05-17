import Component from 'lib.component';
import Input from './../input.js';
import Container from './../container.js';

export default Component.createClass({

    getInitialState : function() {
        return {
            editing : false
        };
    },

    render : function(attrs, children) {

        var self = this;

        var innerEl = null;

        if (state.editing) {

            innerEl = Input({
                value : attrs.value || ''
            });

        } else {

            innerEl = Component.DOM('p')({
                onClick : function() {
                    self.setState({
                        editing : true
                    });
                }
            }, attrs.value);

        }

        return Container({
            className : 'inlineInput-container'
        }, [innerEl]);

    }

});