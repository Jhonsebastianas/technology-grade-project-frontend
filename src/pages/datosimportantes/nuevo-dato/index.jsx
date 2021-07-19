import React from 'react'

import Layout from '@components/layouts/LayoutPrivado';

import CrearDatoImportanteContainer from '@components/forms/datosimportantes/CrearDatoImportanteContainer';

const NuevoDatoImportante = () => {

    const formDato = {
        autor: 'Anónimo',
        descripcion: '' ,
        tipo_dato: 'Tip' ,
        titulo: ''
    }
    
    return (
        <Layout>
            <CrearDatoImportanteContainer 
                metodo='agregarNuevoDato' 
                formDato={formDato} 
                tituloPagina='Crear'
            />
        </Layout>
    )
}

export default NuevoDatoImportante