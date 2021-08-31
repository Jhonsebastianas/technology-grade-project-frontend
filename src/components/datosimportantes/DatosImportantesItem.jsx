import React from 'react'

import { Icon } from 'semantic-ui-react';

import ModalEliminarDato from '@components/datosimportantes/ModalEliminarDato'

import Link from 'next/link';

const DatosImportantesItem = (props) => {

    const { dato, obtenerDatos } = props

    return (
        <div className="datosImportantesListItem-container">
            <div className="datosImportantesListItem-body">
                <p className='datosImportantesItem-title'>{dato.titulo}</p>
                <p className='datosImportantesItem-descripcion'>{dato.descripcion}</p>
                <p> Autor : {dato.autor}</p>
                <Link href="datosimportantes/editar-dato/[datoId]" as={`datosimportantes/editar-dato/${dato._id}`}>
                    <Icon
                        name='edit outline'
                        size='large'
                        aria-label='editar dato'
                        className='datosImportantesItem-link--editar'
                    />
                </Link>
                <ModalEliminarDato
                    idDato={dato._id}
                    obtenerDatos={obtenerDatos}
                />
            </div>
        </div>
    )
}

export default DatosImportantesItem