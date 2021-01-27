import React from 'react';
import FormularioLogin from '@components/forms/Login'

export default function Login() {
    return (
        <div className="register-photo">
            <div className="form-container">
                {/* <div role="img" aria-label="imagen registro usuario" className="image-holder"></div> */}
                <FormularioLogin />
            </div>
        </div>
    );
}