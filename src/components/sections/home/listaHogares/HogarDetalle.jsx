import React from 'react'
import { Accordion, Grid, Header, Icon } from 'semantic-ui-react'
import ServicioHogar from '@components/sections/home/listaHogares/ServicioHogar'
import CpUtils from '@utils/cp.utils'

import Styled from 'styled-components'

const StyledContainerHogar = Styled.div`
    
`

const HogarDetalle = (props) => {
    const { hogar, index, indexHogarActivo, changeHogarActivo, handleHogarSeleccionado, updateDetalleHogar } = props
    const { estrato, nombre, numero_contrato, servicios, tipo_hogar } = hogar

    const getConsumoTotalServicio = () => {
        console.log(servicios)
        return servicios.map(servicio => {
            const { lectura: { suma_consumos }, principal } = servicio
            const datos = {
                "agua": { color: "blue", icon: "theme", formato: "formatoMedidaAgua" },
                "energia": { color: "yellow", icon: "plug", formato: "formatoMedidaEnergia" },
                "gas": { color: "red", icon: "hotjar", formato: "formatoMedidaGas" },
            }
            const color = datos[principal].color
            const icon = datos[principal].icon
            const formato = datos[principal].formato
            return (
                <>
                    <Icon name={icon} color={color} /> {CpUtils[formato](suma_consumos)} {(principal == "agua" || principal == "gas") && <sup>3</sup> || ''}
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
                        <h4>Información de tu hogar</h4>
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

export default HogarDetalle