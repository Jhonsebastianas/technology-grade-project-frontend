import React from 'react';
import Link from 'next/link'
import Image from 'next/image';
import { Grid } from 'semantic-ui-react'
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
                <Grid stackable>
                    <Grid.Column width={16} className="ui centered grid">
                        <Image
                            alt="Icono notificación"
                            src={`/images/alerts/${nombreImagen}`}
                            width="228px"
                            height="183px"
                        />
                    </Grid.Column>
                    {/* center aligned */}
                    <Grid.Column className="center aligned" width={16}>
                        <h3>{titulo}</h3>
                    </Grid.Column>
                    <Grid.Column className="center aligned" width={16}>
                        <p>{descripcion}</p>
                    </Grid.Column>
                    <Grid.Column width={16} className="ui centered grid">
                        <Link href={rutaBoton}>
                            <a className="ui primary button">{tituloBoton}</a>
                        </Link>
                    </Grid.Column>
                </Grid>
            </div>
        </div>
    )
}

export default PantallaNotificacion