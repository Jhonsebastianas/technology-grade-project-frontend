import React, { useState } from 'react';
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { PasswordField } from '@components/commons/inputs/password/PasswordField'
import { GoogleLogin } from 'react-google-login';
import ConstantsList from '@constants/Constants';
import { serviciosLogin } from '@services/serviciosLogin'
// CSS
import { Form, Button, Input, Divider } from 'semantic-ui-react';
import stylesGoogle from '@styles/modules/stylesGoogle.module.css';
import { useToasts } from 'react-toast-notifications';

const FormularioLogin = () => {

    const { addToast } = useToasts();

    const { boton, imagenGoogle } = stylesGoogle;

    const router = useRouter()
    const [recuperarCuenta, setRecuperarCuenta] = useState(false)

    const loginSchema = Yup.object().shape({
        correo: Yup.string().trim()
            .required('Este campo es obligatorio')
            .email('Correo electronico invalido'),
        clave: Yup.string()
            .required('Este campo es obligatorio')
    });

    const loginUser = values => {
        serviciosLogin.login(values, succesLogin, (error) => {
            if (error.response) {
                const { status } = error.response;
                if (status === 400) {
                    addToast('Cuenta registrada con Google', { appearance: 'warning' });
                } else if (status === 401) {
                    setRecuperarCuenta(true)
                    addToast('Valida la información por favor', { appearance: 'warning' });
                } else if (status === 403) {
                    addToast('Aún no has activado tu cuenta', { appearance: 'info' });
                    setRecuperarCuenta(true)
                } else {
                    addToast('oh no :(, no eres tú somos nosotros, algo a ido mal', { appearance: 'error' });
                }
            } else {
                addToast('oh no :(, no eres tú somos nosotros, algo a ido mal', { appearance: 'error' });
            }
        });
    }

    const formik = useFormik({
        initialValues: {
            correo: '',
            clave: '',
        },
        validationSchema: loginSchema,
        onSubmit: loginUser,
    });

    const respuestaGoogle = (response) => {
        console.log(response);
        console.log(response.profileObj);
        serviciosLogin.loginWithGoogle(response.profileObj, succesLogin, (error) => {
            if (error.response) {
                const { status } = error.response;
                if (status === 401) {
                    addToast('Valida la información por favor', { appearance: 'warning' });
                    setRecuperarCuenta(true)
                } else if (status === 403) {
                    addToast('Aún no has activado tu cuenta', { appearance: 'info' });
                    setRecuperarCuenta(true)
                } else {
                    addToast('oh no :(, no eres tú somos nosotros, algo a ido mal', { appearance: 'error' });
                }
            } else {
                addToast('oh no :(, no eres tú somos nosotros, algo a ido mal', { appearance: 'error' });
            }
        });
    }

    const succesLogin = ({ data }) => {
        const { TOKEN_NAME, USER_NAME } = ConstantsList;
        const { token, usuario } = data;
        const user = {};
        user[TOKEN_NAME] = token;
        user['usuario'] = usuario;
        localStorage.setItem(USER_NAME, JSON.stringify(user));
        router.push("home");
    }

    return (
        <Form onSubmit={formik.handleSubmit}>
            <Form.Field>
                <label htmlFor='correo'>Correo:</label>
                <Input type="email" name="correo" id='correo' placeholder="ejemplo@ejemplo.com"
                    {...formik.getFieldProps('correo')}
                />
                {formik.touched.correo && formik.errors.correo ? (<div className="ui pointing red basic label">{formik.errors.correo}</div>) : null}
            </Form.Field>
            <PasswordField label='Clave:' name='clave' id='clave'
                {...formik.getFieldProps('clave')}
                validator={formik.touched.clave && formik.errors.clave ? (<div className="ui pointing red basic label">{formik.errors.clave}</div>) : null}
            />
            {
                recuperarCuenta &&
                <div>
                    <br></br>
                    <div className="ui two column centered grid">
                        <Link href='/registrar/usuario/recuperar-cuenta' ><a className="text center">¿Olvidaste tu clave?</a></Link>
                    </div>
                    <br></br>
                    <br></br>
                </div>
            }
            <Button type='submit' style={{ width: "100%" }} disabled={!formik.isValid} >
                Ingresar
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
                        <span>Inicia Sesión con Google</span>
                        </button>
                )}
                onSuccess={respuestaGoogle}
                onFailure={respuestaGoogle}
                cookiePolicy={'single_host_origin'}
            />
            <br></br>
            <br></br>
            <Link href='/registrar/usuario' ><a className="already">¿No tienes una cuenta? Ingresa aquí.</a></Link>
        </Form>
    );
}


export default FormularioLogin