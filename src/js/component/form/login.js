var Component = __dep.use('lib.component'),
    InputGroup = __dep.use('component.inputGroup'),
    Button = __dep.use('component.button'),
    Block = __dep.use('component.block'),
    Link = __dep.use('component.link'),
    Form = __dep.use('component.form');

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