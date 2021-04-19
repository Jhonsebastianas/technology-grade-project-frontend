import React, { useState, useEffect } from 'react';

import Layout from '@components/layouts/LayoutPrivado';

import { Button, Grid, Icon, Segment } from 'semantic-ui-react';

import Link from 'next/link';

import GraficaCircular from '@components/graficas/GraficaCircular';
import GraficaBarras from '@components/graficas/GraficaBarras';
import ValoresConsumo from '@components/commons/valoresconsumo/ValoresConsumo';
import Tips from '@components/commons/tips/Tips'

import Constants from '@constants/Constants';
import ServiciosHogares from '@services/servicios.hogares';
import loginUtils from '@utils/login.utils';

const InformeConsumo = () => {

    const [tiposervicio, setTipoServicio] = useState('');
    const [infohogar, setInfoHogar] = useState({});
    const [cargandoHogar, setCargandoHogar] = useState(true);
    
    useEffect(() => {
        let mounted = true;

        if (mounted) {
            
            const { HOGAR } = Constants;
            const hogar = JSON.parse(localStorage.getItem(HOGAR));
            setTipoServicio(hogar.servicio);

            ServiciosHogares.getHogaresAndLecturas(loginUtils.getUsernameUser(), ({ data }) => {
                setInfoHogar(data.find(data => data.numero_contrato == hogar.hogar));
                setCargandoHogar(false)
            }, (error) => { });
            getLectura()
        }
        return () => (mounted = false);
    }, []);

    const mostrarOpciones = () => {
        var opciones = document.querySelectorAll(".btnsIC");
        for (var i = 0; i < opciones.length; i++) {
            opciones[i].classList.toggle("informeConsumoAnimacion");
        }
    }

    const getLectura = () =>{
        const { servicios} = infohogar
        if(servicios !== undefined){
            let lectura = servicios.find(servicios => servicios.principal == tiposervicio);
            console.log(lectura)
            return lectura
        }
        return''
    }
      
    if (cargandoHogar) {

        return <>
                    <Segment vertical textAlign='center'>
                        <h3>Cargando la información de tu hogar...</h3>
                    </Segment>
                </>;
    }

    return (
        <Layout>
            <Segment vertical>
                <Grid stackable className="informeConsumo">
                    <Grid.Row columns='equal' >
                        <Grid.Column centered textAlign='center' className="contenedorMovil">
                            <div className="informeConsumoMin">
                                <GraficaCircular 
                                    tiposervicio={tiposervicio} 
                                    numeroContrato={infohogar.numero_contrato} 
                                    lectura={getLectura()} 
                                />
                            </div>
                        </Grid.Column>
                        <Grid.Column centered textAlign='center' className="computer only" >
                            <div className="informeConsumoMax">
                                <GraficaBarras />
                            </div>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row columns='equal' >
                        <Grid.Column className="contenedorMovil">
                            <div className="informeConsumoMin">
                                <div className="tip">
                                    <Tips />
                                </div>
                            </div>
                        </Grid.Column>
                        <Grid.Column className="computer only">
                            <div className="informeConsumoMax">
                                <ValoresConsumo tiposervicio={tiposervicio} lectura={getLectura()} />
                            </div>
                        </Grid.Column>
                    </Grid.Row>
                    {/* Botón de opciones */}
                    <div className="botonFlotante">
                        <div className="informeConsumoOpciones">
                            <button className="botonIC1" onClick={mostrarOpciones} >
                                <span><Icon name="add" /></span>
                            </button>
                            <button className="btnsIC botonIC2">
                                <Link href="/informeconsumo/informegraficas">
                                    <span><Icon name="chart bar" /></span>
                                </Link>
                            </button>
                            <button className="btnsIC botonIC3">
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