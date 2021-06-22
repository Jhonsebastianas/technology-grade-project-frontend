import React, { useState, useEffect } from 'react';

import { Button, Modal, Header, Icon } from 'semantic-ui-react';

import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import ModalRegistroLectura from '@components/forms/lecturas/ModalRegistrarLecturaManual'

import UTILS from '@utils/cp.utils';
import Calculos from '@utils/calculos.util';

const GraficaCircular = (props) => {

    const { tiposervicio, lectura, hogar, updateDetalleHogar } = props;
    const { tarifas, lectura: { suma_consumos } } = lectura
    const [openLectura, setOpenLectura] = useState(false);
    const [totalPagar, setTotalPagar] = useState(Calculos.calcularTotalPagarTarifasPorServicio(tarifas, suma_consumos))
    
    let backgroundColor = `#00aae4`
    // let medida = (tiposervicio === 'agua') ? ` m3` : `kwh`;
    const getPercentage = () => {
        let percentage = 0;
        if(tarifas.length > 0 || tarifas.length > 1){
            percentage = ((suma_consumos*100)/tarifas[0].limite_subsidiado).toFixed();
        } else{
            percentage = 0;
        }
        if(percentage > 100){
            backgroundColor = `#ff3333`
        }
        return percentage
    }

    return (
        < div className="containerInfo">
            <h5>Servicio de {tiposervicio}</h5>
            <div className="anchoGraficaCircular">
                <CircularProgressbar
                    value={getPercentage()}
                    text={`${suma_consumos}`}
                    styles={{
                        root: {},
                        path: {
                            stroke: `${backgroundColor}`,
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
                            fill: `${backgroundColor}`,
                            fontSize: "18px",
                            margin: "auto",
                        },
                        background: {
                            fill: "#3e98c7",
                        },
                        width: "50px",   
                    }}
                />  
            </div>
            <div className="informacionGraficaCircular">
                    <p>Total consumido: </p>
                    <p>
                    {tiposervicio === 'agua'
                            && <>{UTILS.formatoMedidaAgua(suma_consumos)}<sup>3</sup></>
                            || <>{UTILS.formatoMedidaEnergia(suma_consumos)}</>}
                    </p>
                    <p>Total monetario: </p>
                    <p className="valorMonetario">{UTILS.formatoMoneda(totalPagar)}</p>
                </div>
                <ModalRegistroLectura
                    hogar={hogar}
                    openLectura={openLectura}
                    setOpenLectura={setOpenLectura}
                    servicioPublico={lectura}
                    updateDetalleHogar={updateDetalleHogar}
                    positive
                />
                <Button onClick={() => setOpenLectura(true)} className="botonGraficas">Nuevo consumo</Button>
        </div>
    );
}

export default GraficaCircular;