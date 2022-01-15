import BotonAtras from '@components/commons/botones/boton-atras/BotonAtras';
import GraficaBarras from '@components/graficas/GraficaBarras';
import Layout from '@components/layouts/LayoutPrivado';
import Loading from '@components/loader/Loading';
import ServiciosHogares from '@services/servicios.hogares';
import SessionUtil from '@utils/session.util';
import React, { useEffect, useState } from 'react';

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
        return <Loading pantalla="gráficas" />;
    }


    return (
        <Layout>
            <BotonAtras />
            <GraficaBarras lectura={lectura} />
        </Layout>
    );
}

export default InformeGraficas;