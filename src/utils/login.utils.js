import Constants from '@constants/Constants';

export default class LoginUtils { };

LoginUtils.getUsernameUser = getUsernameUser;
LoginUtils.getFullName = getFullName;
LoginUtils.SignOff = SignOff;
LoginUtils.verifyAuth = verifyAuth;
LoginUtils.getToken = getToken;
LoginUtils.getRoles = getRoles;

function getUsernameUser() {
    const { USER_NAME } = Constants;
    const user = JSON.parse(localStorage.getItem(USER_NAME));
    return (user && user.usuario.username) ? user.usuario.username : '';
}

function getFullName() {
    const { USER_NAME } = Constants;
    const user = JSON.parse(localStorage.getItem(USER_NAME));
    if (user) {
        const { usuario } = user
        const fullName = [usuario.nombres, usuario.apellidos].join(' ');
        return fullName
    } else {
        return '';
    }
}

function SignOff() {
    const { USER_NAME } = Constants;
    localStorage.removeItem(USER_NAME);
}

function verifyAuth() {
    const { TOKEN_NAME, USER_NAME } = Constants;
    const user = JSON.parse(localStorage.getItem(USER_NAME));
    if (user && user[TOKEN_NAME]) {
        return true;
    } else {
        return false;
    }
}

function getToken() {
    const { TOKEN_NAME, USER_NAME } = Constants;
    const user = JSON.parse(localStorage.getItem(USER_NAME));
    if (user && user[TOKEN_NAME]) {
        return user[TOKEN_NAME]
    } else {
        return
    }
}

function getRoles() {
    const { USER_NAME } = Constants;
    const user = JSON.parse(localStorage.getItem(USER_NAME));
    if (user?.usuario?.perfiles) {
        return user.usuario.perfiles;
    } else {
        return '';
    }
}