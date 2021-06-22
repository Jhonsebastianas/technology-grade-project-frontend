import axios from 'axios';
import ConstantsList from '@constants/Constants';
import AuthHeader from '@services/auth-header';

const ServiciosLecturas = {
    addLecturaManual,
}

function addLecturaManual (datos, success, error) {
    const { API_ENDPOINT } = ConstantsList
    const ruta = API_ENDPOINT + "lecturas/add-lectura"
    const parametros = {
        lecturaConsumo: datos.lecturaContador,
        numeroContrato: datos.numeroContrato,
        servicioPublico: datos.servicioPublico,
        isLecturaFactura: datos.isLecturaFactura,
    }
    axios.post(ruta, parametros, AuthHeader.headers())
        .then(success)
        .catch(error)
}

export default ServiciosLecturas