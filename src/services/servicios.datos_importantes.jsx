import axios from 'axios';
import ConstantsList from '@constants/Constants';

const serviciosDatosImportantes = {

    getDatoAleatorio: (success, error) => {
        const { API_ENDPOINT } = ConstantsList;
        axios.get(API_ENDPOINT + 'datos-importantes/dato-aleatorio')
            .then(success)
            .catch(error);
    }
}

export default serviciosDatosImportantes