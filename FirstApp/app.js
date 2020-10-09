window.addEventListener('load', () => {
    new Vue({
        el: '#app',
        data: {
            userLogin: {
                userName: null,
                password: null
            },
            loginErrorMessage: null,
            loginSuccessMessage: null,
            isLoggedIn: false
        },
        methods: {
            login: function () {
                var user = this.userLogin;
                if(user.userName === 'sado' && user.password === '1234') {
                    this.isLoggedIn = true;
                    this.loginSuccessMessage = 'Hi ' + user.userName + ' Welcome.';
                }
                else {
                    this.loginErrorMessage = "Invalid User Name and Password..!";
                }
            }
        }
    });
});