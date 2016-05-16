import Component from 'lib.component';
import InputGroup from './../input-group.js';
import Button from './../button.js';
import Block from './../block.js';
import Link from './../link.js';
import Form from './../form.js';
import Grid from './../grid.js';

var ComponentFormRegister = Component.createClass({

    render : function(attrs) {

        var elements = [];

        elements.push(
            InputGroup(
                {
                    key : 'username',
                    name : 'username',
                    label : '',
                    type : 'email',
                    placeholder : "Email"
                }
            ),
            InputGroup(
                {
                    type : 'password',
                    label : '',
                    name : 'password',
                    key : 'password',
                    placeholder : "Password"
                }
            ),
            InputGroup(
                {
                    type : 'password',
                    label : '',
                    name : 'passwordConfirm',
                    key : 'passwordConfirm',
                    placeholder : "Confirm password"
                }
            ),
            Grid(
                {
                    items : [
                        [
                            {
                                item : [Button(
                                    {
                                        key : 'returnToLogin',
                                        label : 'Log In',
                                        href : '#/login'
                                    }
                                )],
                                col : {
                                    xs : 6
                                }
                            },
                            {
                                item : [Button(
                                    {
                                        key : 'submit',
                                        label : 'Sign up'
                                    }
                                )],
                                col : {
                                    xs : 6
                                }
                            }
                        ]
                    ]
                }
            )
        );

        return Form(
            {
                className : 'formRegister textCentre',
                service : {
                    onSubmit : function(form){
                        if (attrs.service && attrs.service.onTrySignup) {
                            if (attrs.service && attrs.service.validateSignupAttempt) {
                                if (attrs.service.validateSignupAttempt(form)) {
                                    attrs.service.onTrySignup(
                                        form.username.value,
                                        form.password.value
                                    );
                                }
                            } else {
                                attrs.service.onTrySignup(
                                    form.username.value,
                                    form.password.value
                                );
                            }
                        }
                    }
                }
            },
            elements
        );

    }

});

export default ComponentFormRegister;