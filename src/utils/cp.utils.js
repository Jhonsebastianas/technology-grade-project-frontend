export default class ControlsepUtils { };

ControlsepUtils.formatoLectura = formatoLectura;
ControlsepUtils.formatoMoneda = formatoMoneda;
ControlsepUtils.formatoMedidaAgua = formatoMedidaAgua;
ControlsepUtils.formatoMedidaEnergia = formatoMedidaEnergia;
ControlsepUtils.formatoMedidaGas = formatoMedidaGas;

/** FORMATOS */
function formatoLectura (valor) {
    if(isNaN(parseInt(valor))) {
        return 0;
    }
    return Math.round(valor);
}

function formatoMoneda (valor) {
    if (isNaN(parseFloat(valor))) {
        return `$ ${new Intl.NumberFormat().format(0)} COP`;
    }
    return `$ ${new Intl.NumberFormat().format(valor)} COP`;
}

function formatoMedidaAgua (valor) {
    if (isNaN(parseFloat(valor))) {
        return `${new Intl.NumberFormat().format(0)} m`;
    }
    return `${new Intl.NumberFormat().format(valor)} m`;
}

function formatoMedidaEnergia (valor) {
    if (isNaN(parseFloat(valor))) {
        return `${new Intl.NumberFormat().format(0)} Kwh`;
    }
    return `${new Intl.NumberFormat().format(valor)} Kwh`;
}

function formatoMedidaGas (valor) {
    if (isNaN(parseFloat(valor))) {
        return `${new Intl.NumberFormat().format(0)} m`;
    }
    return `${new Intl.NumberFormat().format(valor)} m`;
}