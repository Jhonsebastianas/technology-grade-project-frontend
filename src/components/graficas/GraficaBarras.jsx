import React, { useState } from 'react';

import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

import { Container, Input, Button } from 'semantic-ui-react';

const GraficasBarras = (props) => {

    let data = [];

    function functionforEach(item, index) {
        if (index !== 0) {
            data.push({ medicion: `Medición ${index}`, Valor: item.consumo })
        }
    }

    const getData = () => {
        const { lectura } = props
        if (lectura.lectura !== undefined && lectura.lectura.mediciones !== undefined) {
            lectura.lectura.mediciones.forEach(functionforEach)
        }
    }

    getData()

    return (
        <Container textAlign='center' className="containerInfo">
            <h5>Estadísticas de Consumo</h5>
            <ResponsiveContainer height={270}>
                <BarChart

                    data={data}
                    margin={{
                        top: 5,
                        right: 5,
                        left: 5,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="medicion" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="Valor" fill="#51d1f6" />
                </BarChart>
            </ResponsiveContainer>
            <h6 className="rangoFechas">Rango de fechas</h6>
            <div className="fechasGraficaBarras">
                <label>
                    <Input
                        className="inputGraficaBarras"
                        type="date"
                        label='Desde'
                        name="dateInicio"
                    />
                </label>
                <label>
                    <Input
                        className="inputGraficaBarras"
                        type="date"
                        label='Hasta'
                        name="dateFin"
                    />
                    <Button className="botonGraficas" primary>Buscar</Button>
                </label>
             
            </div>
        </Container>
    );
}

export default GraficasBarras;