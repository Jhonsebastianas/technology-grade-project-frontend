import LoginUtils from '@utils/login.utils'

// https://bezkoder.com/react-jwt-auth/
class AuthHeader {
    static headers() {
        const token = LoginUtils.getToken();
        if (token) {
            return { headers: { 'x-access-token': token } };
        } else {
            return {};
        }
    }
}

module.exports = AuthHeader