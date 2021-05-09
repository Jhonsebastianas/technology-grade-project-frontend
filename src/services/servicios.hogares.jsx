import axios from 'axios';
import ConstantsList from '@constants/Constants';
import AuthHeader from '@services/auth-header'

const serviciosHogares = {
    getHogaresByUsername,
    updateHogarByNumeroContrato,
    getCantidadHogaresByUsername,
    getHogaresAndLecturas,
}

function getHogaresByUsername(username, success, error) {
    const { API_ENDPOINT } = ConstantsList;
    axios.post(API_ENDPOINT + 'home/homes-user', { username: username }, AuthHeader.headers())
        .then(success)
        .catch(error);
}

function getCantidadHogaresByUsername(username, success, error) {
    const { API_ENDPOINT } = ConstantsList;
    axios.post(API_ENDPOINT + 'home/cantidad-hogares-usuario', { username: username }, AuthHeader.headers())
        .then(success)
        .catch(error);
}

function getHogaresAndLecturas(username, success, error) {
    const { API_ENDPOINT } = ConstantsList;
    axios.post(API_ENDPOINT + 'home/hogares-y-lecturas-usuario', { username: username }, AuthHeader.headers())
        .then(success)
        .catch(error);
}

function updateHogarByNumeroContrato(hogar, success, error) {
    const { API_ENDPOINT } = ConstantsList;
    axios.post(API_ENDPOINT + 'home/editar-hogar', hogar, AuthHeader.headers())
        .then(success)
        .catch(error);
}

export default serviciosHogares