import React, { useState , useEffect} from 'react';

import { Button, Modal, Header, Icon } from 'semantic-ui-react';

import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import ModalRegistroLectura from '@components/forms/lecturas/ModalRegistrarLecturaManual'

const GraficaCircular = (props) => {

    const {tiposervicio, numeroContrato, lectura} = props;
    
    
    const percentage = 0;
    
    return (
        <div>
            <h5>Servicio de {tiposervicio}</h5>
            <div className="anchoGraficaCircular">
                <CircularProgressbar
                    value={percentage}
                    text={`${percentage} %`}
                    styles={{
                        root: {},
                        path: {
                            stroke: `#00aae4`,
                            strokeLinecap: "round",
                            transition: "stroke-dashoffset 0.5s ease 0s",
                            transform: "rotate(0.25turn)",
                            transformOrigin: "center center",
                        },
                        trail: {
                            stroke: "#d6d6d6",
                            strokeLinecap: "butt",
                            transform: "rotate(0.25turn)",
                            transformOrigin: "center center",
                        },
                        text: {
                            fill: "#179fcd)",
                            fontSize: "18px",
                            margin: "auto",
                        },
                        background: {
                            fill: "#3e98c7",
                        },
                        width: "50px",
                    }}
                />
                <div className="informacionGraficaCircular">
                    {/* <p>Consumo promedio: </p>
                    <p>14</p>
                    <p>Consumo actual: </p>
                    <p>10</p> */}
                    <p>Total consumido: </p>
                    <p>{lectura.lectura.suma_consumos}</p>
                    <p>Total monetario: </p>
                    <p><strong></strong></p>
                </div>
                <ModalRegistroLectura 
                    servicioPublico={lectura} 
                    numeroContrato={numeroContrato} 
                    positive
                >
                    Nuevo Consumo
                </ModalRegistroLectura>
            </div>
       
        </div>
    );
}

export default GraficaCircular;