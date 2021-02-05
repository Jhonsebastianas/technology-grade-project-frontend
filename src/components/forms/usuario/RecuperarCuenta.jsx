import React, { useState } from 'react'
import { useToasts } from 'react-toast-notifications'
import ServiciosRegistro from '@services/serviciosRegistro'
import { useRouter } from 'next/router'
import { Button, Form, Input } from 'semantic-ui-react';

const RecuperarCuenta = () => {

    const [emailRecuperacion, setEmailRecuperacion] = useState('');

    const { addToast } = useToasts();
    const router = useRouter();

    const handleEmailChange = (event) => {
        if (event.target.name === 'correo') {
            setEmailRecuperacion(event.target.value);
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const parametros = {
            correo: emailRecuperacion
        }
        ServiciosRegistro.recuperarCuenta(parametros, ({ data }) => {
            addToast('Correo de recuperación envíado', { appearance: 'success' });
            router.push("/notificacion/recuperar-cuenta");
        }, (error) => {
            if (error.response) {
                const { status } = error.response;
                if (status === 409) {
                    addToast('Cuenta no existente', { appearance: 'info', autoDismiss: true });
                } else if (status === 422) {
                    addToast('Valida la información, por favor', { appearance: 'warning' });
                } else if (status === 500) {
                    addToast('oh no :(, no eres tú somos nosotros, algo a ido mal', { appearance: 'error' });
                }
            } else {
                addToast('oh no :(, no eres tú somos nosotros, algo a ido mal', { appearance: 'error' });
            }
        });
    }

    return (
        <Form onSubmit={handleSubmit}>
                <Form.Field>
                    <label htmlFor='correo'>Correo de recuperación:</label>
                    <Input type="email" name="correo" id='correo' placeholder="ejemplo@ejemplo.com"
                        value={emailRecuperacion} onChange={handleEmailChange} />
                </Form.Field>
                <Button type='submit'>
                    Recuperar
                </Button>
        </Form>
    );
}

export default RecuperarCuenta