import React, { useState, useEffect } from 'react';

import Layout from '@components/layouts/LayoutPrivado';

import { Grid, Icon, Segment } from 'semantic-ui-react';

import Link from 'next/link';

import GraficaCircular from '@components/graficas/GraficaCircular';
import GraficaBarras from '@components/graficas/GraficaBarras';
import ValoresConsumo from '@components/commons/valoresconsumo/ValoresConsumo';
import Tips from '@components/commons/tips/Tips'


import ServiciosHogares from '@services/servicios.hogares';

import SessionUtil from '@utils/session.util'
import LoginUtil from '@utils/login.utils'


const InformeConsumo = () => {

    const [tiposervicio, setTipoServicio] = useState('');
    const [infohogar, setInfoHogar] = useState({});
    const [cargandoHogar, setCargandoHogar] = useState(true);

    useEffect(() => {
        let mounted = true;
        if (mounted) {
            setTipoServicio(SessionUtil.getTipoServicio());
            ServiciosHogares.getHogarAndLectura(SessionUtil.getNumeroContrato(),
                LoginUtil.getUsernameUser(), ({ data }) => {
                    setInfoHogar(data);
                    setCargandoHogar(false)
                }, (error) => { });
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

        return <>
            <Segment vertical id="carga">
                <h3>Cargando la información de tu hogar...</h3>
            </Segment>
        </>;
    }

    return (
        <Layout>
            <Segment vertical>
                <Grid stackable className="informeConsumo">
                    <Grid.Row columns='equal' >
                        <Grid.Column centered textAlign='center'>
                            <GraficaCircular
                                tiposervicio={tiposervicio}
                                hogar={infohogar}
                                lectura={getLectura()}
                            />
                        </Grid.Column>
                        <Grid.Column centered textAlign='center' className="computer only" >
                            <GraficaBarras lectura={getLectura()} />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row columns='equal' >
                        <Grid.Column centered textAlign='center' >
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
                                <Link href="/informeconsumo/informegraficas">
                                    <span><Icon name="chart bar" /></span>
                                </Link>
                            </button>
                            <button className="btnsIC botonVerValores" aria-label="verValores">
                                <Link href="/informeconsumo/informevaloresdeconsumo">
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