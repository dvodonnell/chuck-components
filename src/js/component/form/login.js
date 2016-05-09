import Component from 'lib.component';
import InputGroup from './../input-group.js';
import Button from './../button.js';
import Block from './../block.js';
import Link from './../link.js';
import Form from './../form.js';

export default Component.createClass({

    render : function(attrs, children) {

        var elements = [];

        elements.push(
            InputGroup(
                {
                    key : 'username',
                    name : 'username',
                    label : (attrs.options && attrs.options.labels.username) ? attrs.options.labels.username : '',
                    placeholder : 'Username'
                }
            ),
            InputGroup(
                {
                    type : 'password',
                    label : (attrs.options && attrs.options.labels.password) ? attrs.options.labels.password : '',
                    name : 'password',
                    key : 'password',
                    placeholder : 'Password'
                }
            ),
            Button(
                {
                    label : 'Log In'
                }
            )
        );

        if (!attrs.noRegister) {
            elements.push(
                Block(
                    {
                        key : 'registerLink',
                        className : 'textCentre marginTopStandard'
                    },
                    [Link(
                        {
                            href : '#/register'
                        },
                        'Sign up'
                    )]
                )
            );
        }

        return Form(
            {
                className : 'formLogin textCentre',
                service : {
                    onSubmit : function(form){
                        if (attrs.service && attrs.service.onTryLogin) {
                            attrs.service.onTryLogin(
                                form.username.value,
                                form.password.value
                            );
                        }
                    }
                }
            },
            elements
        );

    }

});