import React, { useEffect, useState } from 'react'
import Layout from '@components/layouts/LayoutPrivado'
import ServiciosHogares from '@services/servicios.hogares'
import loginUtils from '@utils/login.utils'
import { Button, Form, Grid, Header, Input, Modal, Table } from 'semantic-ui-react'


const Perfil = () => {
    const [visibilidadFormulario, setVisibilidadformulario] = useState(false);
    const [actualizarFormulario, setActualizarformulario] = useState(false);
    const [listaHogares, setListaHogares] = useState([]);
    const [editarHogar, setEditarHogar] = useState(null);
    const [open, setOpen] = useState(false)
    const [usuario, setUsuario] = useState({})

    const actualizarInformacion = () => {
        const formulario = (actualizarFormulario) ? false : true;
        setActualizarformulario(formulario);
    }

    const openModal = (numeroContrato) => {
        getHomeByNumeroContrato(numeroContrato);
        actualizarInformacion();
        setOpen(true);
    }

    useEffect(() => {
        let mounted = true;
        console.log(mounted)
        ServiciosHogares.getHogaresByUsername(loginUtils.getUsernameUser(), ({ data }) => {
            if (mounted) {
                setListaHogares(data);
            }
        }, (error) => { });

        const dataUser = {
            fullName: loginUtils.getFullName()
        }
        setUsuario(dataUser)

        return () => mounted = false;
    }, [])

    function getHomeByNumeroContrato(numeroContrato) {
        ServiciosHogares.getHogarByNumeroContrato(numeroContrato, ({ data }) => {
            console.log(data);
            setEditarHogar(data);
        }, (error) => { });
    }

    const formularioInformacionPersonal = () => {
        const formulario = (visibilidadFormulario) ? false : true;
        setVisibilidadformulario(formulario);
    }

    return (
        <Layout>
            <Grid>
                <Grid.Row>

                    <Grid.Column width={6}>

                        <Grid.Column width={8} className="center">
                            <img className="imagen" src="/images/avatarUsuario.svg"></img>
                            <p className="nombre"><strong>{usuario.fullName}</strong></p>
                            <Grid.Column>
                                <Button primary className="editarDatosPersonales" onClick={formularioInformacionPersonal}>Editar</Button>
                            </Grid.Column>
                        </Grid.Column>
                        <Grid.Column width={8}>
                            {visibilidadFormulario && (<div id="contenidoFormulario">
                                {/*<div>
                                    <div className="input-field col s11">
                                        <Input className="validate" value={loginUtils.getFullName()} />
                                        <label htmlFor="icon_prefix"></label>
                                    </div>
                                </div>*/}
                                <Input label='Nombre(s)' icon="account_circle" s={11} placeholder={loginUtils.getFullName()} />
                                <Input label='Apellidos' icon="account_circle" s={11} placeholder={loginUtils.getFullName()} />
                            </div>)}
                        </Grid.Column>

                    </Grid.Column>
                    <Grid.Column width={9} className="espacioSuperiorTabla">

                        <Table celled fixed singleLine>
                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell>#Contrato</Table.HeaderCell>
                                    <Table.HeaderCell>Hogar</Table.HeaderCell>
                                    <Table.HeaderCell>Estrato</Table.HeaderCell>
                                    <Table.HeaderCell>Servicios</Table.HeaderCell>
                                    <Table.HeaderCell />
                                </Table.Row>
                            </Table.Header>


                            {listaHogares.map(hogar => {
                                return (
                                    <Table.Body>
                                        <Table.Row>
                                            <Table.Cell>{hogar.numeroContrato}</Table.Cell>
                                            <Table.Cell>{hogar.nombre}</Table.Cell>
                                            <Table.Cell>{hogar.estrato}</Table.Cell>
                                            <Table.Cell>
                                                {hogar.servicios.map(servicio => {
                                                    return (<h5>{servicio}</h5>
                                                    );
                                                })}
                                            </Table.Cell>
                                            <Table.Cell className="center">
                                                <Modal
                                                    onClose={() => setOpen(false)}
                                                    onOpen={openModal}
                                                    open={open}
                                                    trigger={<span className="material-icons  iconoColorAzul" node="button">mode_edit</span>}
                                                >
                                                    <Modal.Header>Edita tu hogar</Modal.Header>
                                                    <Modal.Content>
                                                        <Modal.Description>
                                                            {/* <Header>Default Profile Image</Header> */}
                                                            <Form>
                                                                <Form.Group widths='equal'>
                                                                    <Form.Field width={7}>
                                                                        <label htmlFor='correo'>{"Nombre hogar: " + ((editarHogar) ? editarHogar.nombre : "")}</label>
                                                                        <Input name="nombreHogar" id='nombreHogar' value={hogar.nombre} />
                                                                    </Form.Field>
                                                                    <Form.Field width={7}>
                                                                        <label htmlFor='correo'>{"# Contrato: " + ((editarHogar) ? editarHogar.numeroContrato : "")}</label>
                                                                        <Input name="numeroContrato" id='numeroContrato' value={hogar.numeroContrato} autocomplete="off" />
                                                                    </Form.Field>
                                                                </Form.Group>
                                                                <Form.Group inline>
                                                                    <label>Servicios</label>
                                                                    <Form.Radio
                                                                        label='Agua'
                                                                        value='agua'
                                                                    // checked={value === 'agua'}
                                                                    // onChange={this.handleChange}
                                                                    />
                                                                    <Form.Radio
                                                                        label='Energía'
                                                                        value='Energía'
                                                                    />
                                                                </Form.Group>
                                                            </Form>
                                                        </Modal.Description>
                                                    </Modal.Content>
                                                    <Modal.Actions>
                                                        <Button color='black' onClick={() => setOpen(false)}>
                                                            Descartar
                                                            </Button>
                                                        <Button
                                                            content="Modificar"
                                                            labelPosition='right'
                                                            icon='checkmark'
                                                            onClick={() => setOpen(false)}
                                                            positive
                                                        />
                                                    </Modal.Actions>
                                                </Modal>
                                            </Table.Cell>
                                        </Table.Row>
                                    </Table.Body>
                                );
                            })}

                        </Table>
                    </Grid.Column>
                    <Grid.Column width={1}>
                    </Grid.Column>


                </Grid.Row>
            </Grid>
        </Layout>
    )
}

export default Perfil