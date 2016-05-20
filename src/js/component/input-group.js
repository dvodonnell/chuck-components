import Component from 'lib.component';
import Input from './input.js';
import InputFile from './input/file.js';
import InputAutoComplete from './input/autocomplete.js';

export default Component.createClass({

    render : function(attrs, children) {

        var els = [];

        if (attrs.label) {
            els.push(
                Component.DOM("label")(
                    {},
                    attrs.label
                )
            );
        }

        if (attrs.type === 'file') {
            els.push(InputFile(attrs));
        } else if (attrs.type === 'autocomplete') {
            els.push(InputAutoComplete(attrs));
        } else {
            els.push(Input(attrs));
        }

        return Component.DOM("div")({
            className : 'form-group'
        }, (children && children.length) ? els.concat(children) : els);

    }

});