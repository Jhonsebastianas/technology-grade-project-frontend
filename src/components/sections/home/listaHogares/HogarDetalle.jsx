import React, { useState } from 'react'
import { Accordion, Button, Card, Grid, Header, Icon, Popup } from 'semantic-ui-react'
import UTILS from '@utils/cp.utils'
import Calculos from '@utils/calculos.util'

import Link from 'next/link'

import Styled from 'styled-components'

import ConstantsList from '@constants/Constants';

const StyledContainerHogar = Styled.div`
    
`

const HogarDetalle = (props) => {
    const { hogar, index, indexHogarActivo, changeHogarActivo, handleHogarSeleccionado, updateDetalleHogar } = props
    const { estrato, nombre, numero_contrato, servicios, tipo_hogar } = hogar

    const getConsumoTotalServicio = () => {
        return servicios.map(servicio => {
            const { lectura: { suma_consumos }, principal } = servicio
            const color = (principal === 'agua') ? 'blue' : 'yellow'
            const icon = (principal === 'agua') ? 'theme' : 'plug'
            return (
                <>
                    <Icon name={icon} color={color} /> {suma_consumos}
                </>
            )
        })
    }

    return (
        <StyledContainerHogar>
            <Accordion.Title
                active={indexHogarActivo === index}
                index={index}
                onClick={changeHogarActivo}
            >
                <Grid>
                    <Grid.Column floated='left' width={10} verticalAlign="middle">
                        <Icon name='dropdown' />
                        <Icon name={getIconoTipoHogar(tipo_hogar)} />
                        {nombre}
                    </Grid.Column>
                    <Grid.Column floated='right' width={6} verticalAlign="middle" textAlign="right">
                        {getConsumoTotalServicio()}
                    </Grid.Column>
                </Grid>

            </Accordion.Title>
            <Accordion.Content active={indexHogarActivo === index} key={index.toString()}>
                <Grid stackable>
                    <Grid.Column width={16}>
                        <Header as='h4' >
                            Información de tu hogar
                        </Header>
                        <p><Icon name="address book" color="teal"></Icon><strong>Contrato:</strong> {numero_contrato} | Estrato: {estrato} | Tipo hogar: {tipo_hogar}</p>
                        <p><Icon name="globe" color="blue"></Icon><strong>Localidad:</strong> Colombia, Medellín</p>
                        <h4>Información de tus servicios</h4>
                        <Grid columns="equal" width={16} stackable>
                            {servicios.map((servicio) => (
                                <ServicioHogar
                                    servicio={servicio}
                                    index={index}
                                    numeroContrato={numero_contrato}
                                    handleHogarSeleccionado={handleHogarSeleccionado}
                                    updateDetalleHogar={updateDetalleHogar}
                                />
                            ))}
                        </Grid>
                    </Grid.Column>
                </Grid>
            </Accordion.Content>
        </StyledContainerHogar>
    )
}

const getIconoTipoHogar = (tipoHogar) => {
    switch (tipoHogar) {
        case 'casa':
            return 'home'
        case 'apartamento':
            return 'building'
        default:
            return 'building outline'
    }
}

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
    
    const getContrato =  () => {
        const { HOGAR } = ConstantsList;
    
        const hogar = {};
        hogar[HOGAR] = numeroContrato;
        hogar['service'] = principal;
        localStorage.setItem(HOGAR, JSON.stringify(hogar));
    }

    return (
        <Grid.Column>
            <Card fluid>
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
                            {/* <Popup content='Valor aproximado' trigger={<Icon name="question circle outline"></Icon>} />
                            <strong>Valor a pagar:</strong> {UTILS.formatoMoneda(18000.52)} */}
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
            </Card>
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

export default HogarDetalle