var Component = __dep.use('lib.component'),
    Input = __dep.use('component.input');

export default Component.createClass({

    render : function(attrs, children) {

        return Input({
            type : 'file',
            onChange : function(e) {
                if (attrs.onChange) {
                    var f = new FormData();
                    if (e.target.files && e.target.files[0]) {
                        f.append('theFile', e.target.files[0]);
                    }
                    attrs.onChange(e, f);
                }
            }
        });

    }

});