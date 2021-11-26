import React from 'react';
import FormularioLogin from '@components/forms/Login'
import BotonAtras from '@components/commons/botones/boton-atras/BotonAtras';

export default function Login() {
    return (
        <div className="register-photo">
            <BotonAtras isPublic={true} />
            <div className="form-container">
                {/* <div role="img" aria-label="imagen registro usuario" className="image-holder"></div> */}
                <FormularioLogin />
            </div>
        </div>
    );
}