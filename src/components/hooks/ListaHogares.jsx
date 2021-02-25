import React, { useState, useEffect } from 'react';
import { Accordion, Button, Card, Divider, Grid, Header, Icon, Label, Segment } from 'semantic-ui-react'
import ModalRegistroLectura from '@components/forms/lecturas/ModalRegistrarLecturaManual'
import ServiciosHogares from '@services/servicios.hogares'
import loginUtils from '@utils/login.utils'
// import styles from './ListaHogares.module.css'

const ListaHogares = () => {

    // const { hogaresOcultos } = styles

    const [listaHogares, setListaHogares] = useState([]);
    const [cantidadHogares, setCantidadHogares] = useState(0);
    /** Variable para el acordión */
    const [activeIndex, setActiveIndex] = useState(-1);

    const handleClick = (e, titleProps) => {
        const { index } = titleProps
        const newIndex = activeIndex === index ? -1 : index
        setActiveIndex(newIndex)
    }

    useEffect(() => {
        let mounted = true;
        console.log(mounted)
        ServiciosHogares.getHogaresByUsername(loginUtils.getUsernameUser(), ({ data }) => {
            if (mounted) {
                console.log(data)
                setListaHogares(data);
                setCantidadHogares(data.length);
            }
        }, (error) => {
        });
        return () => mounted = false;
    }, [])


    return (
        <>
            <Segment raised>
                <Grid>
                    <Grid.Column floated='left' width={10} verticalAlign="middle">
                        <Header as='h5' >
                            <Icon name="caret square down outline"></Icon>
                                    Mis hogares
                        </Header>
                    </Grid.Column>
                    <Grid.Column floated='right' width={5}>
                        <Button as='div' floated="right" labelPosition='left'>
                            <Label as='a' basic pointing='right'>
                                {cantidadHogares}
                            </Label>
                            <Button icon>
                                <Icon name='home' />
                                {/* Like */}
                            </Button>
                        </Button>
                    </Grid.Column>
                </Grid>
                <Divider />
                <Accordion fluid styled>
                    {listaHogares.map((hogar, index) => {
                        return (
                            <>
                                <Accordion.Title
                                    active={activeIndex === index}
                                    index={index}
                                    onClick={handleClick}
                                >
                                    <Grid>
                                        <Grid.Column floated='left' width={10} verticalAlign="middle">
                                            <Icon name='dropdown' />
                                            <Icon name={(hogar.tipo_hogar === 'casa') ? 'home' : 'building'} />
                                            {hogar.nombre}
                                        </Grid.Column>
                                        <Grid.Column floated='right' width={6} verticalAlign="middle" textAlign="right">
                                            <Icon name="theme" color="blue" /> {index + 1 * 10}
                                            <Icon name="plug" color="yellow" /> {(index + 1) + 4 * 60}
                                        </Grid.Column>
                                    </Grid>

                                </Accordion.Title>
                                <Accordion.Content active={activeIndex === index}>
                                    <Grid stackable>
                                        <Grid.Column width={16}>
                                            <Header as='h4' >
                                                Información de tu hogar
                                            </Header>
                                            <p><Icon name="address book" color="teal"></Icon><strong>Contrato:</strong> {hogar.numero_contrato} | Estrato: {hogar.estrato} | Tipo hogar: {hogar.tipo_hogar}</p>
                                            <p><Icon name="globe" color="blue"></Icon><strong>Localidad:</strong> Colombia, Medellín</p>
                                            <h4>Información de tus servicios</h4>
                                        </Grid.Column>
                                        {hogar.servicios.map(servicio => {
                                            return (
                                                <Grid.Column width={6} >
                                                    <Card fluid>
                                                        <Card.Content>
                                                            <Card.Header>
                                                                <Grid>
                                                                    <Grid.Column floated='left' width={10} verticalAlign="middle">
                                                                        {servicio.principal}
                                                                    </Grid.Column>
                                                                    <Grid.Column floated='right' width={6} verticalAlign="middle" textAlign="right">
                                                                        {(servicio.sensor.has_sensor) ? <Icon inverted name="wifi" color="green" size="small" ></Icon> : ""}
                                                                    </Grid.Column>
                                                                </Grid>
                                                            </Card.Header>
                                                            <Card.Meta>
                                                                <span className='date'>Última actualización 28/01/2021</span>
                                                            </Card.Meta>
                                                            <Card.Description>
                                                                {(servicio.secundario != "nn") ? <><strong>Subservicio:</strong> {servicio.secundario}</> : ""}
                                                            </Card.Description>
                                                        </Card.Content>
                                                        <Card.Content extra>
                                                            {servicio.sensor.has_sensor &&
                                                                <Button icon labelPosition='right' fluid>
                                                                    ver detalle
                                                                <Icon name='right arrow' />
                                                                </Button>
                                                                ||
                                                                <Button.Group fluid>
                                                                    <Button>ver detalle</Button>
                                                                    <Button.Or text="o" />
                                                                    <ModalRegistroLectura servicio={servicio.principal} positive>consumo</ModalRegistroLectura>
                                                                </Button.Group>
                                                            }
                                                        </Card.Content>
                                                    </Card>
                                                </Grid.Column>
                                            )
                                        })}
                                    </Grid>
                                </Accordion.Content>
                            </>
                        )
                    })}
                </Accordion>
            </Segment>
        </>
    )
}

export default ListaHogares