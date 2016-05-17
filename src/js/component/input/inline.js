import Component from 'lib.component';
import Input from './../input.js';
import Container from './../container.js';

export default Component.createClass({

    getInitialState : function() {
        return {
            editing : false
        };
    },

    render : function(attrs, children, state) {

        var self = this;

        var innerEl = null;

        if (state.editable) {

            innerEl = Input({
                value : attrs.value || '',
                state : {
                    editable : false
                }
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