import axios from 'axios';
import ConstantsList from '@constants/Constants';
import AuthHeader from '@services/auth-header';

const ServiciosLecturas = {
    addLecturaManual,
    agregarLecturaFactura,
    isPrimeraLecturaManual,
}

function addLecturaManual(datos, success, error) {
    const { API_ENDPOINT } = ConstantsList
    const ruta = API_ENDPOINT + "lecturas/add-lectura"
    const parametros = {
        lecturaConsumo: datos.lecturaContador,
        numeroContrato: datos.numeroContrato,
        servicioPublico: datos.servicioPublico,
        isLecturaFactura: datos.isLecturaFactura,
    }
    axios.put(ruta, parametros, AuthHeader.headers())
        .then(success)
        .catch(error)
}

function agregarLecturaFactura(datos, success, error = (err) => console.log(err)) {
    const { API_ENDPOINT } = ConstantsList
    const ruta = API_ENDPOINT + "lecturas/add-lectura-factura"
    const parametros = {
        lecturaConsumo: datos.lecturaContador,
        numeroContrato: datos.numeroContrato,
        servicioPublico: datos.servicioPublico,
    }
    axios.put(ruta, parametros, AuthHeader.headers())
        .then(success)
        .catch(error)
}

function isPrimeraLecturaManual(datos, success, error = (err) => console.log(err)) {
    const { API_ENDPOINT } = ConstantsList
    const ruta = API_ENDPOINT + "lecturas/is-primera-lectura-manual"
    const parametros = {
        numeroContrato: datos.numeroContrato,
        servicioPublico: datos.servicioPublico,
    }
    axios.post(ruta, parametros, AuthHeader.headers())
        .then(success)
        .catch(error)
}

export default ServiciosLecturas