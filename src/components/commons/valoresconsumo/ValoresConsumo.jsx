import React from 'react'

import { Container, Table, Grid, Segment } from 'semantic-ui-react';

const ValoresConsumo = (props) => {

    const { tiposervicio, lectura } = props;
    const { tarifas } = lectura;

    if (tiposervicio === 'energia') {
        return (
            <Container centered textAlign='center'>
                <h5>Valores del Consumo</h5>
                <Table fixed unstackable basic='very'>
                    <Table.Row verticalAlign='middle'>
                        <Table.Cell>Servicio por kwh</Table.Cell>
                        <Table.Cell>$ {tarifas[0].valor_consumo}</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>Exceso por kwh</Table.Cell>
                        <Table.Cell>$ {tarifas[0].valor_consumo_exceso}</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>Cargo fijo</Table.Cell>
                        <Table.Cell>$ ----</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>Exceso</Table.Cell>
                        <Table.Cell>$ {tarifas[0].valor_consumo_exceso}</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>Energía</Table.Cell>
                        <Table.Cell>$ 0</Table.Cell>
                    </Table.Row>


                </Table>

            </Container>
        );
    }

    return (
        <Container centered textAlign='center'>
            <h4>Valores del Consumo</h4>
            <Grid stackable columns='equal'>

                {tarifas.map((tarifa, index) => (

                    <Grid.Column key={index}>
                        <Segment >
                            <h5 style={{ textTransform: 'capitalize' }}>{tarifa.servicio_publico.secundario}</h5>
                            <Table fixed unstackable basic='very'>
                                <Table.Row verticalAlign='middle'>
                                    <Table.Cell>Servicio por m³</Table.Cell>
                                    <Table.Cell>$ {tarifa.valor_consumo}</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>Exceso por m³</Table.Cell>
                                    <Table.Cell >$ {tarifa.valor_consumo_exceso}</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>Cargo fijo</Table.Cell>
                                    <Table.Cell>$ {tarifa.otros_valores[0].valor}</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>Exceso</Table.Cell>
                                    <Table.Cell>$ {tarifa.valor_consumo_exceso}</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>Acueducto</Table.Cell>
                                    <Table.Cell>$ 0</Table.Cell>
                                </Table.Row>

                            </Table>
                        </Segment>
                    </Grid.Column>
                ))}
            </Grid>

        </Container>
    );
}

export default ValoresConsumo;