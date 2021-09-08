import axios from 'axios';
import { API_ENDPOINT, TOKEN_NAME } from '@constants/Constants';
import AuthHeader from '@services/auth-header';

export const serviciosLogin = {
    login: (user, success, error) => {
        axios.post(API_ENDPOINT + 'login/login-sencillo', user)
            .then(success)
            .catch(error);
    },
    loginWithGoogle: (googleUser, success, error) => {
        axios.post(API_ENDPOINT + 'login/loginWhitGoogle', googleUser)
            .then(success)
            .catch(error);
    },
    logout: () => {
        localStorage.removeItem(TOKEN_NAME);
    },
    getCurrentUser: () => {
        return JSON.parse(localStorage.getItem('user'));;
    },
    verificarAdmin
}


async function verificarAdmin(params, success, error) {
    axios.post(API_ENDPOINT + 'login/isAdmin', params, AuthHeader.headers())
        .then(success)
        .catch(error);
}