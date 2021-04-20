import React from 'react';

import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

import { Container, Input, Button } from 'semantic-ui-react';

const data = [
    { meses: "Semana 1", Enero: 0, amt: 0 },
    { meses: "Semana 2", Enero: 0, amt: 0 },
    { meses: "Semana 3", Enero: 0, amt: 0 },
    { meses: "Semana 4", Enero: 0, amt: 0 },
];

const GraficasBarras = () => {

    return (
        <Container centered textAlign='center'>
            <h5>Estadísticas de Consumo</h5>
            <ResponsiveContainer height={270}>
                <BarChart
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="meses" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="Enero" fill="#51d1f6" />
                </BarChart>
            </ResponsiveContainer>
            <h6 style={{ fontSize: '1rem', textTransform: 'uppercase' }}>Rango de fechas</h6>
            <div className="fechasGraficaBarras">
                <Input className="inputGraficaBarras" type="date" label='Desde' />
                <Input className="inputGraficaBarras" type="date" label='Hasta' />
                <Button className="botonGraficaBarras" primary  >Buscar</Button>
            </div>
        </Container>
    );
}

export default GraficasBarras;