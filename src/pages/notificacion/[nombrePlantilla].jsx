import React from 'react';
import Link from 'next/link'
import Image from 'next/image';
import { Row, Col } from 'react-materialize';
import Styles from '@styles/modules/notificacion.module.css'
import Plantillas from '@constants/PlantillasNotificaciones'

/**
 * Este método nos permite generar páginas estáticas dinámicas, en tiempo de construcción (npm run build).
 * 
 * @param {*} nombrePlantilla. Es el nombre de la plantilla de notificaciones que se pasa por medio
 * de la url así: /notificacion/nombrePlantilla
 */
export const getStaticProps = async ({ params }) => {
    const { nombrePlantilla } = params;
    const plantilla = Plantillas.find(plantilla => plantilla.nombre === nombrePlantilla);
    return {
        props: {
            plantilla,
        }
    }
}

/**
 * Este método nos permite indicarle a Nextjs cuantas páginas estáticas debe generar para esta ruta dinámica.
 */
export const getStaticPaths = async () => {
    const paths = Plantillas.map(({ nombre }) => ({
        params: {
            nombrePlantilla: nombre.toString()
        }
    }));

    return {
        paths,
        // Incremental static generation
        // 404 for everything else
        fallback: false
    }
}

const PantallaNotificacion = ({ plantilla }) => {

    const { padre } = Styles;

    const { nombreImagen, titulo, descripcion, tituloBoton, rutaBoton } = plantilla;

    return (
        <div className={padre}>
            <div className="valign-wrapper center-align">
                <Row>
                    <Row>
                        <Col s={1}></Col>
                        <Col s={10} m={12}>
                            <Image
                                alt="Icono notificación"
                                src={`/images/alerts/${nombreImagen}`}
                                width="200px"
                                height="auto"
                            />
                        </Col>
                        <Col s={1}></Col>
                    </Row>

                    <Col className="center-align" m={12}>
                        <h3>{titulo}</h3>
                    </Col>
                    <Col m={12}>
                        <Col m={3}></Col>
                        <Col m={6}>
                            <p className="flow-text">{descripcion}</p>
                        </Col>
                        <Col m={3}></Col>
                    </Col>
                    <Row>
                        <Col s={1}></Col>
                        <Col className="center-align" m={12} s={10} >
                            <Link href={rutaBoton} className="btn waves-effect waves-light btn-secundario">
                                <a>{tituloBoton}</a>
                            </Link>
                        </Col>
                        <Col s={1}></Col>
                    </Row>
                </Row>
            </div>
        </div>
    )
}

export default PantallaNotificacion