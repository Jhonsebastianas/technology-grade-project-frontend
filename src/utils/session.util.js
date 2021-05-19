import Constants from '@constants/Constants';

export default class SessionUtils { };

SessionUtils.getNumeroContrato = getNumeroContrato;
SessionUtils.getTipoServicio = getTipoServicio;
SessionUtils.RemoveSession = RemoveSession;


function getNumeroContrato() {
    const { HOGAR } = Constants;
    const hogar = JSON.parse(localStorage.getItem(HOGAR));
    return hogar.hogar;
}

function getTipoServicio() {
    const { HOGAR } = Constants;
    const servicio = JSON.parse(localStorage.getItem(HOGAR));
    return servicio.service;
}

function RemoveSession() {
    const { HOGAR} = Constants;
    localStorage.removeItem(HOGAR);

}
