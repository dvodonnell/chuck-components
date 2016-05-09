import Component from 'lib.component';
import Input from './../input.js';

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