import React, { useState, useEffect } from 'react'


import { Icon, Container } from 'semantic-ui-react';

import ServiciosDatosImportantes from '@services/servicios.datos_importantes';


const Tips = () => {

    const [dato, setDato] = useState([]);


    useEffect(() => {
        let mounted = true;
        if (mounted) {

            ServiciosDatosImportantes.getDatoAleatorio(({ data }) => {
                setDato(data);
            }, (error) => { });
        }
        return () => (mounted = false);
    }, []);

    return (

        <div className="containerInfo">
           
            <h5 className="tipsTitle"> <Icon name="lightbulb outline" />TIP</h5>
            {dato !== undefined &&
                dato.map((dato) => (

                    <div className="tipInfo" key={dato._id}>
                        <p><strong>{dato.titulo}</strong></p>
                        <p>{dato.descripcion}</p>
                    </div>
                )) 
                || <> </>}
        </div>

    )
}

export default Tips;