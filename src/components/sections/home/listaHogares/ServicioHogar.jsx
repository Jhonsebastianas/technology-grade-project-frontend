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
    const { suma_consumos, mediciones } = lectura

    const getUltimaActualizacion = () => {
        if (mediciones.length > 0) {
            return mediciones[mediciones.length - 1].fecha_hora.split('T')[0];
        }
        return 'No registra'
    }

    const getContrato = () => {
        const { HOGAR } = ConstantsList;

        const hogar = {};
        hogar[HOGAR] = numeroContrato;
        hogar['service'] = principal;
        localStorage.setItem(HOGAR, JSON.stringify(hogar));
    }

    const totalPagar = UTILS.formatoMoneda(Calculos.calcularTotalPagarTarifasPorServicio(tarifas, lectura.suma_consumos))

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
                        <p><strong>Consumo:</strong> {principal === 'agua' || principal === 'gas'
                            && <>{UTILS.formatoMedidaAgua(suma_consumos)}<sup>3</sup></>
                            || <>{UTILS.formatoMedidaEnergia(suma_consumos)}</>}
                        </p>
                    </div>
                    {/* {secundario && <p className="card__description">{secundario}</p>} */}
                    <Link href = '/home/informeconsumo'>
                        <a className="card__button" onClick={getContrato}>Ver detalle</a>
                    </Link>
                </div>
            </div>
            {/* <Card fluid>
                <Card.Content>
                    <Card.Header>
                        <Grid>
                            <Grid.Column floated='left' width={10} verticalAlign="middle">
                                {principal}
                            </Grid.Column>
                            <Grid.Column floated='right' width={6} verticalAlign="middle" textAlign="right">
                                {(has_sensor) ? <Icon inverted name="wifi" color="green" size="small" ></Icon> : ""}
                            </Grid.Column>
                        </Grid>
                    </Card.Header>
                    <Card.Meta>
                        <span className='date'>Última actualización: {getUltimaActualizacion()}</span>
                    </Card.Meta>
                    <Card.Description>
                        {(secundario != "nn") ? <p><strong>Subservicio(s):</strong> {secundario}</p> : ""}
                        <p><strong>Consumo:</strong> {principal === 'agua'
                            && <>{UTILS.formatoMedidaAgua(suma_consumos)}<sup>3</sup></>
                            || <>{UTILS.formatoMedidaEnergia(suma_consumos)}</>}
                        </p>
                        <p>
                            <ValoresMonetarios tarifas={tarifas} lectura={lectura} />
                        </p>

                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    {has_sensor &&
                        <Button icon labelPosition='right' fluid>
                            ver detalle
                            <Icon name='right arrow' />
                        </Button>
                        ||
                        <Button.Group fluid>
                            <Link href="/informeconsumo/"><Button onClick={getContrato}>Ver detalle</Button></Link>
                            <Button.Or text="o" />
                            <Button onClick={() => { handleHogarSeleccionado(index, servicio) }} positive>consumo</Button>
                        </Button.Group>
                    }
                </Card.Content>
            </Card> */}
        </Grid.Column>
    )
}

const ValoresMonetarios = (props) => {
    const { tarifas, lectura: { suma_consumos } } = props
    const [totalPagar, setTotalPagar] = useState(Calculos.calcularTotalPagarTarifasPorServicio(tarifas, suma_consumos))

    return (
        <>
            {tarifas.length > 0 &&
                <>
                    <Popup content='Valor aproximado' trigger={<Icon name="question circle outline"></Icon>} />
                    <strong>Valor total a pagar:</strong> {UTILS.formatoMoneda(totalPagar)}
                </>
                || <><p><strong>Sin tarifas</strong>, prontamente podrás calcular el valor monetario a pagar por tu consumo.</p></>
            }


        </>
    )
}

export default ServicioHogar