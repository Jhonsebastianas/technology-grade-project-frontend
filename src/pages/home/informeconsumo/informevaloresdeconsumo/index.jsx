import BotonAtras from '@components/commons/botones/boton-atras/BotonAtras';
import ValoresConsumo from '@components/commons/valoresconsumo/ValoresConsumo';
import Layout from '@components/layouts/LayoutPrivado';
import Loading from '@components/loader/Loading';
import ServiciosHogares from '@services/servicios.hogares';
import SessionUtil from '@utils/session.util';
import React, { useEffect, useState } from 'react';

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
            <BotonAtras />
            <ValoresConsumo
                tiposervicio={tiposervicio}
                lectura={lectura}
            />
        </Layout>
    );
}

export default InformeValoresConsumo;