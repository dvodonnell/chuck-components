import Component from 'lib.component';
import InputGroup from './../input-group.js';
import Button from './../button.js';
import Block from './../block.js';
import Link from './../link.js';
import Form from './../form.js';

var ComponentFormRegister = Component.createClass({

    render : function(attrs) {

        var elements = [];

        elements.push(
            InputGroupComponent(
                {
                    key : 'username',
                    name : 'username',
                    label : '',
                    type : 'email',
                    placeholder : "Email"
                }
            ),
            InputGroupComponent(
                {
                    type : 'password',
                    label : '',
                    name : 'password',
                    key : 'password',
                    placeholder : "Password"
                }
            ),
            InputGroupComponent(
                {
                    type : 'password',
                    label : '',
                    name : 'passwordConfirm',
                    key : 'passwordConfirm',
                    placeholder : "Confirm password"
                }
            ),
            GridComponent(
                {
                    items : [
                        [
                            {
                                item : [ButtonComponent(
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
                                item : [ButtonComponent(
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

        return FormComponent(
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