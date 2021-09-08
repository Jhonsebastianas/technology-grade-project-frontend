import React, { useState, useEffect } from 'react';

import Layout from '@components/layouts/LayoutPrivado';

import { Grid } from 'semantic-ui-react';

import GraficaBarras from '@components/graficas/GraficaBarras';

import Loading from '@components/loader/Loading';

import SessionUtil from '@utils/session.util'

import ServiciosHogares from '@services/servicios.hogares';

const InformeGraficas = () => {

    const [lectura, setLectura] = useState({});
    const [cargando, setCargando] = useState(true);

    useEffect(() => {
        let mounted = true;

        if (mounted) {
            ServiciosHogares.getHogarLectura(SessionUtil.getNumeroContrato(),
                SessionUtil.getTipoServicio(), ({ data }) => {
                    setLectura(data);
                    setCargando(false);
                }, (error) => { });
        }
        return () => (mounted = false);

    }, []);

    
    if (cargando) {
        return <Loading pantalla="gráficas"/>;
    }


    return (
        <Layout>
            <Grid stackable>
                <GraficaBarras lectura={lectura} />
            </Grid>
        </Layout>
    );
}

export default InformeGraficas;