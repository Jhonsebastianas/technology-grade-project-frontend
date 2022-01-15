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
                            <Container verticalAlign='middle'>
                                <h1 className="nosotrosSectionOneTitle">quiénes somos</h1>
                                <p className="nosotrosSectionOnePhrase">
                                    Transfroma la manera en que gastas tus servicios públicos
                                </p>
                            </Container>
                        </Grid.Column>
                    </Grid.Row>

                </Grid>
            </Segment>
            <Segment vertical id="nosotrosSectionTwo">
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
                                <Icon name='cogs' size='huge' className="nosotrosServicesIcons" />
                                <p >Lleva el control de tus servicios</p>
                                {/* <p>
                                    Ten a la mano tu consumo de servicios públicos en tu(s) hogar(es) siempre que
                                    lo necesites, y conoce tu forma de gasto de manera automática o manual,
                                    adaptado a tus preferencias.
                                </p> */}
                            </Container>
                        </Grid.Column>
                        <Grid.Column width={4} className="nosotrosServicesItems">
                            <Icon name='home' size='huge' className="nosotrosServicesIcons" />
                            <p >Todos tus hogares a tu alcance</p>
                        </Grid.Column>
                        <Grid.Column width={4} className="nosotrosServicesItems" >
                            <Icon name='check' size='huge' className="nosotrosServicesIcons" />
                            <p >Fácil de usar</p>
                        </Grid.Column>
                        <Grid.Column width={4} className="nosotrosServicesItems" >
                            <Icon name='newspaper outline' size='huge' className="nosotrosServicesIcons" />
                            <p >Monitorea tus servicios</p>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
            <Segment vertical>
                <Grid container stackable columns={3}>
                    <div className="intro">
                        <h2 className="NosotrosTitle">nuestro equipo </h2>
                    </div>
                    <Grid.Row verticalAlign='middle' className="people centrar" >
                        <Grid.Column className="items">
                            <div className="box">
                                <svg className="home__blob" viewBox="0 0 200 187" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                    <mask id="mask0" mask-type="alpha">
                                        <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 
                                    130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 
                                    97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 
                                    0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
                                        />
                                    </mask>
                                    <g mask="url(#mask0)">
                                        <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 
                                    165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 
                                    129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 
                                    -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
                                        />
                                        <image className="home__blob-img" style={{ width: '180px' }} x='+12' y='0' xlinkHref="/images/founders/JhonAgudelo.png" />
                                    </g>
                                </svg>
                                <div className="cover">
                                    <h3 className="name">Jhon Agudelo</h3>
                                    <p className="title"></p>
                                    <div className="social">
                                        <a href="https://www.jhonsebastianas.com/" target="_blank"><Icon name="world" /></a>
                                        <a href="https://github.com/segaretsu" target="_blank"><Icon name="github" /></a>
                                        <a href="https://www.linkedin.com/in/jhonsabastianas/" target="_blank"><Icon name="linkedin" /></a>
                                    </div>
                                </div>
                            </div>
                        </Grid.Column>
                        <Grid.Column className="items">
                            <div className="box">
                                <svg className="home__blob" viewBox="0 0 200 187" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                    <mask id="mask0" mask-type="alpha">
                                        <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 
                                    130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 
                                    97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 
                                    0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
                                        />
                                    </mask>
                                    <g mask="url(#mask0)">
                                        <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 
                                    165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 
                                    129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 
                                    -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
                                        />
                                        <image className="home__blob-img" x='-30' y='0' xlinkHref="/images/founders/SaraCardenas.png" />
                                    </g>
                                </svg>
                                <div className="cover">
                                    <h3 className="name">Sara Cárdenas</h3>
                                    <p className="title"> </p>
                                    <div className="social">
                                        <a href="https://saracds.vercel.app/" target="_blank"><Icon name="world" /></a>
                                        <a href="https://github.com/saracds" target="_blank"><Icon name="github" /></a>
                                        <a href="https://www.linkedin.com/in/sara-c%C3%A1rdenas/" target="_blank"><Icon name="linkedin" /></a>
                                    </div>
                                </div>
                            </div>
                        </Grid.Column>
                        <Grid.Column className="items">
                            <div className="box" >
                                <svg className="home__blob" viewBox="0 0 200 187" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                    <mask id="mask0" mask-type="alpha">
                                        <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 
                                    130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 
                                    97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 
                                    0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
                                        />
                                    </mask>
                                    <g mask="url(#mask0)">
                                        <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 
                                    165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 
                                    129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 
                                    -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
                                        />
                                        <image className="home__blob-img" style={{ width: '550px' }} x='-210' y='-70' xlinkHref="/images/founders/BreynerTaborda.png" />
                                    </g>
                                </svg>
                                <div className="cover">
                                    <h3 className="name">Breyner Taborda</h3>
                                    <p className="title"> </p>
                                    <div className="social">
                                        <a href="https://github.com/BreynerTaborda" target="_blank"><Icon name="github" /></a>
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