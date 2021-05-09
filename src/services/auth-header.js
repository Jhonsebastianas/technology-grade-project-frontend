import LoginUtils from '@utils/login.utils'

// https://bezkoder.com/react-jwt-auth/
class AuthHeader {
    static authHeader() {
        const token = LoginUtils.getToken();
        if (token) {
            return { 'x-access-token': token };
        } else {
            return {};
        }
    }

    static headers(){
        return { headers: AuthHeader.authHeader() }
    }
}

module.exports = AuthHeader