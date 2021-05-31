import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useToasts } from 'react-toast-notifications'
import ServiciosHogares from '@services/servicios.hogares'
import loginUtils from '@utils/login.utils'
import { Button, Card, Form, Grid, Icon, Input } from 'semantic-ui-react'
import RegistarHogarDetails from './RegistarHogarDetails'

const validate = values => {
    const errors = {};
    if (!values.hogarActual) {
        errors.hogarActual = 'Seleccione si este hogar es en el que vive actualmente.'
    }
    if (!values.estrato) {
        errors.estrato = 'Seleccione el estrato de la vivienda.'
    }
    if (!values.tipoHogar) {
        errors.tipoHogar = 'Seleccione el tipo de hogar de la vivienda'
    }
    return errors;
}

const RegistrarHogarContainer = () => {

    const { addToast } = useToasts()
    const router = useRouter()

    const [hogar, setHogar] = useState({});
    const [servicios, setServicios] = useState([]);
    const [errors, setErrors] = useState({});

    const handledChanged = ({ target }) => {
        const { name, value } = target;
        // console.log(`${name}: ${value}`);
        setHogar({ ...hogar, [name]: value });
    }

    const handledServicio = (event) => {
        console.log(event.target);
        if (event.target.checked) {
            setServicios([...servicios, event.target.value]);
        } else {
            const serviciosRegistrar = servicios.filter(servicio => servicio != event.target.value);
            setServicios(serviciosRegistrar);
        }
    }

    const registerHomeSchema = Yup.object().shape({
        nombre: Yup.string().trim()
            .max(40, 'Máximo 40 caracteres')
            .required('Este campo es obligatorio'),
        numeroContrato: Yup.string().trim()
            .min(6, 'Mínimo 6 números')
            .max(12, 'Máximo 12 números')
            .matches(/^([0-9])*$/, 'Solo números')
            .required('Este campo es obligatorio'),
    });

    const registerNewHome = (values) => {
        const { nombre, numeroContrato } = values;
        const nuevoHogar = {
            ...hogar,
            'servicios': servicios,
            'nombre': nombre,
            'numeroContrato': numeroContrato,
            'username': loginUtils.getUsernameUser(),
        };
        console.log(servicios)
        const error = validate(nuevoHogar);
        setErrors(error);
        if (!Object.keys(error).length) {
            nuevoHogar.hogarActual = (hogar.hogarActual === 'Si') ? true : false;
            ServiciosHogares.registerNewHome(nuevoHogar, () => {
                addToast('Hogar registrado con exito', { appearance: 'success', autoDismiss: true });
                router.push("/home");
            }, (error) => {
                if (error.response) {
                    const { status } = error.response;
                    if (status === 409) {
                        addToast('Hogar actualmente existente', { appearance: 'info' });
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

    const formik = useFormik({
        initialValues: {
            nombre: '',
            numeroContrato: '',
        },
        validationSchema: registerHomeSchema,
        onSubmit: registerNewHome,
    });

    const validarExistenciaServicio = () =>{
        return false;
    }

    return (
        <Form onSubmit={formik.handleSubmit}>
            <Grid>
                <RegistarHogarDetails 
                    formik={formik}
                    handledChanged={handledChanged}
                    errors={errors}
                    handledServicio={handledServicio}
                    hogarQueSeEditara={hogar}
                    validarExistenciaServicio={validarExistenciaServicio}
                />
                <Grid.Column width={16}>
                    <Button type='submit' color="green" disabled={!formik.isValid} >
                        Agregar hogar [+]
                    </Button>
                </Grid.Column>
            </Grid>
        </Form>
    )
}

export default RegistrarHogarContainer;