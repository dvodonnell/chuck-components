import Component from 'lib.component';
import Input from './../input.js';
import List from './../list.js';
import Link from './../link.js';
import Container from './../container.js';

export default Component.createClass({

    getInitialState : function() {
        return {
            results : []
        };
    },

    render : function(attrs, children) {

        var self = this;

        var els = [];

        var minSearchLength = attrs.minSearchLength || 1;

        els.push(Input({
            onChange : function(e) {
                if (attrs.service && attrs.service.doSearch) {
                    if (e.length > 0) {
                        attrs.service.doSearch(e, function(results){
                            self.setState({results:results});
                        });
                    } else {
                        self.setState({results:[]});
                    }
                }
            }
        }));

        if (this.state.results.length > 0) {
            var links = [];
            for (var i = 0; i < this.state.results.length; i++) {
                links.push(Link({
                    href : '#',
                    id : this.state.results[i].id
                }, this.state.results[i].label));
            }
            els.push(List({
                items : links
            }));
        }

        return Container({
            className : 'inputAutocomplete-container'
        }, els);

    }

});