import React from 'react'

import { Container, Table, Grid, Segment } from 'semantic-ui-react';

import UTILS from '@utils/cp.utils';
import Calculos from '@utils/calculos.util';

const ValoresConsumo = ({tiposervicio, lectura}) => {

    const { tarifas } = lectura;

    const servicio = (tiposervicio === 'agua' || tiposervicio === 'gas') ?  'm³' : 'Kwh';
    

    return (
        <Container  textAlign='center' className="containerInfo">
            <h5>Valores del Consumo</h5>
            <Grid stackable columns='equal'>
                {tarifas !== undefined &&
                    tarifas.map((tarifa, index) => (

                        <Grid.Column key={index} textAlign="center" >
                            <h4 className="valoresConsumoTitle">
                                {tiposervicio === 'agua' 
                                && <>{tarifa.servicioPublico.secundario}</>
                                || <>{tiposervicio}</>}
                            </h4>
                            <Table fixed unstackable basic='very'>
                                <Table.Body>
                                    <Table.Row verticalAlign='middle'>
                                        <Table.Cell>
                                            Servicio por {servicio}
                                        </Table.Cell>
                                        <Table.Cell >{UTILS.formatoMoneda(tarifa.valorConsumo)} </Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell>
                                            Exceso por {servicio}
                                        </Table.Cell>
                                        <Table.Cell >{UTILS.formatoMoneda(tarifa.valorConsumoExceso)}</Table.Cell>
                                    </Table.Row>
                                    { tarifa.otrosValores.length > 0 &&
                                        <Table.Row>
                                            <Table.Cell>Cargo fijo</Table.Cell>
                                            <Table.Cell >
                                                {UTILS.formatoMoneda(tarifa.otrosValores[0].valor)}
                                            </Table.Cell>
                                        </Table.Row>
                                    }
                                    <Table.Row>
                                        <Table.Cell>Exceso en consumo</Table.Cell>
                                        <Table.Cell >
                                            {UTILS.formatoMoneda(Calculos.calcularExcesoPorSubservicio(tarifa, lectura.lectura.sumaConsumos))}
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell>
                                            Total a pagar {(tiposervicio === 'agua' || tiposervicio === 'gas')
                                                && <>{tarifa.servicioPublico.secundario}</>
                                                || <>{tiposervicio}</>}
                                        </Table.Cell>
                                        <Table.Cell className="valorMonetario">
                                            {UTILS.formatoMoneda(Calculos.calcularTotalPagarSubservicio(tarifa, lectura.lectura.sumaConsumos))}
                                        </Table.Cell>
                                    </Table.Row>
                                </Table.Body>
                            </Table>

                        </Grid.Column>
                    )) || <> </>}
            </Grid>
        </Container>
    );
}

export default ValoresConsumo;