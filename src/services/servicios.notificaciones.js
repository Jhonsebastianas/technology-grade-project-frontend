import axios from 'axios';
import { API_ENDPOINT } from '@constants/Constants';
import loginUtils from '@utils/login.utils'

const ServiciosNotificaciones = {
    getAllNotificaciones,
    subscribePushNotification,
}

function getAllNotificaciones(datos, success, error) {
    const ruta = API_ENDPOINT + "notificaciones/find-notificaciones"
    const parametros = {
        username: loginUtils.getUsernameUser(),
    }
    axios.post(ruta, parametros)
        .then(success)
        .catch(error)
}

function subscribePushNotification(subscription, success, error) {
    const ruta = API_ENDPOINT + "notificaciones/subscribe-push-notification";
    axios.post(ruta, JSON.stringify(subscription))
        .then(success)
        .catch(error)
}

export default ServiciosNotificaciones