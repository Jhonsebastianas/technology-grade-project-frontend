const SEIS_DIGITOS = 6;

const validateLectura = lectura => {
    const errors = {};
    if (!lectura) {
        errors.lectura = 'Este campo es obligatorio'
    } else if (lectura.toString().length > SEIS_DIGITOS) {
        errors.lectura = 'Máximo 6 caracteres'
    }

    return errors;
}

const validateLecturaInicial = lecturaInicial => {
    const errors = {};
    if (!lecturaInicial) {
        errors.lecturaInicial = 'Este campo es obligatorio'
    } else if (lecturaInicial.toString().length > SEIS_DIGITOS) {
        errors.lecturaInicial = 'Máximo 6 caracteres'
    }
    return errors;
}

export {
    validateLectura,
    validateLecturaInicial
}