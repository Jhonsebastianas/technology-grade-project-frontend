import React from 'react'

import DatosImportantesItem from '@components/datosimportantes/DatosImportantesItem'
import Loading from '@components/loader/Loading'

const DatosImportantesList = ({datos, obtenerDatos, cargando}) => {

    if (cargando) {
        return <Loading pantalla="datos"/>;
    }

    return (
        <div className="datosImportantesList-container">
            <ul>
                {datos.length === 0 
                && <>No hay datos para mostrar</>
                || datos.map(dato => {
                    return (
                        <li key={dato._id}>
                            <DatosImportantesItem dato={dato} obtenerDatos={obtenerDatos} />
                        </li>
                    );
                })}
            </ul>
        </div>
    )
}

export default DatosImportantesList