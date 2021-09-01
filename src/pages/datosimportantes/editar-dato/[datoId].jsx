import React, { useEffect, useState } from 'react';

import Layout from '@components/layouts/LayoutPrivado';

import { useRouter } from 'next/router'

import ServiciosDatosImportantes from '@services/servicios.datos_importantes'

import Loading from '@components/loader/Loading'

import CrearDatoImportanteContainer from '@components/forms/datosimportantes/CrearDatoImportanteContainer';

const EditarDato = () => {

    const [dato, setDato] = useState({});
    const [cargando, setCargando] = useState(true);
    const router = useRouter();
    const { datoId } = router.query;
    const id = datoId;

    useEffect (() => { 
        ServiciosDatosImportantes.getDatoById(id, ({ data }) => {
            setDato(data);
            setCargando(false);
        }, (error) => { });
      },[id]);
    
    if (cargando) {
        return <Loading pantalla="dato"/>;
    }

    return (
        <Layout>
            <CrearDatoImportanteContainer 
                metodo='actualizarDato' 
                formDato={dato}
                tituloPagina='Editar'
            /> 
        </Layout>
        
    )
}

export default EditarDato