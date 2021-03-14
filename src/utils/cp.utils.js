export default class ControlsepUtils { };

ControlsepUtils.formatoMoneda = formatoMoneda;
ControlsepUtils.formatoMedidaAgua = formatoMedidaAgua;
ControlsepUtils.formatoMedidaEnergia = formatoMedidaEnergia;

/** FORMATOS */
function formatoMoneda (valor) {
    if (isNaN(parseFloat(valor))) {
        return `$ ${new Intl.NumberFormat().format(0)} COP`
    }
    return `$ ${new Intl.NumberFormat().format(valor)} COP`
}

function formatoMedidaAgua (valor) {
    if (isNaN(parseFloat(valor))) {
        return `${new Intl.NumberFormat().format(0)} m`
    }
    return `${new Intl.NumberFormat().format(valor)} m`
}

function formatoMedidaEnergia (valor) {
    if (isNaN(parseFloat(valor))) {
        return `${new Intl.NumberFormat().format(0)} Kwh`
    }
    return `${new Intl.NumberFormat().format(valor)} Kwh`
}