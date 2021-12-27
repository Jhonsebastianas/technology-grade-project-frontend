import React from 'react';
import FormularioRecuperar from '@components/forms/usuario/RecuperarCuenta';
import BotonAtras from '@components/commons/botones/boton-atras/BotonAtras';

const RecuperarCuenta = () => {
    return (
        <div className="register-photo">
            <BotonAtras isPublic={true} />
            <div className="form-container">
                {/* <div role="img" aria-label="imagen registro usuario" className="image-holder"></div> */}
                <FormularioRecuperar />
            </div>
        </div>
    )
}

export default RecuperarCuenta