/**
 * Created by eryk on 31.03.17.
 */
import loginHtml from './login.component.html';
import './login.component.scss';

class LoginController {

    constructor(loginService) {
        this.credentials = {};
        this.loginService = loginService;
        this.passwordSwitch = true;
    }

    login() {

    }

}


export default {
    controller: LoginController,
    controllerAs: 'loginController',
    template: loginHtml,
};