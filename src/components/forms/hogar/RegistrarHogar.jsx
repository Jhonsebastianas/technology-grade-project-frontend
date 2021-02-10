import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useToasts } from 'react-toast-notifications'
import ServiciosRegistro from '@services/serviciosRegistro'
import loginUtils from '@utils/login.utils'
import { Button, Card, Form, Grid, Icon, Input } from 'semantic-ui-react'

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

const RegistrarHogar = () => {

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
            const posService = servicios.indexOf(event.target.value) + 1;
            setServicios([...servicios.splice(posService, 1)]);
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
        const error = validate(nuevoHogar);
        setErrors(error);
        if (!Object.keys(error).length) {
            nuevoHogar.hogarActual = (hogar.hogarActual === 'Si') ? true : false;
            ServiciosRegistro.registerNewHome(nuevoHogar, () => {
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

    return (
        <Form onSubmit={formik.handleSubmit}>
            <Grid>
                <Grid.Column width={16}>
                    <Form.Group widths='equal'>
                        <Form.Field width={16}>
                            <label htmlFor='nombreHogar'>Nombre hogar: *</label>
                            <Input name="nombreHogar" id='nombreHogar' placeholder='Casa abuela'
                                {...formik.getFieldProps('nombre')} />
                            {formik.touched.nombre && formik.errors.nombre ? (<div className="ui pointing red basic label">{formik.errors.nombre}</div>) : null}
                        </Form.Field>
                        <Form.Field width={16}>
                            <label htmlFor='numeroContrato'># Contrato: *</label>
                            <Input name="numeroContrato" id='numeroContrato' autoComplete="off"
                                {...formik.getFieldProps('numeroContrato')} />
                            {formik.touched.numeroContrato && formik.errors.numeroContrato ? (<div className="ui pointing red basic label">{formik.errors.numeroContrato}</div>) : null}
                        </Form.Field>
                        <Form.Field>
                            <label>¿Este es el hogar en el que actualmente vive? *</label>
                            <Form.Group inline>
                                <div className="field">
                                    <div className="ui radio checkbox">
                                        <input type="radio" name='hogarActual' id='hogarPrincipalSi' value='Si'
                                            onChange={handledChanged} />
                                        <label htmlFor="hogarPrincipalSi">Sí</label>
                                    </div>
                                </div>
                                <div className="field">
                                    <div className="ui radio checkbox">
                                        <input type="radio" name='hogarActual' id='hogarPrincipalNo' value='No'
                                            onChange={handledChanged} />
                                        <label htmlFor="hogarPrincipalNo">No</label>
                                    </div>
                                </div>
                            </Form.Group>
                            {errors.hogarActual && (<div className="ui pointing red basic label">{errors.hogarActual}</div>)}
                        </Form.Field>
                    </Form.Group>
                </Grid.Column>
                <Grid.Column width={16}>
                    <Form.Group>
                        <Form.Field>
                            <label>Tipo de vivienda: *</label>
                            <Card.Group>
                                <Card>
                                    <Card.Content>
                                        <div className="field">
                                            <div className="ui radio checkbox">
                                                <input type="radio" name='tipoHogar' id='tipoHogarCasa' value='casa'
                                                    onChange={handledChanged} />
                                                <label htmlFor="tipoHogarCasa"><Icon className="home"></Icon>Casa</label>
                                            </div>
                                        </div>
                                    </Card.Content>
                                </Card>
                                <Card>
                                    <Card.Content>
                                        <div className="field">
                                            <div className="ui radio checkbox">
                                                <input type="radio" name='tipoHogar' id='tipoHogarApartamento' value='apartamento'
                                                    onChange={handledChanged} />
                                                <label htmlFor="tipoHogarApartamento"><Icon className="building"></Icon>Apartamento</label>
                                            </div>
                                        </div>
                                    </Card.Content>
                                </Card>
                                <Card>
                                    <Card.Content>
                                        <div className="field">
                                            <div className="ui radio checkbox">
                                                <input type="radio" name='tipoHogar' id='tipoHogarOtro' value='otro'
                                                    onChange={handledChanged} />
                                                <label htmlFor="tipoHogarOtro"><Icon className="factory"></Icon>Otro</label>
                                            </div>
                                        </div>
                                    </Card.Content>
                                </Card>
                            </Card.Group>
                            {errors.tipoHogar && (<div className="ui pointing red basic label">{errors.tipoHogar}</div>)}
                        </Form.Field>
                        <Form.Field>
                            <label>Estrato de la vivienda: *</label>
                            <Form.Group inline>
                                <div className="field">
                                    <div className="ui radio checkbox">
                                        <input type="radio" name='estrato' id='estrato1' value='1'
                                            onChange={handledChanged} />
                                        <label htmlFor="estrato1">1</label>
                                    </div>
                                </div>
                                <div className="field">
                                    <div className="ui radio checkbox">
                                        <input type="radio" name='estrato' id='estrato2' value='2'
                                            onChange={handledChanged} />
                                        <label htmlFor="estrato2">2</label>
                                    </div>
                                </div>
                                <div className="field">
                                    <div className="ui radio checkbox">
                                        <input type="radio" name='estrato' id='estrato3' value='3'
                                            onChange={handledChanged} />
                                        <label htmlFor="estrato3">3</label>
                                    </div>
                                </div>
                            </Form.Group>
                            <Form.Group inline>
                                <div className="field">
                                    <div className="ui radio checkbox">
                                        <input type="radio" name='estrato' id='estrato4' value='4'
                                            onChange={handledChanged} />
                                        <label htmlFor="estrato4">4</label>
                                    </div>
                                </div>
                                <div className="field">
                                    <div className="ui radio checkbox">
                                        <input type="radio" name='estrato' id='estrato5' value='5'
                                            onChange={handledChanged} />
                                        <label htmlFor="estrato5">5</label>
                                    </div>
                                </div>
                                <div className="field">
                                    <div className="ui radio checkbox">
                                        <input type="radio" name='estrato' id='estrato6' value='6'
                                            onChange={handledChanged} />
                                        <label htmlFor="estrato6">6</label>
                                    </div>
                                </div>
                            </Form.Group>
                            {errors.estrato && (<div className="ui pointing red basic label">{errors.estrato}</div>)}
                        </Form.Field>
                    </Form.Group>
                    <Grid.Column width={16}>
                        <Form.Group>
                            <Form.Field>
                                <label>Servicios en el hogar:</label>
                                <div className="ui checkbox">
                                    <input type="checkbox" name="servicioAgua" id="servicioAgua" value="agua"
                                        onChange={handledServicio} />
                                    <label htmlFor="servicioAgua">Agua</label>
                                </div>
                                <div className="ui checkbox" style={{ marginLeft: '20px' }}>
                                    <input type="checkbox" name="servicioEnergia" id="servicioEnergia" value="energia"
                                        onChange={handledServicio} />
                                    <label htmlFor="servicioEnergia">Energía</label>
                                </div>
                            </Form.Field>
                        </Form.Group>
                    </Grid.Column>
                </Grid.Column>
                <Grid.Column width={16}>
                    <Button type='submit' color="green" disabled={!formik.isValid} >
                        Agregar hogar [+]
                    </Button>
                </Grid.Column>
            </Grid>
        </Form>
    )
}

export default RegistrarHogar