import React from 'react';
import Image from 'next/image'
import { Row, Col, Card, Preloader } from 'react-materialize';
import Layout from '@components/layouts/PublicLayout';
import styles from './Contactanos.module.css';

const Contactanos = () => {
    const { parallaxContainer, cardRegistro, parallax, apodoAlmacen, light, iconPhone, ladoInforamcion, nombreAlmacen, googleMaps,
        responsiveIframe, informacionContacto, textContactanos, map } = styles;

    return (
        <Layout>
            <div className={"parallax-container " + parallaxContainer}>
                <Row>
                    <Col s={2}></Col>
                    <Col s={12} m={8} l={8}>
                        <Card className={cardRegistro}>
                            <div className="card-content">
                                <div class="row">
                                    <div className="col s12 m12 l6 xl6">
                                        <div class="icon-block">
                                            <Image
                                                layout='fill'
                                                // height='280dv'
                                                src="/images/contactanos.svg"
                                                alt="Unsplashed background img 1"
                                                className={'responsive-img animate__animated animate__backInLeft'}
                                            />
                                        </div>
                                        <h1 className={textContactanos + " animate__animated animate__backInLeft"}>Contáctenos</h1>
                                    </div>
                                    <Col s={12} m={12} l={6} xl={6} className={ladoInforamcion + " animate__animated animate__backInRight"}>
                                        <h2 class={apodoAlmacen + " center"}><strong>SECOPS</strong></h2>
                                        <h5 className={nombreAlmacen + " center nombre-almacen"}>(Prototipo para el seguimiento y control de los servicios públicos a través de un aplicativo web)</h5>
                                        <h2 className={light + " light-blue-text"}><i className={iconPhone + " material-icons"}>email</i></h2>
                                        <p className="">Canales de comunicación <br />Gmail: jhon_agudelo23191@elpoli.edu.co<br /></p>
                                    </Col>
                                </div>
                                <section>
                                    <div className={map + " animate__animated animate__backInUp"}>
                                        <h5>
                                            Estamos ubicados en:
                                         </h5>
                                        <p >
                                            San Javier, Medellín, Antioquia
                                         </p>
                                        <div className={responsiveIframe}>
                                            <iframe
                                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.0606689473257!2d-75.62346168541107!3d6.2557381454719145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e442bd61b35b135%3A0x7ac589026488978b!2sSan%20Javier%2C%20Medell%C3%ADn%2C%20Antioquia!5e0!3m2!1ses!2sco!4v1607442657848!5m2!1ses!2sco"
                                                allowfullscreen=""
                                                aria-hidden="false"
                                                frameborder="0"
                                                tabindex="0"
                                                className={googleMaps}
                                            ></iframe>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </Card>
                    </Col>
                    <Col s={4}></Col>
                </Row>
            </div>
        </Layout >

    )

}

export default Contactanos;