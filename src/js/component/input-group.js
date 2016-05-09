var Component = __dep.use('lib.component'),
    Input = __dep.use('component.input'),
    InputFile = __dep.use('component.input.file');

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