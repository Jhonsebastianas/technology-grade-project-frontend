import axios from 'axios';
import ConstantsList from '@constants/Constants';

const serviciosTarifas = {
    crearTarifa,
    getTarifaActualByEstratoServicioMes,
    updateOtrosValores,
    updateTarifa,
    
    
}

function crearTarifa (tarifa, success, error)  {
    const { API_ENDPOINT } = ConstantsList;
    axios.post(API_ENDPOINT + 'tarifas/crear-tarifa', tarifa)
        .then(success)
        .catch(error);
}

function getTarifaActualByEstratoServicioMes (tarifa, success, error)  {
    const { API_ENDPOINT } = ConstantsList;
    axios.post(API_ENDPOINT + 'tarifas/tarifa-by-estrato-servicio-mes', tarifa)
        .then(success)
        .catch(error);
}

function updateOtrosValores (tarifa, success, error){
    const { API_ENDPOINT } = ConstantsList;
    axios.post(API_ENDPOINT + 'tarifas/tarifa-otros-valores', tarifa)
        .then(success)
        .catch(error);
}

function updateTarifa (tarifa, success, error){
    const { API_ENDPOINT } = ConstantsList;
    axios.post(API_ENDPOINT + 'tarifas/tarifa-update', tarifa)
        .then(success)
        .catch(error);
}

export default serviciosTarifas