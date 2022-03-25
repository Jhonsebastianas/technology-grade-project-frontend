import axios from 'axios';
import ConstantsList from '@constants/Constants';
import AuthHeader from '@services/auth-header';

const serviciosDatosImportantes = {

    getDatoAleatorio: (success, error) => {
        const { API_ENDPOINT } = ConstantsList;
        axios.get(API_ENDPOINT + 'datos-importantes/dato-aleatorio')
            .then(success)
            .catch(error);
    },
    nuevoDato: (nuevoDato, success, error) => {
        const { API_ENDPOINT } = ConstantsList;
        axios.post(API_ENDPOINT + 'datos-importantes/crear-dato', nuevoDato, AuthHeader.headers())
            .then(success)
            .catch(error);
    },
    getDatosActuales: (success, error) => {
        const { API_ENDPOINT } = ConstantsList;
        axios.get(API_ENDPOINT + 'datos-importantes/datos-importantes-list')
            .then(success)
            .catch(error);
    },
    getDatoById: (datoId, success, error) => {
        const { API_ENDPOINT } = ConstantsList;
        axios.get(API_ENDPOINT + `datos-importantes/editar-dato/${datoId}`, AuthHeader.headers())
            .then(success)
            .catch(error);
    },
    deleteDatoById: (datoId, success, error) => {
        const { API_ENDPOINT } = ConstantsList;
        console.log(datoId)
        axios.delete(API_ENDPOINT + 'datos-importantes/eliminar-dato/' + datoId, AuthHeader.headers())
            .then(success)
            .catch(error);
    },
    updateDato: (actualizarDato, success, error) => {
        const { API_ENDPOINT } = ConstantsList;
        axios.put(API_ENDPOINT + 'datos-importantes/actualizar-dato/' + actualizarDato.datoId, actualizarDato, AuthHeader.headers())
            .then(success)
            .catch(error);
    }
}

export default serviciosDatosImportantes