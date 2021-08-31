import React, { useState, useEffect } from 'react'


import { Icon, Container } from 'semantic-ui-react';

import ServiciosDatosImportantes from '@services/servicios.datos_importantes';


const Tips = () => {

    const [dato, setDato] = useState([]);
    const [enlace, setEnlace] = useState([]);

    useEffect(() => {
        let mounted = true;
        if (mounted) {
            ServiciosDatosImportantes.getDatoAleatorio(({ data }) => {
                setDato(data);
                setEnlace(data[0].fuentes.enlace);    
            }, (error) => { });
        }
        return () => (mounted = false);
    }, []);

    return (

        <div className="containerInfo">

            <h5 className="tipsTitle"> <Icon name="lightbulb outline" aria-label='tip de ahprro'/>TIP</h5>
            {dato !== undefined &&
                dato.map((dato) => (

                    <div className="tipInfo" key={dato._id}>
                        <p className='tipInfo-title'>{dato.titulo}</p>
                        <p className='tipInfo-description'>{dato.descripcion}</p>
                        <p className="tipFuentes">Fuentes:</p>
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
                        }

                    </div>
                ))
                || <> </>}
        </div>

    )
}

export default Tips;