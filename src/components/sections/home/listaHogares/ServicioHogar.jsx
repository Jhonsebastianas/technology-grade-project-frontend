import React from 'react'
import { Grid, Icon, Popup } from 'semantic-ui-react'
import UTILS from '@utils/cp.utils'
import Calculos from '@utils/calculos.util'

import Link from 'next/link'
import ConstantsList from '@constants/Constants';

const ServicioHogar = (props) => {
    const { servicio, index, handleHogarSeleccionado, numeroContrato, updateDetalleHogar } = props
    const { lectura, principal, secundario, sensor, tarifas } = servicio
    const { has_sensor } = sensor
    const { sumaConsumos, mediciones } = lectura

    const getUltimaActualizacion = () => {
        if (mediciones.length > 0) {
            return mediciones[mediciones.length - 1].fechaHora.split('T')[0];
        }
        return 'No registra';
    }

    const getContrato = () => {
        const { HOGAR } = ConstantsList;

        const hogar = {};
        hogar[HOGAR] = numeroContrato;
        hogar['service'] = principal;
        localStorage.setItem(HOGAR, JSON.stringify(hogar));
    }

    const totalPagar = UTILS.formatoMoneda(Calculos.calcularTotalPagarTarifasPorServicio(tarifas, lectura.sumaConsumos))

    const getImage = () => {
        if (principal === 'agua') {
            return "/images/servicios/agua.png";
        } else if (principal === 'gas') {
            return "/images/servicios/gas.png";
        } else {
            return "/images/servicios/energia.png";
        }
    }

    return (
        <Grid.Column className="container__card-service">
            <div className="card__service">
                <Grid centered>
                    <img src={getImage()} alt="service" className="card__img" />
                </Grid>
                <div className="card__data">
                    <h2 className="card__title">{principal}</h2>
                    <span className="card__preci">
                        {totalPagar}
                    </span>
                    <div className="card__description">
                        <p className='date'>Última actualización: {getUltimaActualizacion()}</p>
                        {(secundario != "nn") ? <p><strong>Subservicio(s):</strong> {secundario}</p> : ""}
                        <p><strong>Consumo:</strong> {(principal === 'agua' || principal === 'gas')
                            && <>{UTILS.formatoMedidaAgua(sumaConsumos)}<sup>3</sup></>
                            || <>{UTILS.formatoMedidaEnergia(sumaConsumos)}</>}
                        </p>
                    </div>
                    {/* {secundario && <p className="card__description">{secundario}</p>} */}
                    <Link href='/home/informeconsumo'>
                        <a className="card__button" onClick={getContrato}>Ver detalle</a>
                    </Link>
                </div>
            </div>
        </Grid.Column>
    )
}

export default ServicioHogar