import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from '@styles/Inicio.module.css';
import Layout from '@components/layouts/PublicLayout';
import { Row, Col, Container } from 'react-materialize';
import { APP_NAME } from '@constants/Constants';

const Home = () => {
    const { parallaxContainer, parallax, textoBlanco, tituloPresentacion, btnAzulClaro } = styles;
    return (
        <Layout>
            <div>
                <div id="index-banner" className={"parallax-container " + parallaxContainer}>
                    <div className="section no-pad-bot">
                        <Container>
                            <Row>
                                <Col offset='m0' s={12} m={6}>
                                    <h1 className={`center teal-text ${tituloPresentacion}`}>Mide tu consumo</h1>
                                    <Row className='center' >
                                        <h5 className={`header col s12 light ${textoBlanco}`}>Una forma moderna e interactiva de administrar tu consumo en servicios públicos del agua y energía.</h5>
                                    </Row>
                                </Col>
                                <Col s={0} m={12}></Col>
                                <Col offset='m0' s={12} m={6}>
                                    <Row className='center' >
                                        <Link href='/login' className="btn-large waves-effect waves-light teal lighten-1"><a>Ingresar</a></Link>
                                        <br></br>
                                        <br></br>
                                        <Link href='/registrar/usuario' className={`btn-large waves-effect waves-light teal lighten-1 ${btnAzulClaro}`}><a>Soy nuevo</a></Link>
                                    </Row>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                    <div className={"parallax " + parallax}>
                        <Image
                            layout='fill'
                            src="/images/JP_0.webp"
                            alt="nsplashed background img 1"
                        />
                        {/* <img src={firstBackImage} alt="Unsplashed background img 1" /> */}
                    </div>
                </div>
                <Container>
                    <div className="section">
                        <Row>
                            <Col s={12} m={6}>
                                <div className="icon-block">
                                    <h2 className="center brown-text"><i className="material-icons">flash_on</i></h2>
                                    <h5 className="center">Controla tus servicios públicos (agua y energía)</h5>

                                    <p className="light">Ten a la mano tu consumo de servicios públicos en tu(s) Hogar(es) siempre que lo necesites, y conoce tu forma de gasto de manera automática o manual, adaptado a tus preferencias.</p>
                                </div>
                            </Col>

                            <Col s={12} m={6}>
                                <div className="icon-block">
                                    <h2 className="center brown-text"><i className="material-icons">group</i></h2>
                                    <h5 className="center">Pensado para reducir tu consumo</h5>

                                    <p className="light">{APP_NAME}, te alerta cuando estás teniendo un desfase en comparación de tu consumo regular, permitiendo detectar aumentos en el consumo de servicios públicos como posibles fugas.</p>
                                </div>
                            </Col>

                            {/* <Col s={12} m={4}>
                            <div className="icon-block">
                                <h2 className="center brown-text"><i className="material-icons">settings</i></h2>
                                <h5 className="center">Easy to work with</h5>

                                <p className="light">Hemos proporcionado documentación detallada, así como ejemplos de código específicos para ayudar a los nuevos usuarios a comenzar. También estamos siempre abiertos a comentarios y podemos responder cualquier pregunta que un usuario pueda tener sobre Materialise.</p>
                            </div>
                        </Col> */}
                        </Row>
                    </div>
                </Container>
            </div>
        </Layout>
    )
}

export default Home;