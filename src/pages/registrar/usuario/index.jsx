import React from 'react'
import FormularioRegistro from '@components/forms/usuario/RegistrarUsuario';

const RegistrarUsuario = () => {
    return (
        <div className="register-photo">
            <div className="form-container">
                <div role="img" aria-label="imagen registro usuario" className="image-holder"></div>
                    <FormularioRegistro/>
            </div>
        </div>
    )
}

export default RegistrarUsuario