import React, { useState } from 'react';

import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

import { Container, Input, Button } from 'semantic-ui-react';

const GraficasBarras = (props) => {

    let data = []

    const Datos = (array) => {
        for (const property in array) {
            data.push({ Medición: `${property}`, Consumo: array[property] });
        }
    }

    function groupBy(objectArray, property) {
        return objectArray.reduce(function (acc, obj) {
            let key = obj[property];
            if (!acc[key.slice(0, 10)]) {
                acc[key.slice(0, 10)] = 0;
            }
            acc[key.slice(0, 10)] += obj.consumo;
            return acc
        }, {})
    }

    const getData = () => {
        const { lectura } = props;
        if (lectura.lectura.mediciones !== undefined) {
            let groupedMedicion = groupBy(lectura.lectura.mediciones, 'fecha_hora');
            Datos(groupedMedicion);
        }
    }

    getData();

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
                    <XAxis dataKey="Medición" />
                    <YAxis />
                    <Tooltip />
                    <Legend  wrapperStyle={{ lineHeight: '40px' }}/>
                    <Bar dataKey="Consumo" fill="#00aae4" barSize={30} />
                </BarChart>
            </ResponsiveContainer>
            {/* <h6 className="rangoFechas">Rango de fechas</h6>
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

            </div> */}
        </Container>
    );
}

export default GraficasBarras;