import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Container, Grid, Icon, Segment } from 'semantic-ui-react';
import Layout from '@components/layouts/PublicLayout';


const Nosotros = () => {


    return (
        <Layout>
            <Segment vertical id="nosotrosSectionOne" >
                <Grid stackable className="Nosotros" >
                    <Grid.Row >
                        <Grid.Column width={16}>
                            <Container  verticalAlign='middle'>
                                <h1 className="nosotrosSectionOneTitle">quiénes somos</h1>
                                <p className="nosotrosSectionOnePhrase">
                                    Transfroma la manera en que gastas tus servicios públicos
                                </p>
                            </Container>
                        </Grid.Column>
                    </Grid.Row>

                </Grid>
            </Segment>
            <Segment vertical className="nosotrosSectionTwo">
                <Grid container stackable>
                    <Grid.Row >
                        <Grid.Column width={16}>
                            {/* <Container> */}
                                <p className="NosotrosTitle">nuestro propósito</p>
                                <p className="NosotrosIntroduccion">
                                    CONTROLSEP busca llevar a las personas una manera más amigable de conocer el
                                    gasto de sus servicios públicos (agua y energía) y conocer su forma de gasto
                                     de manera automática o manual, adaptado a sus preferencias.
                            </p>
                            {/* </Container> */}
                        </Grid.Column>
                    </Grid.Row>

                </Grid>
            </Segment>
            <Segment vertical className="nosotrosServices" >
                <Grid container stackable>
                    <Grid.Row verticalAlign='middle' >
                        <Grid.Column width={4} className="nosotrosServicesItems" >
                            <Container verticalAlign='middle'>
                                <Icon  name='cogs' size='huge' className="nosotrosServicesIcons"/>
                                <p >Lleva el control de tus servicios</p>
                                {/* <p>
                                    Ten a la mano tu consumo de servicios públicos en tu(s) hogar(es) siempre que
                                    lo necesites, y conoce tu forma de gasto de manera automática o manual,
                                    adaptado a tus preferencias.
                                </p> */}
                            </Container>
                        </Grid.Column>
                        <Grid.Column width={4} className="nosotrosServicesItems">
                            <Icon name='home' size='huge' className="nosotrosServicesIcons"/>
                            <p >Todos tus hogares a tu alcance</p>
                        </Grid.Column>
                        <Grid.Column width={4} className="nosotrosServicesItems" >
                            <Icon  name='check' size='huge' className="nosotrosServicesIcons"/>
                            <p >Fácil de usar</p>
                        </Grid.Column>
                        <Grid.Column width={4} className="nosotrosServicesItems" >
                            <Icon  name='newspaper outline' size='huge' className="nosotrosServicesIcons"/>
                            <p >Monitorea tus servicios</p>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
            <Segment vertical>
                <Grid container stackable  columns={3}>
                    <div className="intro">
                        <h2 className="NosotrosTitle">nuestro equipo </h2>
                    </div>
                    <Grid.Row verticalAlign='middle' className="people centrar" >
                        <Grid.Column className="items">
                            <div className="box" style={{ backgroundImage: 'url(/images/founders/JhonAgudelo.webp)' }}>
                                <div className="cover">
                                    <h3 className="name">Jhon Agudelo</h3>
                                    <p className="title"></p>
                                    <div className="social">
                                        <a href="#"><Icon name="facebook f" /></a>
                                        <a href="#"><Icon name="twitter" /></a>
                                        <a href="#"><Icon name="instagram" /></a>
                                    </div>
                                </div>
                            </div>
                        </Grid.Column>
                        <Grid.Column className="items">
                            <div className="box" style={{ backgroundImage: 'url(/images/founders/SaraCardenas.webp)' }}>
                                <div className="cover">
                                    <h3 className="name">Sara Cárdenas</h3>
                                    <p className="title"> </p>
                                    <div className="social">
                                        <a href="#"><Icon name="facebook f" /></a>
                                        <a href="#"><Icon name="twitter" /></a>
                                        <a href="#"><Icon name="instagram" /></a>
                                    </div>
                                </div>
                            </div>
                        </Grid.Column>
                        <Grid.Column className="items">
                            <div className="box" style={{ backgroundImage: 'url(/images/founders/BreynerTaborda.webp)' }}>
                                <div className="cover">
                                    <h3 className="name">Breyner Taborda</h3>
                                    <p className="title"> </p>
                                    <div className="social">
                                        <a href="#"><Icon name="facebook f" /></a>
                                        <a href="#"><Icon name="twitter" /></a>
                                        <a href="#"><Icon name="instagram" /></a>
                                    </div>
                                </div>
                            </div>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
            <Segment vertical className="nosotrosSectionBoton">
                <Grid container stackable>
                    <Grid.Row >
                        <Grid.Column width={16}  >
                            <Container verticalAlign='middle' >
                                <p> Que esperas para tomar el control de tus servicios</p>
                                <Link href="/registrar/usuario">
                                    <button className="boton" id="buttonEmpiezaAhora" > comienza Ahora</button>
                                </Link>
                            </Container>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
        </Layout>

    )

}

export default Nosotros;