import React, { useState } from 'react';
import { Accordion, Button, Dimmer, Divider, Grid, Header, Icon, Label, Loader, Segment } from 'semantic-ui-react'
import HogarDetalle from '@components/sections/home/listaHogares/HogarDetalle'


import Styled from 'styled-components'
const StyledNoHogaresContainer = Styled.div`
    .img {
        width: 450px;
        height: 450px;

        @media(min-width:0px) and (max-width:767px){
            width: 300px;
            height: 300px;
        }
    }
`

const ListaHogares = (props) => {

    const {
        goToAddHome, cantidadHogares, cargandoHogares,
        mostrarHogares, handleClickMostrarHogares, listaHogares,
        handleHogarSeleccionado, hasHogares
    } = props

    /** Variable para el acordión */
    const [indexHogarActivo, setIndexHogarActivo] = useState(-1)


    const changeHogarActivo = (e, titleProps) => {
        const { index } = titleProps
        const newIndex = indexHogarActivo === index ? -1 : index
        setIndexHogarActivo(newIndex)
    }


    return (
        <>
            { !hasHogares
                && <StyledNoHogaresContainer>
                    <Segment vertical>
                        <Grid textAlign='center'>
                            <Grid.Column width={16}>
                                <h2>Sin hogares a mostrar</h2>
                            </Grid.Column>
                            <Grid.Column width={16}>
                                <img className="img" src="/images/sin_hogares_grises.svg" alt="<a href='https://www.freepik.es/vectores/acuarela'>Vector de Acuarela creado por freepik - www.freepik.es</a>" />
                            </Grid.Column>
                            <Grid.Column width={16}>
                                <Button animated basic color='green' onClick={goToAddHome}>
                                    <Button.Content visible><Icon name="home" /> Agregar un hogar [+]</Button.Content>
                                    <Button.Content hidden>
                                        <Icon name='arrow right' />
                                    </Button.Content>
                                </Button>
                            </Grid.Column>
                        </Grid>
                    </Segment>
                </StyledNoHogaresContainer>
                ||
                <Segment raised className="contenedorHogares">
                    <Grid onClick={handleClickMostrarHogares} id="tarjetaHogares">
                        <Grid.Column floated='left' width={10} verticalAlign="middle">
                            <Header as='h5' >
                                {mostrarHogares && <Icon name="caret square down outline" id="iconHogaresDesplegados"></Icon>
                                    || <Icon name="caret square right outline"></Icon>}
                                    Mis hogares
                        </Header>
                        </Grid.Column>
                        <Grid.Column floated='right' width={5}>
                            <Button as='div' floated="right" labelPosition='left'>
                                <Label className="cantidad" as='a' basic pointing='right'>
                                    {cantidadHogares}
                                </Label>
                                <Button className="icono-hogar" icon>
                                    <Icon name='home' />
                                    {/* Like */}
                                </Button>
                            </Button>
                        </Grid.Column>
                    </Grid>
                </Segment>
            }

            {cargandoHogares &&
                <>
                    <Divider />
                    <Segment basic>
                        <br></br>
                        <br></br>
                        <Dimmer className="cargarHogares" inverted active>
                            <Loader inverted content='Cargando hogares' />
                        </Dimmer>
                        <br></br>
                        <br></br>
                    </Segment>
                </>
                || ''}
            {mostrarHogares &&
                <>
                    {/* <Divider /> */}
                    <Accordion fluid styled className="hogares__accordion">
                        {listaHogares.map((hogar, index) => (
                            <HogarDetalle
                                changeHogarActivo={changeHogarActivo}
                                hogar={hogar}
                                index={index}
                                indexHogarActivo={indexHogarActivo}
                                handleHogarSeleccionado={handleHogarSeleccionado}
                            />
                        ))}
                    </Accordion>
                </>
                || ''}
        </>
    )
}

export default ListaHogares