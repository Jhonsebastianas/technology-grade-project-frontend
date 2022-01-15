import axios from 'axios';
import ConstantsList from '@constants/Constants';
import AuthHeader from '@services/auth-header';


const serviciosUsuario = {
    getUsuariosLimitado,
    getUsuariosFrase,
    agregarPerfilAdministrador,
    getNumeroUsuariosAdmin,
    
}

function getUsuariosLimitado(opciones,success, error) {
    const { API_ENDPOINT } = ConstantsList;
    axios.post(API_ENDPOINT + 'usuarios/usuariosLimitado', opciones)
        .then(success)
        .catch(error);
}

function getUsuariosFrase(frase, success, error) {
    const { API_ENDPOINT } = ConstantsList;
    axios.post(API_ENDPOINT + 'usuarios/usuariosFrase', frase)
        .then(success)
        .catch(error);
}

function agregarPerfilAdministrador(correos, success, error) {
    const { API_ENDPOINT } = ConstantsList;
    axios.post(API_ENDPOINT + 'usuarios/agregarPerfilAdministrador', correos)
        .then(success)
        .catch(error);
}

function getNumeroUsuariosAdmin(success, error) {
    const { API_ENDPOINT } = ConstantsList;
    axios.post(API_ENDPOINT + 'usuarios/numeroUsuariosAdmin')
        .then(success)
        .catch(error);
}

export default serviciosUsuario