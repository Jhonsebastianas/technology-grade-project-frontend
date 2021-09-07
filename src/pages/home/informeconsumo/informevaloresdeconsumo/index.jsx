import React, { useState, useEffect } from 'react';

import Layout from '@components/layouts/LayoutPrivado';

import Loading from '@components/loader/Loading';

import ValoresConsumo from '@components/commons/valoresconsumo/ValoresConsumo';

import SessionUtil from '@utils/session.util'
import LoginUtil from '@utils/login.utils'

import ServiciosHogares from '@services/servicios.hogares';

const InformeValoresConsumo = () => {

    const [tiposervicio, setTipoServicio] = useState('');
    const [lectura, setLectura] = useState({});
    const [cargando, setCargando] = useState(true);

    useEffect(() => {
        let mounted = true;

        if (mounted) {

            setTipoServicio(SessionUtil.getTipoServicio());
            ServiciosHogares.getHogarLectura(SessionUtil.getNumeroContrato(),
                SessionUtil.getTipoServicio(), ({ data }) => {
                    setLectura(data);
                    setCargando(false);
                }, (error) => { });
        }
        return () => (mounted = false);
    }, []);

    if (cargando) {
        return <Loading pantalla="valores"/>;
    }


    
    return (
        <Layout>
            <ValoresConsumo
                tiposervicio={tiposervicio}
                lectura={lectura}
            />
        </Layout>
    );
}

export default InformeValoresConsumo;