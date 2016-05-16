export default {

    checkToken: function (envService, store, api, appNamespace, cb) {

        var userToken = envService.storage.get(appNamespace + 'UserToken');

        if (userToken && userToken !== 'undefined') {
            api.setAccessToken(userToken);
            var waitForValidate = api.validateToken(userToken);
            waitForValidate.done(function (r) {
                if (r.success) {
                    store.alter('user.current', {username : r.data.username});
                }
                if (cb) {
                    cb();
                }
            });
        }

    },

    checkAuth : function(store, api, envService, appNamespace) {

        var state = store.getState();

        if (state.user && state.user.requestingAuthentication && !state.user.token) {

            //login attempt

            var waitForToken = api.getToken(
                state.user.requestingAuthentication.username,
                state.user.requestingAuthentication.password
            );

            store.alter('user.authenticating', state.user.requestingAuthentication, true);
            store.alter('user.requestingAuthentication', null, true);

            waitForToken.done(function (r) {
                store.alter('user.authenticating', null, true);
                if (r.success) {
                    store.alter('user.current', {username : r.data.email});
                    api.setAccessToken(r.data.token);
                    envService.storage.set(appNamespace + 'UserToken', r.data.token);
                }
            });

            waitForToken.fail(function (r) {
                //store.dispatch(actions['errorOutLogInAttempt']());
            });

        } else if (state.user && state.user.registering) {

            var waitForRegistrationConfirmation = api.doRegister(
                state.user.registering.username,
                state.user.registering.password
            );

            waitForRegistrationConfirmation.done(function(r) {
                if (r.success) {
                    store.alter('user.registering', null, true);
                    store.alter('user.current', {username : r.data.email});
                    api.setAccessToken(r.data.token);
                    envService.storage.set(appNamespace + 'UserToken', r.data.token);
                }
            });

        }

    },

    doLogin : function(store, username, password) {
        store.alter('user.requestingAuthentication', {username : username, password : password});
    },

    doLogout : function(store, envService, appNamespace) {

        envService.storage.removeItem(appNamespace + 'UserToken');
        store.alter('user.current', null);

    },

    doRegister : function(store, username, password) {
        store.alter('user.registering', {username : username, password : password});

    }

};