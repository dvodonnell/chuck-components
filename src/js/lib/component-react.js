import React from 'vendor.react';
import ReactDom from 'vendor.reactDom';

export default {

    createClass : function(def) {

        if (!def.render) {
            console.log('Component definition missing render()');
        }

        var cl = (function(_def){
            var classDef = {
                render : function() {
                    var self = this;
                    return _def.render.apply({
                        state : {},
                        setState : function(state) {
                            this.state = state;
                        }
                    }, [this.props, this.props.children, this.state]);
                }
            };
            if (_def.getInitialState) {
                classDef['getInitialState'] = _def.getInitialState;
            }
            return React.createClass(classDef);
        })(def);

        return (function(_cl, _def) {

            return function(props, children) {
                props = props || {};
                if (!props.key) {
                    //props.key = Math.random() * (100000000 - 1000000) + 1000000;
                }
                return React.createElement(_cl, props, children);
            };

        })(cl, def);

    },

    DOM : function(tagName) {

        return (function(_tagName) {

            return function(props, children) {
                if (!props.key) {
                    //props.key = Math.random() * (100000000 - 1000000) + 1000000;
                }
                return React.createElement(_tagName, props, children);
            };

        })(tagName);

    },

    renderToDOM : function(el, container) {
        ReactDom.render(el, container);
    },

    renderServer : function(el) {
        return ReactDom.renderToString(el);
    }

};