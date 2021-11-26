import React from 'react'
import FormularioRegistro from '@components/forms/usuario/RegistrarUsuario';
import BotonAtras from '@components/commons/botones/boton-atras/BotonAtras';

const RegistrarUsuario = () => {
    return (
        <div className="register-photo">
            <BotonAtras isPublic={true} />
            <div className="form-container">
                <div role="img" aria-label="imagen registro usuario" className="image-holder"></div>
                    <FormularioRegistro/>
            </div>
        </div>
    )
}

export default RegistrarUsuario