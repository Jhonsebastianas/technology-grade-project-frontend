import React from 'react'

import { Container, Table, Grid, Segment } from 'semantic-ui-react';

import UTILS from '@utils/cp.utils';
import Calculos from '@utils/calculos.util';

const ValoresConsumo = ({tiposervicio, lectura}) => {

    const { tarifas } = lectura;

    const servicio = (tiposervicio === 'agua') ?  'm³' : 'Kwh';
    

    return (
        <Container  textAlign='center' className="containerInfo">
            <h5>Valores del Consumo</h5>
            <Grid stackable columns='equal'>
                {tarifas !== undefined &&
                    tarifas.map((tarifa, index) => (

                        <Grid.Column key={index} textAlign="center" >
                            <h4 className="valoresConsumoTitle">
                                {tiposervicio === 'agua'
                                && <>{tarifa.servicio_publico.secundario}</>
                                || <>{tiposervicio}</>}
                            </h4>
                            <Table fixed unstackable basic='very'>
                                <Table.Body>
                                    <Table.Row verticalAlign='middle'>
                                        <Table.Cell>
                                            Servicio por {servicio}
                                        </Table.Cell>
                                        <Table.Cell >{UTILS.formatoMoneda(tarifa.valor_consumo)} </Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell>
                                            Exceso por {servicio}
                                        </Table.Cell>
                                        <Table.Cell >{UTILS.formatoMoneda(tarifa.valor_consumo_exceso)}</Table.Cell>
                                    </Table.Row>
                                    {tiposervicio === 'agua' &&
                                        <Table.Row>
                                            <Table.Cell>Cargo fijo</Table.Cell>
                                            <Table.Cell >
                                                {UTILS.formatoMoneda(tarifa.otros_valores[0].valor)}
                                            </Table.Cell>
                                        </Table.Row>
                                    }
                                    <Table.Row>
                                        <Table.Cell>Exceso en consumo</Table.Cell>
                                        <Table.Cell >
                                            {UTILS.formatoMoneda(Calculos.calcularExcesoPorSubservicio(tarifa, lectura.lectura.suma_consumos))}
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell>
                                            Total a pagar {tiposervicio === 'agua'
                                                && <>{tarifa.servicio_publico.secundario}</>
                                                || <>{tiposervicio}</>}
                                        </Table.Cell>
                                        <Table.Cell className="valorMonetario">
                                            {UTILS.formatoMoneda(Calculos.calcularTotalPagarSubservicio(tarifa, lectura.lectura.suma_consumos))}
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