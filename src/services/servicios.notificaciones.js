import axios from 'axios';
import ConstantsList from '@constants/Constants';
import loginUtils from '@utils/login.utils'

const ServiciosNotificaciones = {
    getAllNotificaciones,
}

function getAllNotificaciones (datos, success, error) {
    const { API_ENDPOINT } = ConstantsList
    const ruta = API_ENDPOINT + "notificaciones/find-notificaciones"
    const parametros = {
        username: loginUtils.getUsernameUser(),
    }
    axios.post(ruta, parametros)
        .then(success)
        .catch(error)
}

export default ServiciosNotificaciones