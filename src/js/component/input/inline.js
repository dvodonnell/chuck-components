import Component from 'lib.component';
import Input from './../input.js';
import Container from './../container.js';

export default Component.createClass({

    render : function(attrs, children) {

        var elInput = Input({
                value : attrs.value || '',
                state : {
                    editable : false
                }
            }),
            elP = Component.DOM('p')({
                onClick : function() {
                    elInput.setState({
                        editable : true
                    });
                }
            }, attrs.value);

        return Container({
            className : 'inlineInput-container'
        }, [
            elInput,
            elP
        ]);

    }

});