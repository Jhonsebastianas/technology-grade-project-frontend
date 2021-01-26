import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { GoogleLogin } from 'react-google-login';
import { Button, TextInput } from 'react-materialize';
import { useToasts } from 'react-toast-notifications';
import Services from '@services/serviciosRegistro'
import { PasswordField } from '@components/commons/inputs/password/PasswordField'
import stylesGoogle from '@styles/modules/stylesGoogle.module.css'

const RegistrarUsuario = () => {

    const { boton, imagenGoogle } = stylesGoogle;
    const { addToast } = useToasts();
    const router = useRouter()

    const registerSchema = Yup.object().shape({
        nombres: Yup.string().trim()
            .max(60, 'Máximo 60 caracteres')
            .required('Este campo es obligatorio'),
        apellidos: Yup.string().trim()
            .max(60, 'Máximo 60 caracteres')
            .required('Este campo es obligatorio'),
        correo: Yup.string().trim()
            .required('Este campo es obligatorio')
            .email('Correo electronico invalido')
            .min(5, 'Mínimo 5 caracteres'),
        clave: Yup.string()
            .required('Este campo es obligatorio')
            .matches('^(?=\\w*\\d)(?=\\w*[A-Z])(?=\\w*[a-z])\\S{8,20}$', 'La clave debe tener al entre 8 y 20 caracteres, un dígito, una letra minúscula y una letra mayúscula.')
    });

    const registerNewUser = (values) => {
        Services.newUser(values, ({ data }) => {
            addToast('¡Usuario registrado con exito!', { appearance: 'success' });
            router.push("notificacion/activar-cuenta");
        }, (error) => {
            if (error.response) {
                const { status } = error.response;
                if (status === 409) {
                    addToast('Cuenta actualmente existente', { appearance: 'info' });
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

    const formik = useFormik({
        initialValues: {
            nombres: '',
            apellidos: '',
            correo: '',
            clave: '',
        },
        validationSchema: registerSchema,
        onSubmit: registerNewUser,
    });

    /**
     * Sing up with google
     */
    const respuestaGoogle = (response) => {
        console.log(response.profileObj);
        if (response.profileObj) {
            const googleUser = {
                nombres: response.profileObj.givenName,
                apellidos: response.profileObj.familyName,
                correo: response.profileObj.email,
                googleId: response.profileObj.googleId,
            };
            Services.newGoogleUser(googleUser, () => {
                addToast('¡Usuario registrado y verificado con exito!', { appearance: 'success', autoDismiss: true });
                router.push("login");
            }, (error) => {
                if (error.response) {
                    const { status } = error.response;
                    if (status === 409) {
                        addToast('Cuenta actualmente existente', { appearance: 'info' });
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
    }

    return (
        <form onSubmit={formik.handleSubmit} className='form-control'>
            <h2 className="center"><strong>Crear</strong> una cuenta.</h2>
            <TextInput label='Nombres:' name="nombres" id='nombres'
                {...formik.getFieldProps('nombres')}
                children={formik.touched.nombres && formik.errors.nombres ? (<span className="helper-text red-text">{formik.errors.nombres}</span>) : null}
            />
            <TextInput label='Apellidos:' name="apellidos" id='apellidos'
                {...formik.getFieldProps('apellidos')}
                children={formik.touched.apellidos && formik.errors.apellidos ? (<span className="helper-text red-text">{formik.errors.apellidos}</span>) : null}
            />
            <TextInput label='Correo:' email name="correo" id='correo'
                {...formik.getFieldProps('correo')}
                children={formik.touched.correo && formik.errors.correo ? (<span className="helper-text red-text">{formik.errors.correo}</span>) : null}
            />
            <PasswordField label='Clave:' name='clave' id='clave' s={12} m={5} l={5}
                {...formik.getFieldProps('clave')}
                children={formik.touched.clave && formik.errors.clave ? (<span className="helper-text red-text">{formik.errors.clave}</span>) : null}
            />
            <Button style={{ width: "100%" }} type='submit' disabled={!formik.isValid} >
                Registrarse
                </Button>
            <GoogleLogin
                clientId="31983275788-597slnqbnq71p45qajk27m718vqj13pq.apps.googleusercontent.com"
                render={renderProps => (
                    <button className={boton} onClick={renderProps.onClick} disabled={renderProps.disabled}>
                        <Image
                            alt="google icon"
                            src='/images/google.svg'
                            width="auto"
                            height="20px"
                            className={imagenGoogle}
                        />
                        Registrate con Google</button>
                )}
                onSuccess={respuestaGoogle}
                onFailure={respuestaGoogle}
                cookiePolicy={'single_host_origin'}
            />
            <br></br>
            <br></br>
            <Link className="already" href='/login' ><a>¿Ya tienes una cuenta? Ingresa aquí.</a></Link>
        </form>
    )
}

export default RegistrarUsuario