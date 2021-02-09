import React, { useEffect, useState } from 'react'
import Layout from '@components/layouts/LayoutPrivado'
import ServiciosHogares from '@services/servicios.hogares'
import loginUtils from '@utils/login.utils'
import { Button, Form, Grid, Header, Input, Modal, Table } from 'semantic-ui-react'


const Perfil = () => {
    const [visibilidadFormulario, setVisibilidadformulario] = useState(false);
    const [listaHogares, setListaHogares] = useState([]);
    const [hogarQueSeEditara, setHogarQueSeEditara] = useState({});
    const [open, setOpen] = useState(false)
    const [usuario, setUsuario] = useState({})

    const openModal = (index) => {
        setHogarQueSeEditara(listaHogares[index])
        setOpen(true);
    }

    useEffect(() => {
        let mounted = true;
        console.log(mounted)
        if (mounted) {
            ServiciosHogares.getHogaresByUsername(loginUtils.getUsernameUser(), ({ data }) => {
                if (mounted) {
                    setListaHogares(data);
                    setHogarQueSeEditara(data[0]);
                }
            }, (error) => { });

            const dataUser = {
                fullName: loginUtils.getFullName()
            }
            setUsuario(dataUser)
        }
        return () => mounted = false;
    }, [])

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
                            {listaHogares.map((hogar, index) => {
                                return (
                                    <Table.Body>
                                        <Table.Row>
                                            <Table.Cell>{hogar.numero_contrato}</Table.Cell>
                                            <Table.Cell>{hogar.nombre}</Table.Cell>
                                            <Table.Cell>{hogar.estrato}</Table.Cell>
                                            <Table.Cell>
                                                {hogar.servicios.map(servicio => {
                                                    return (<h5>{servicio.principal}</h5>
                                                    );
                                                })}
                                            </Table.Cell>
                                            <Table.Cell className="center">
                                                <span onClick={() => openModal(index)} className="material-icons  iconoColorAzul" node="button">mode_edit</span>
                                            </Table.Cell>
                                        </Table.Row>
                                    </Table.Body>
                                );
                            })}
                        </Table>
                    </Grid.Column>
                    <Grid.Column width={1}>
                    </Grid.Column>
                    <Modal
                        onClose={() => setOpen(false)}
                        open={open}
                    >
                        <Modal.Header>Edita tu hogar</Modal.Header>
                        <Modal.Content>
                            <Modal.Description>
                                <Form>
                                    <Form.Group widths='equal'>
                                        <Form.Field width={7}>
                                            <label htmlFor='correo'>{"Nombre hogar: " + ((hogarQueSeEditara) ? hogarQueSeEditara.nombre : "")}</label>
                                            <Input name="nombreHogar" id='nombreHogar' placeholder={hogarQueSeEditara.nombre} />
                                        </Form.Field>
                                        <Form.Field width={7}>
                                            <label htmlFor='correo'>{"# Contrato: " + ((hogarQueSeEditara) ? hogarQueSeEditara.numero_contrato : "")}</label>
                                            <Input name="numeroContrato" id='numeroContrato' placeholder={hogarQueSeEditara.numero_contrato} autocomplete="off" />
                                        </Form.Field>
                                    </Form.Group>
                                    <Form.Group inline>
                                        <label>Servicios</label>
                                        <Form.Radio
                                            label='Agua'
                                            value='agua'
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
                </Grid.Row>
            </Grid>
        </Layout>
    )
}

export default Perfil