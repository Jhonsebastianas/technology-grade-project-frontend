import React, { useState, useEffect } from 'react'

import { Icon} from 'semantic-ui-react';

import ServiciosDatosImportantes from '@services/servicios.datos_importantes';

const Tips = () => {

    const [titulo, setTitulo] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [enlace, setEnlace] = useState([]);

    useEffect(() => {
        let mounted = true;
        if (mounted) {
            ServiciosDatosImportantes.getDatoAleatorio(({ data }) => {
                setTitulo(data[0].titulo);
                setDescripcion(data[0].descripcion);
                setEnlace(data[0].fuentes.enlace);
                
            }, (error) => { });
        }
        return () => (mounted = false);
    }, []);

    return (

        <div className="containerInfo">
            <h5 className="tipsTitle"> <Icon name="lightbulb outline" aria-label='tip de ahorro' />TIP</h5>
            <div className="tipInfo">
                <p className='tipInfo-title'>{titulo}</p>
                <p className='tipInfo-description'>{descripcion}</p>
                {/* <p className="tipFuentes">Fuentes:</p>
                {enlace !== undefined &&
                    enlace.map((enlace, index) => (
                        <a
                            href={enlace.url}
                            target="_blank"
                            rel="noopener"
                            key={index}
                            className="tipEnlaces"
                        >
                            {enlace.nombre_pagina}
                        </a>
                    )) || <p>Anónimo</p>
                } */}
            </div>
        </div>

    )
}

export default Tips;