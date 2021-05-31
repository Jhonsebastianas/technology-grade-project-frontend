import axios from 'axios';
import ConstantsList from '@constants/Constants';

const serviciosRegistro = {
    newUser: (newUser, success, error) => {
        const { API_ENDPOINT } = ConstantsList;
        axios.post(API_ENDPOINT + 'usuarios/registrarUsuarioNuevo', newUser)
            .then(success)
            .catch(error);
    },
    newGoogleUser: (googleUser, success, error) => {
        const { API_ENDPOINT } = ConstantsList;
        axios.post(API_ENDPOINT + 'usuarios/createUserWithGoogle', googleUser)
            .then(success)
            .catch(error);
    },
    recuperarCuenta: (correo, success, error) => {
        const { API_ENDPOINT } = ConstantsList;
        axios.post(API_ENDPOINT + 'usuarios/recuperar-cuenta', correo)
            .then(success)
            .catch(error);
    },
    restablecerClave: (tokenAndPassword, success, error) => {
        const { API_ENDPOINT } = ConstantsList;
        axios.post(API_ENDPOINT + 'usuarios/restablecer-clave', tokenAndPassword)
            .then(success)
            .catch(error);
    },
}

export default serviciosRegistro