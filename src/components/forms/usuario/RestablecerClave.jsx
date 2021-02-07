import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useToasts } from 'react-toast-notifications'
import ServiciosRegistro from '@services/serviciosRegistro'
import { useRouter } from 'next/router'
import { Button, Form, Input } from 'semantic-ui-react';
import { PasswordField } from '@components/commons/inputs/password/PasswordField'

const RestablecerClave = () => {

    const { addToast } = useToasts();
    const router = useRouter()
    const { query: { tokenUsuario } } = router

    const newPasswordSchema = Yup.object().shape({
        clave: Yup.string()
            .required('Este campo es obligatorio')
            .matches('^(?=\\w*\\d)(?=\\w*[A-Z])(?=\\w*[a-z])\\S{8,20}$', 'La clave debe tener al entre 8 y 20 caracteres, un dígito, una letra minúscula y una letra mayúscula.'),
        claveConfirmada: Yup.string()
            .test('ok', 'Las constaseñas no coinciden', function (value) {
                return this.parent.clave === value;
            }),
    });

    const restablecerClave = (value) => {
        const parametros = {
            clave: value.clave,
            token: tokenUsuario
        }
        ServiciosRegistro.restablecerClave(parametros, ({ data }) => {
            addToast('Contraseña restablecida', { appearance: 'success' });
            router.push("/login");
        }, (error) => {
            if (error.response) {
                const { status } = error.response;
                if (status === 409) {
                    addToast('El usuario no existe', { appearance: 'info' });
                } else if (status === 401) {
                    addToast('El tiempo para recuperar la cuenta a expirado', { appearance: 'warning' });
                } else if (status === 500) {
                    addToast('oh no :(, no eres tú somos nosotros, algo a ido mal', { appearance: 'error' });
                }
            } else {
                addToast('oh no :(, no eres tú somos nosotros, algo a ido mal', { appearance: 'error' });
            }
        });
    }

    const formik = useFormik({
        initialValues: {
            clave: '',
            claveConfirmada: '',
        },
        validationSchema: newPasswordSchema,
        onSubmit: restablecerClave,
    });

    return (
        <Form onSubmit={formik.handleSubmit}>
            <PasswordField label='Nueva contraseña:' name='clave' id='clave'
                {...formik.getFieldProps('clave')}
                validator={formik.touched.clave && formik.errors.clave ? (<div className="ui pointing red basic label">{formik.errors.clave}</div>) : null}
            />
            <PasswordField label='Repetir contraseña:' name='claveConfirmada' id='claveConfirmada'
                {...formik.getFieldProps('claveConfirmada')}
                validator={formik.touched.claveConfirmada && formik.errors.claveConfirmada ? (<div className="ui pointing red basic label">{formik.errors.claveConfirmada}</div>) : null}
            />
            <Button type='submit'  disabled={!formik.isValid} >
                Recuperar
            </Button>
        </Form>
    );
}

export default RestablecerClave