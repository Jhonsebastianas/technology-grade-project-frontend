import React from 'react'
import { Container, Form, Grid, Icon } from 'semantic-ui-react'

const RegistrarHogarServicios = (props) => {
    const { handledServicio, hogarQueSeEditara, validarExistenciaServicio } = props
    return (
        <>
            <h2 className="hogar__servicios-title">
                Servicios públicos
            </h2>
            <Container>
                <Grid centered divided="vertically">
                    <label>Seleccione los servicios públicos con los cuales cuentas en tu hogar</label>
                    <Grid.Column width={16}>
                        <Form.Group className="hogar__servicios-container">
                            <Form.Field>
                                <div className="ui checkbox hogar__servicio">
                                    <input
                                        className="hogar__servicio-input"
                                        type="checkbox"
                                        name="servicioAgua"
                                        id="servicioAgua"
                                        defaultValue="agua"
                                        defaultChecked={hogarQueSeEditara ? validarExistenciaServicio("agua") : false}
                                        onChange={handledServicio}
                                    />
                                    <Icon name="tint" className="hogar__servicio-icon icon-agua" />
                                    <label className="hogar__servicio-label" htmlFor="servicioAgua">Agua</label>
                                </div>
                            </Form.Field>
                            <Form.Field>
                                <div className="ui checkbox hogar__servicio">
                                    <input
                                        className="hogar__servicio-input"
                                        type="checkbox"
                                        name="servicioEnergia"
                                        id="servicioEnergia"
                                        defaultValue="energia"
                                        defaultChecked={hogarQueSeEditara ? validarExistenciaServicio("energia") : false}
                                        onChange={handledServicio}
                                    />
                                    <Icon name="plug" className="hogar__servicio-icon icon-energia" />
                                    <label className="hogar__servicio-label" htmlFor="servicioEnergia">Energía</label>
                                </div>
                            </Form.Field>
                        </Form.Group>
                    </Grid.Column>
                </Grid>
                <Grid stackable columns="equal" centered>
                    <Grid.Column textAlign="center">
                        <h3>Servicio agua</h3>
                        <p>Cuéntanos un poco sobre cómo mides tu consumo de agua.</p>

                        <Form.Group inline>
                            <div className="field">
                                <div className="ui radio checkbox">
                                    <input
                                        type="radio"
                                        name="contadorAgua"
                                        id="contadorAgua1"
                                        value="1"
                                        // defaultChecked={hogarQueSeEditara ? (hogarQueSeEditara.estrato === "1" ? true : false) : false}
                                        // onChange={handledChanged}
                                    />
                                    <label htmlFor="contadorAgua1">No sé</label>
                                </div>
                            </div>
                            <div className="field">
                                <div className="ui radio checkbox">
                                    <input
                                        type="radio"
                                        name="contadorAgua"
                                        id="contadorAgua2"
                                        value="2"
                                        // defaultChecked={hogarQueSeEditara ? (hogarQueSeEditara.estrato === "2" ? true : false) : false}
                                        // onChange={handledChanged}
                                    />
                                    <label htmlFor="contadorAgua2">EPM: sirius s dn15</label>
                                </div>
                            </div>
                            <div className="field">
                                <div className="ui radio checkbox">
                                    <input
                                        type="radio"
                                        name="contadorAgua"
                                        id="contadorAgua3"
                                        value="3"
                                        // defaultChecked={hogarQueSeEditara ? (hogarQueSeEditara.estrato === "2" ? true : false) : false}
                                        // onChange={handledChanged}
                                    />
                                    <label htmlFor="contadorAgua3">Controlsep: sensores</label>
                                </div>
                            </div>
                        </Form.Group>
                    </Grid.Column>
                    <Grid.Column textAlign="center">
                        <h3>Servicio energía</h3>
                        <p>Cuéntanos un poco sobre cómo luce tu contador de energía.</p>
                    </Grid.Column>
                </Grid>
            </Container>
        </>
    )
}

export default RegistrarHogarServicios