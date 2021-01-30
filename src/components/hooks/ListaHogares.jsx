import React, { useState, useEffect } from 'react';
import { Accordion, Card, Grid, Icon } from 'semantic-ui-react'
import ServiciosHogares from '@services/servicios.hogares'
import loginUtils from '@utils/login.utils'

const ListaHogares = () => {

    const [listaHogares, setListaHogares] = useState([]);
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
                setListaHogares(data);
            }
        }, (error) => {
        });
        return () => mounted = false;
    }, [])


    return (
        <>
            <Accordion fluid styled>
                {listaHogares.map((hogar, index) => {
                    return (
                        <>
                            <Accordion.Title
                                active={activeIndex === index}
                                index={index}
                                onClick={handleClick}
                            >
                                <Icon name='dropdown' />
                                <Icon name={(hogar.tipoHogar === 'casa') ? 'home' : 'building'} />
                                {hogar.nombre}
                            </Accordion.Title>
                            <Accordion.Content active={activeIndex === index}>
                                <Grid>
                                    <Grid.Column width={16}>
                                        <h4>Información de tu hogar</h4>
                                        <p>Contrato: {hogar.numeroContrato} | Estrato: {hogar.estrato} | Tipo hogar: {hogar.tipoHogar}</p>
                                        <h4>Información de tus servicios</h4>
                                    </Grid.Column>
                                        {hogar.servicios.map(servicio => {
                                            return (
                                                <Grid.Column width={6}>
                                                    <Card fluid>
                                                        {/* <Image 
                                                        src={`/images/servicios/${servicio.img}`}
                                                        wrapped 
                                                        ui={false}
                                                        alt={`imagen-${servicio}`}
                                                    /> */}
                                                        <Card.Content>
                                                            <Card.Header>{servicio}</Card.Header>
                                                            <Card.Meta>
                                                                <span className='date'>Última actualización 28/01/2021</span>
                                                            </Card.Meta>
                                                            <Card.Description>
                                                                Esto es una descripción
                                                        </Card.Description>
                                                        </Card.Content>
                                                        <Card.Content extra>
                                                            <a>
                                                                ver al detalle
                                                            </a>
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
        </>
    )
}

export default ListaHogares