  
import axios from 'axios';
import ConstantsList from '@constants/Constants';

const serviciosHogares = {
    getHogaresByUsername: (username, success, error) => {
        const { API_ENDPOINT } = ConstantsList;
        axios.post(API_ENDPOINT + 'home/homes-user', {username: username})
            .then(success)
            .catch(error);
    },
    updateHogarByNumeroContrato,
    getCantidadHogaresByUsername,
    getHogaresAndLecturas,
    getHogarAndLectura,
    getHogarLectura,
}

function getCantidadHogaresByUsername (username, success, error) {
    const { API_ENDPOINT } = ConstantsList;
    axios.post(API_ENDPOINT + 'home/cantidad-hogares-usuario', {username: username})
        .then(success)
        .catch(error);
}

function getHogaresAndLecturas (username, success, error) {
    const { API_ENDPOINT } = ConstantsList;
    axios.post(API_ENDPOINT + 'home/hogares-y-lecturas-usuario', {username: username})
        .then(success)
        .catch(error);
}

function getHogarAndLectura (numeroContrato, username, success, error) {
    const { API_ENDPOINT } = ConstantsList;
    axios.post(API_ENDPOINT + 'home/hogar-consumo', {numeroContrato: numeroContrato, username : username})
        .then(success)
        .catch(error);
}

function getHogarLectura (numeroContrato, username, tiposervicio, success, error) {
    const { API_ENDPOINT } = ConstantsList;
    axios.post(API_ENDPOINT + 'home/hogar-lectura', {numeroContrato: numeroContrato, username : username, tiposervicio : tiposervicio})
        .then(success)
        .catch(error);
}

function updateHogarByNumeroContrato (hogar, success, error)  {
    const { API_ENDPOINT } = ConstantsList;
    axios.post(API_ENDPOINT + 'home/editar-hogar', hogar)
        .then(success)
        .catch(error);
}

export default serviciosHogares