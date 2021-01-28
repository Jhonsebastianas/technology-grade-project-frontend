import React from 'react';
import Image from 'next/image'
// import { Row, Col, Container } from 'react-materialize';
import { Container, Grid, Icon, Segment } from 'semantic-ui-react'
import Layout from '@components/layouts/PublicLayout';
import styles from '@styles/modules/nosotros.module.css';

const Nosotros = () => {
    const { centrar, colorH4, imagenSvg, posicionImagen, botonEmpezar, icono } = styles;

    return (
        <Layout>
            <Segment vertical>
                <Grid stackable className={imagenSvg}>
                    <Grid.Column width={10}> {/*s={12} m={8}*/}
                        <Container className={centrar}>
                            <h4 className={colorH4}>Monitorea tus servicios</h4>
                            <p>Ten a la mano tu consumo de servicios públicos en tu(s) Hogar(es) siempre que lo necesites, y conoce tu forma de gasto de manera automática o manual, adaptado a tus preferencias.</p>
                            <a href="/registrar/usuario" className={botonEmpezar}>Empieza Ahora
              {/* <Icon className={icono}> arrow_forward</Icon> */}
                                <Icon className={icono} name='right arrow' />
                            </a>
                        </Container>
                    </Grid.Column>
                    {/* s={12} m={4} */}
                    <Grid.Column width={6}className={posicionImagen}>
                        <Image
                            src="/images/nosotros.svg"
                            alt="Nosotros image"
                            width='auto'
                            height='auto'
                        />
                    </Grid.Column>
                </Grid>
            </Segment>
        </Layout>

    )

}

export default Nosotros;