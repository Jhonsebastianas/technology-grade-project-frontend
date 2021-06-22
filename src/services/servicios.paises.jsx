import axios from 'axios';
import ConstantsList from '@constants/Constants';

const serviciosPaises = {
    getCiudadByDivipola,
    
    
}

function  getCiudadByDivipola(codigoDivipola, success, error)  {
    const { API_ENDPOINT } = ConstantsList;
    axios.post(API_ENDPOINT + 'paises/get-ciudad-divipola', codigoDivipola)
        .then(success)
        .catch(error);
}

export default serviciosPaises