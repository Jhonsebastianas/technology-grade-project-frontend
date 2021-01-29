import React, { useEffect, useState } from 'react'
import Layout from '@components/layouts/LayoutPrivado'
import styles from '@styles/modules/editarCuenta.module.css'
import ServiciosHogares from '@services/servicios.hogares'
import loginUtils from '@utils/login.utils'
import { Button, Form, Grid, Header, Input, Modal, Table } from 'semantic-ui-react'


const Perfil = () => {

    const { imagen, nombre, logoServicio, fondoBlanco } = styles;
    // const [visibilidadFormulario, setVisibilidadformulario] = useState(false);
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

    return (
        <Layout>
            <Grid>
                <Form method="post" id="perfil">
                    <Grid.Column width={16} className={fondoBlanco} >
                        <Grid.Column width={16}>
                            <Grid.Column className="center">
                                {/* <img className={imagen} src={backgroundImage}></img> */}
                                <p className={nombre}><strong>{usuario.fullName}</strong></p>
                                {/* <a className="btn" onClick={esconderFormulario}>Editar</a> */}
                                <Grid.Column id="contenedorFormulario">
                                    {/* {visibilidadFormulario && (<div id="contenidoFormulario">
                                                <div>
                                                    <div className="input-field col s11">
                                                        <i className="material-icons prefix">account_circle</i>
                                                        <input id="icon_prefix" type="text" className="validate" value={LoginUtils.getFullName()} />
                                                        <label htmlFor="icon_prefix"></label>
                                                    </div>
                                                </div>
                                                <TextInput label='Apellidos' icon={<Icon>account_circle</Icon>} s={11} placeholder={LoginUtils.getFullName()}/>
                                            </div>)} */}
                                </Grid.Column>
                            </Grid.Column>
                        </Grid.Column>
                        <Grid.Column width={16}>


                            <Table className="centered">
                                <thead>
                                    <tr>
                                        <th>#Contrato</th>
                                        <th>Hogar</th>
                                        <th>Estrato</th>
                                        <th>Servicios</th>
                                        <th></th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {listaHogares.map(hogar => {
                                        return (
                                            <tr>
                                                <td>{hogar.numeroContrato}</td>
                                                <td>{hogar.nombre}</td>
                                                <td>{hogar.estrato}</td>
                                                <td>
                                                    {hogar.servicios.map(servicio => {
                                                        return (<h5>{servicio}</h5>
                                                            // <img className={logoServicio} src={(servicio === 'Agua') ? energiaLogoVerde : aguaLogoVerde}></img>

                                                        );
                                                    })}


                                                </td>
                                                <td>
                                                    {/*<i className="material-icons prefix" onClick={()=>getHomeByNumeroContrato(hogar.numeroContrato)}>mode_edit</i>*/}
                                                    <Modal
                                                        onClose={() => setOpen(false)}
                                                        onOpen={openModal}
                                                        open={open}
                                                        trigger={<span className="material-icons prefix" node="button">mode_edit</span>}
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
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </Table>
                        </Grid.Column>
                    </Grid.Column>
                </Form>
            </Grid>
        </Layout>
    )
}

export default Perfil