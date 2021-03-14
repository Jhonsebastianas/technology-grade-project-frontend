import React from 'react';

import Layout from '@components/layouts/LayoutPrivado';

import { Button, Grid, Modal, Header, Icon, Segment } from 'semantic-ui-react';

import Link from 'next/link';

import GraficaCircular from '@components/graficas/GraficaCircular';
import GraficaBarras from '@components/graficas/GraficaBarras';
import ValoresConsumo from '@components/commons/valoresconsumo/ValoresConsumo'

const InformeConsumo = () => {

    const mostrarOpciones = () => {
        var opciones = document.querySelectorAll(".btnsIC");
        for (var i = 0; i < opciones.length; i++) {
            opciones[i].classList.toggle("informeConsumoAnimacion");
        }
    }

    return (
        <Layout>
            <Segment vertical>
                <Grid stackable  className="informeConsumo">
                    <Grid.Row columns='equal' >
                        <Grid.Column  centered textAlign='center'  className="contenedorMovil">
                            <div className="informeConsumoMin">
                                <GraficaCircular />
                            </div>
                        </Grid.Column>
                        <Grid.Column  centered textAlign='center' className="computer only" >
                            <div className="informeConsumoMax">
                                <GraficaBarras />
                            </div>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row columns='equal' >
                        <Grid.Column  className="contenedorMovil">
                            <div className="informeConsumoMin">
                                <h5>Tip de Ahorro</h5>
                                <p>
                                    <strong>Reutiliza el agua.</strong> Intenta volver a utilizar el
                                    agua que no esté sucia para otras acciones, como por ejemplo, el
                                    agua del baño de tus hijos te puede servir para fregar el suelo.
                                </p>
                            </div>
                        </Grid.Column>
                        <Grid.Column className="computer only">
                            <div className="informeConsumoMax">
                                <ValoresConsumo/>
                            </div>
                        </Grid.Column>
                    </Grid.Row>
                    <div className="botonFlotante">
                        <div className="informeConsumoOpciones">
                            <button class="botonIC1" onClick={mostrarOpciones} >
                                <span><Icon name="add" /></span>
                            </button>
                            <button class="btnsIC botonIC2">
                                <Link href="/informeconsumo/informegraficas">
                                    <span><Icon name="chart bar" /></span>
                                </Link>
                            </button>
                            <button class="btnsIC botonIC3">
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