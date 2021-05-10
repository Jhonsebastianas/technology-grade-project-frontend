import React, { useState } from 'react';

import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

import { Container, Input, Button } from 'semantic-ui-react';



const GraficasBarras = (props) => {

    const [fechaInicio, setFechaInicio] = useState('');
    const [fechaFin, setFechaFin] = useState('');

    let data = [];

    function functionforEach(item, index) {
        if (index !== 0) {
            data.push({ medicion: `Medición ${index}`, Valor: item.consumo})
        }
    }

    const getData = () => {
        const { lectura } = props

        if (lectura.lectura !== undefined && lectura.lectura.mediciones !== undefined) {
            lectura.lectura.mediciones.forEach(functionforEach)
        }
    }

    getData()

    const handleChange = (e) => {
        if (e.target.name === 'dateInicio') {
            setFechaInicio(e.target.value)
        } else {
            setFechaFin(e.target.value)
        }
    }

    const getMediciones = () => {

        // let inicio = mediciones[0].fecha_hora.slice(0, 10);
        // let fin = mediciones[mediciones.length - 1].fecha_hora.slice(0, 10);


        // if (fechaInicio !== undefined && fechaFin !== undefined) {
        //     if (inicio >= fechaInicio && fin <= fechaFin) {

        //         // function functionforEach(item, index) {
        //         //     data.push({ medicion: index, Valor: item.consumo })
        //         // // }
        //         // mediciones.forEach(functionforEach)
        //         console.log(data)
        //     }
        // }
    }

    return (
        <Container centered textAlign='center' className="containerInfo">
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
                    // barSize={30}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="medicion" />
                    <YAxis  />
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
                        value={fechaInicio}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    <Input
                        className="inputGraficaBarras"
                        type="date"
                        label='Hasta'
                        name="dateFin"
                        value={fechaFin}
                        onChange={handleChange} />
                    <Button className="botonGraficas" primary onClick={getMediciones()}>Buscar</Button>
                </label>
                {/* onClick={getMediciones()} */}
            </div>
        </Container>
    );
}

export default GraficasBarras;