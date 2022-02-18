import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { GoogleLogin } from 'react-google-login';
import { Form, Button, Input, Divider } from 'semantic-ui-react';
import { useToasts } from 'react-toast-notifications';
import Services from '@services/serviciosRegistro'
import { PasswordField } from '@components/commons/inputs/password/PasswordField'
import stylesGoogle from '@styles/modules/stylesGoogle.module.css'
import ModalTerminosCondiciones from '@components/hooks/TerminosCondiciones'

const RegistrarUsuario = () => {

    const { boton, imagenGoogle } = stylesGoogle;
    const { addToast } = useToasts();
    const router = useRouter()
    const [recuperarCuenta, setRecuperarCuenta] = useState(false)

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
            .matches('^(?=\\w*\\d)(?=\\w*[A-Z])(?=\\w*[a-z])\\S{8,20}$', 'La clave debe tener al entre 8 y 20 caracteres, un dígito, una letra minúscula y una letra mayúscula.'),
        claveConfirmada: Yup.string()
            .test('ok', 'Las constaseñas no coinciden', function (value) {
                return this.parent.clave === value;
            }),
    });

    const registerNewUser = (values) => {
        const { claveConfirmada, ...usuarioNuevo } =  values
        Services.newUser(usuarioNuevo, ({ data }) => {
            addToast('¡Usuario registrado con exito!', { appearance: 'success', autoClose: '5000' });
            router.push("/notificacion/activar-cuenta");
        }, (error) => {
            if (error.response) {
                const { status } = error.response;
                if (status === 409) {
                    addToast('Cuenta actualmente existente', { appearance: 'info' });
                    setRecuperarCuenta(true)
                } else if (status === 422) {
                    addToast('Valida la información, por favor', { appearance: 'warning' });
                } else if (status === 500) {
                    addToast('oh no :(, no eres tú somos nosotros, algo a ido mal', { appearance: 'error' });
                } else if (status === 503) {
                    addToast('En este momento tenemos problemas para enviar el correo electrónico para crear su cuenta, por favor inténtelo más tarde.', { appearance: 'error' });
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
            claveConfirmada: '',
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
                router.push("/login");
            }, (error) => {
                if (error.response) {
                    const { status } = error.response;
                    if (status === 409) {
                        addToast('Cuenta actualmente existente', { appearance: 'info' });
                        setRecuperarCuenta(true)
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
        <Form onSubmit={formik.handleSubmit} className='form-control'>
            <h2 className="center aligned"><strong>Crear</strong> una cuenta</h2>
            <Form.Field>
                <label htmlFor='nombres'>Nombres:</label>
                <Input type="text" name="nombres" id='nombres' placeholder="Armando"
                    {...formik.getFieldProps('nombres')}
                />
                {formik.touched.nombres && formik.errors.nombres ? (<div className="ui pointing red basic label">{formik.errors.nombres}</div>) : null}
            </Form.Field>
            <Form.Field>
                <label htmlFor='apellidos'>Apellidos:</label>
                <Input type="text" name="apellidos" id='apellidos' placeholder="Hogares"
                    {...formik.getFieldProps('apellidos')}
                />
                {formik.touched.apellidos && formik.errors.apellidos ? (<div className="ui pointing red basic label">{formik.errors.apellidos}</div>) : null}
            </Form.Field>
            <Form.Field>
                <label htmlFor='correo'>Correo:</label>
                <Input type="text" name="correo" id='correo' placeholder="ejemplo@gmail.com"
                    {...formik.getFieldProps('correo')}
                />
                {formik.touched.correo && formik.errors.correo ? (<div className="ui pointing red basic label">{formik.errors.correo}</div>) : null}
            </Form.Field>
            <PasswordField label='Clave:' name='clave' id='clave'
                {...formik.getFieldProps('clave')}
                validator={formik.touched.clave && formik.errors.clave ? (<div className="ui pointing red basic label">{formik.errors.clave}</div>) : null}
            />
            <PasswordField label='Confirmar clave:' name='claveConfirmada' id='claveConfirmada'
                {...formik.getFieldProps('claveConfirmada')}
                validator={formik.touched.claveConfirmada && formik.errors.claveConfirmada ? (<div className="ui pointing red basic label">{formik.errors.claveConfirmada}</div>) : null}
            />
            <ModalTerminosCondiciones trigger={<a className="already">Al registrarte aceptas todos nuestros <strong>términos y condiciones.</strong></a>} />
            <br></br>
            {
                recuperarCuenta &&
                <div>
                    <div className="ui two column centered grid">
                        <div className="column">
                            <Link href='usuario/recuperar-cuenta' ><a className="text center">¿Olvidaste tu clave?</a></Link>
                        </div>
                    </div>
                    <br></br>
                </div>
            }
            <Button className="botonRegistrar" type='submit' disabled={!formik.isValid} >
                Registrarse
            </Button>
            <Divider
                // className='header'
                horizontal
            >
                o
            </Divider>
            <GoogleLogin
                clientId="31983275788-597slnqbnq71p45qajk27m718vqj13pq.apps.googleusercontent.com"
                render={renderProps => (
                    <button className={boton} onClick={renderProps.onClick} disabled={renderProps.disabled}>
                        <img
                            alt="google icon"
                            src='/images/google.svg'
                            className={imagenGoogle}
                        />
                        <span>Registrate con Google</span>
                    </button>
                )}
                onSuccess={respuestaGoogle}
                onFailure={respuestaGoogle}
                cookiePolicy={'single_host_origin'}
            />
            <br></br>
            <br></br>
            <Link href='/login' ><a className="already">¿Ya tienes una cuenta? Ingresa aquí.</a></Link>
        </Form>
    )
}

export default RegistrarUsuario
