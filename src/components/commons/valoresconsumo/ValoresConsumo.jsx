import React from 'react'

import { Container,Table } from 'semantic-ui-react';

const ValoresConsumo = () => {

    return(
        <Container centered textAlign='center'>
            <h5>Valor del Consumo</h5>
            <Table fixed  unstackable basic='very'>
                <Table.Row verticalAlign='middle'>
                    <Table.Cell>Servicio por m³</Table.Cell>
                    <Table.Cell>$ 2,843.36</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell>Exceso por m³</Table.Cell>
                    <Table.Cell>$ 2,843.36</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell>Cargo fijo</Table.Cell>
                    <Table.Cell>$ 6,550.69</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell>Exceso</Table.Cell>
                    <Table.Cell>$ 2,843.36</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell>Acueducto</Table.Cell>
                    <Table.Cell>$ 0</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell>Alcantarillado</Table.Cell>
                    <Table.Cell>$ 0</Table.Cell>
                </Table.Row>
              
            </Table>
        </Container>
    );
}

export default ValoresConsumo;