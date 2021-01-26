import React from 'react';
import Image from 'next/image'
import { Row, Col, Container } from 'react-materialize';
import Layout from '@components/layouts/PublicLayout';
import styles from '@styles/modules/nosotros.module.css';

const Nosotros = () => {
    const { centrar, colorH4, imagenSvg, posicionImagen, botonEmpezar, icono } = styles;

    return (
        <Layout>

            <Row className={imagenSvg}>

                <Col s={12} m={8} >

                    <Container className={centrar}>
                        <h4 className={colorH4}>Monitorea tus servicios</h4>
                        <p>Ten a la mano tu consumo de servicios públicos en tu(s) Hogar(es) siempre que lo necesites, y conoce tu forma de gasto de manera automática o manual, adaptado a tus preferencias.</p>
                        <a href="/registro" className={botonEmpezar}>Empieza Ahora
              {/*<Icon className={icono}> arrow_forward</Icon>*/}
                        </a>
                    </Container>
                </Col>
                <Col s={12} m={4} className={posicionImagen}>
                    <Image
                        layout='fill'
                        src="/images/nosotros.svg"
                        alt="Nosotros image"
                        className='responsive-img'
                    />
                </Col>
            </Row>
        </Layout>

    )

}

export default Nosotros;