import React from 'react';
import Image from 'next/image'
import { Grid, Segment } from 'semantic-ui-react';
import Layout from '@components/layouts/PublicLayout';
import styles from '@styles/modules/contactanos.module.css';

const Contactanos = () => {
    const { cardRegistro, apodoAlmacen, light, iconPhone, ladoInforamcion, nombreAlmacen, googleMaps,
        responsiveIframe, textContactanos, map } = styles;

    return (
        <Layout>
            <Segment vertical>
                <Grid stackable>
                    <Grid.Column width={3}></Grid.Column>
                    {/* s={12} m={8} l={8} */}
                    <Grid.Column width={10}>
                        <div className={cardRegistro}>
                                <Grid stackable>
                                    <Grid.Column width={8}>
                                        <div class="icon-block">
                                            <Image
                                                width='auto'
                                                height='280dv'
                                                src="/images/contactanos.svg"
                                                alt="Unsplashed background img 1"
                                                className={'responsive-img animate__animated animate__backInLeft'}
                                            />
                                        </div>
                                        <h1 className={textContactanos + " animate__animated animate__backInLeft"}>Contáctenos</h1>
                                    </Grid.Column>
                                    <Grid.Column width={8} className={ladoInforamcion + " animate__animated animate__backInRight"}>
                                        <h2 class={apodoAlmacen + " center"}><strong>SECOPS</strong></h2>
                                        <h5 className={nombreAlmacen + " center nombre-almacen"}>(Prototipo para el seguimiento y control de los servicios públicos a través de un aplicativo web)</h5>
                                        <h2 className={light + " light-blue-text"}><i className={iconPhone + " material-icons"}>email</i></h2>
                                        <p className="">Canales de comunicación <br />Gmail: jhon_agudelo23191@elpoli.edu.co<br /></p>
                                    </Grid.Column>
                                </Grid>
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
                    </Grid.Column>
                    <Grid.Column width={3}></Grid.Column>
                </Grid>
            </Segment>
        </Layout >

    )

}

export default Contactanos;