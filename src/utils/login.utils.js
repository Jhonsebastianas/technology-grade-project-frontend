import Constants from '@constants/Constants';

export default class LoginUtils { };

LoginUtils.getUsernameUser = getUsernameUser;
LoginUtils.getFullName = getFullName;
LoginUtils.SignOff = SignOff;

function getUsernameUser() {
    const { USER_NAME } = Constants;
    const { usuario } = JSON.parse(localStorage.getItem(USER_NAME));
    return usuario.username;
}

function getFullName() {
    const { USER_NAME } = Constants;
    const { usuario } = JSON.parse(localStorage.getItem(USER_NAME));
    const fullName = [usuario.nombres, usuario.apellidos].join(' ');
    return fullName;
}

function SignOff() {
    const { USER_NAME } = Constants;
    localStorage.removeItem(USER_NAME);
}