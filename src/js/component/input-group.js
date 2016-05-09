import Component from 'lib.component';
import Input from './input.js';
import InputFile from './input/file.js';

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

        els.push((attrs.type === 'file') ? InputFile(attrs) : Input(attrs));

        return Component.DOM("div")({
            className : 'form-group'
        }, (children && children.length) ? els.concat(children) : els);

    }

});