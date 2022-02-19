import BotonAtras from '@components/commons/botones/boton-atras/BotonAtras';
import Tips from '@components/commons/tips/Tips';
import ValoresConsumo from '@components/commons/valoresconsumo/ValoresConsumo';
import GraficaBarras from '@components/graficas/GraficaBarras';
import GraficaCircular from '@components/graficas/GraficaCircular';
import Layout from '@components/layouts/LayoutPrivado';
import Loading from '@components/loader/Loading';
import ServiciosHogares from '@services/servicios.hogares';
import SessionUtil from '@utils/session.util';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { Grid, Icon, Segment } from 'semantic-ui-react';

const InformeConsumo = () => {

    const [tiposervicio, setTipoServicio] = useState('');
    const [infohogar, setInfoHogar] = useState({});
    const [cargandoHogar, setCargandoHogar] = useState(true);

    const updateDetalleHogar = () => {
        ServiciosHogares.getHogarAndLectura(SessionUtil.getNumeroContrato(), ({ data }) => {
            setInfoHogar(data);
            setCargandoHogar(false);
            console.log(data);
        }, (error) => { });
    }

    useEffect(() => {
        let mounted = true;
        if (mounted) {
            setTipoServicio(SessionUtil.getTipoServicio());
            updateDetalleHogar();

        }
        return () => (mounted = false);
    }, []);

    const mostrarOpciones = () => {
        var opciones = document.querySelectorAll(".btnsIC");
        for (var i = 0; i < opciones.length; i++) {
            opciones[i].classList.toggle("informeConsumoAnimacion");
        }
    }

    const getLectura = () => {
        const { servicios } = infohogar
        if (servicios !== undefined) {
            let lectura = servicios.find(servicios => servicios.principal == tiposervicio);
            return lectura
        }
        return ''
    }

    if (cargandoHogar) {
        return <Loading pantalla="consumo"/>;
    }

    return (
        <Layout>
            <BotonAtras />
            <Segment vertical>
                <Grid stackable className="informeConsumo">
                    <Grid.Row columns='equal' >
                        <Grid.Column  textAlign='center'>
                            <GraficaCircular
                                tiposervicio={tiposervicio}
                                hogar={infohogar}
                                lectura={getLectura()}
                                updateDetalleHogar={updateDetalleHogar}
                            />
                        </Grid.Column>
                        <Grid.Column textAlign='center' className="computer only" >
                            <GraficaBarras lectura={getLectura()} />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row columns='equal'>
                        <Grid.Column  textAlign='center' >
                            <Tips />
                        </Grid.Column>
                        <Grid.Column className="computer only">
                            <ValoresConsumo
                                tiposervicio={tiposervicio}
                                lectura={getLectura()}
                            />
                        </Grid.Column>
                    </Grid.Row>
                    {/* Botón de opciones */}
                    <div className="botonFlotante">
                        <div className="informeConsumoOpciones">
                            <button className="botonPrincipal" onClick={mostrarOpciones} aria-label="verOpciones">
                                <span><Icon name="add" /></span>
                            </button>
                            <button className="btnsIC botonVerGraficas" aria-label="verGraficas">
                                <Link href="/home/informeconsumo/informegraficas">
                                    <span><Icon name="chart bar" /></span>
                                </Link>
                            </button>
                            <button className="btnsIC botonVerValores" aria-label="verValores">
                                <Link href="/home/informeconsumo/informevaloresdeconsumo">
                                    <span><Icon name="file alternate outline" /></span>
                                </Link>
                            </button>
                        </div>
                    </div>
                </Grid>
            </Segment>
        </Layout>
    );
}

export default InformeConsumo;