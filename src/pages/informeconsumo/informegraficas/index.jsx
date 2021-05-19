import React, { useState, useEffect } from 'react';

import Layout from '@components/layouts/LayoutPrivado';

import { Grid } from 'semantic-ui-react';

import GraficaBarras from '@components/graficas/GraficaBarras';

import SessionUtil from '@utils/session.util'
import LoginUtil from '@utils/login.utils'

import ServiciosHogares from '@services/servicios.hogares';

const InformeGraficas = () => {

    const [lectura, setLectura] = useState({});

    useEffect(() => {
        let mounted = true;

        if (mounted) {
            ServiciosHogares.getHogarLectura(SessionUtil.getNumeroContrato(),
                SessionUtil.getTipoServicio(), ({ data }) => {
                    setLectura(data);
                  
                }, (error) => { });
        }
        return () => (mounted = false);

    }, []);

    return (
        <Layout>
            <Grid stackable>
                <GraficaBarras lectura={lectura} />
            </Grid>
        </Layout>
    );
}

export default InformeGraficas;