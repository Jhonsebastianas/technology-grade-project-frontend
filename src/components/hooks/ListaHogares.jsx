import React, { useState, useEffect } from 'react';
import { Accordion, Button, Card, Dimmer, Divider, Grid, Header, Icon, Label, Loader, Popup, Segment } from 'semantic-ui-react'
import ModalRegistroLectura from '@components/forms/lecturas/ModalRegistrarLecturaManual'
import ServiciosHogares from '@services/servicios.hogares'
import loginUtils from '@utils/login.utils'
import UTILS from '@utils/cp.utils'
import Link from 'next/link'

import ConstantsList from '@constants/Constants';

const ListaHogares = () => {

    const [listaHogares, setListaHogares] = useState([]);
    const [cantidadHogares, setCantidadHogares] = useState(0);
    const [mostrarHogares, setMostrarHogares] = useState(false)
    const [cargandoHogares, setCargandoHogares] = useState(false)


    useEffect(() => {
        let mounted = true;
        console.log(mounted)
        if (mounted) {
            ServiciosHogares.getCantidadHogaresByUsername(loginUtils.getUsernameUser(), ({ data }) => {
                setCantidadHogares(data);
            }, (error) => { });
        }

        return () => mounted = false;
    }, [])

    const handleClickMostrarHogares = () => {
        if (listaHogares.length < 1) {
            setCargandoHogares(true)
            ServiciosHogares.getHogaresAndLecturas(loginUtils.getUsernameUser(), ({ data }) => {
                setListaHogares(data)
                setCantidadHogares(data.length)
                setMostrarHogares(true)
                setCargandoHogares(false)
            }, (error) => { });
        } else {
            setListaHogares([])
            setMostrarHogares(false)
        }
    }

    return (
        <>
            <Segment raised className="contenedorHogares">
                <Grid onClick={handleClickMostrarHogares} id="tarjetaHogares">
                    <Grid.Column floated='left' width={10} verticalAlign="middle">
                        <Header as='h5' >
                            {mostrarHogares && <Icon name="caret square down outline" id="iconHogaresDesplegados"></Icon>
                                || <Icon name="caret square right outline"></Icon>}
                                    Mis hogares
                        </Header>
                    </Grid.Column>
                    <Grid.Column floated='right' width={5}>
                        <Button as='div' floated="right" labelPosition='left'>
                            <Label as='a' basic pointing='right'>
                                {cantidadHogares}
                            </Label>
                            <Button icon>
                                <Icon name='home' />
                                {/* Like */}
                            </Button>
                        </Button>
                    </Grid.Column>
                </Grid>
                {cargandoHogares &&
                    <>
                        <Divider />
                        <Segment basic>
                            <br></br>
                            <Dimmer inverted active>
                                <Loader inverted content='Cargando hogares' />
                            </Dimmer>
                        </Segment>
                    </>
                    || ''}
                {mostrarHogares &&
                    <>
                        <Divider />
                        <Accordion fluid styled>
                            {listaHogares.map((hogar, index) => (
                                <HogarDetalle hogar={hogar} index={index} />
                            ))}
                        </Accordion>
                    </>
                    || ''}
            </Segment>
        </>
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

const HogarDetalle = (props) => {
    const { hogar, index } = props
    const { estrato, nombre, numero_contrato, servicios, tipo_hogar } = hogar
    // console.log(hogar)
    /** Variable para el acordión */
    const [activeIndex, setActiveIndex] = useState(-1);

    const handleClick = (e, titleProps) => {
        const { index } = titleProps
        const newIndex = activeIndex === index ? -1 : index
        setActiveIndex(newIndex)
    }

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
        <>
            <Accordion.Title
                active={activeIndex === index}
                index={index}
                onClick={handleClick}
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
            <Accordion.Content active={activeIndex === index} key={index.toString()}>
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
                                <ServicioHogar servicio={servicio} numeroContrato={numero_contrato} />
                            ))}
                        </Grid>
                    </Grid.Column>
                </Grid>
            </Accordion.Content>
        </>
    )
}

const ServicioHogar = (props) => {
    const { servicio, numeroContrato } = props
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
        const { numeroContrato } = props;
        const {principal} = servicio;
        const hogar = {};
        hogar[HOGAR] = numeroContrato;
        hogar['servicio'] = principal;
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
                            <ModalRegistroLectura servicioPublico={servicio} numeroContrato={numeroContrato} positive>Consumo</ModalRegistroLectura>
                        </Button.Group>
                    }
                </Card.Content>
            </Card>
        </Grid.Column>
    )
}

const ValoresMonetarios = (props) => {
    const { tarifas, lectura: { suma_consumos } } = props
    return (
        <>
            {tarifas.length > 0 && tarifas.map((tarifa) => {
                let totalPagar = 0
                if (suma_consumos <= tarifa.limite_subsidiado) {
                    totalPagar = (tarifa.valor_consumo * suma_consumos) + tarifa.otros_valores_sumatoria
                } else {
                    totalPagar = (tarifa.valor_consumo * tarifa.limite_subsidiado)
                        + tarifa.valor_consumo_exceso * (suma_consumos - tarifa.limite_subsidiado)
                }

                return (
                    <>
                        <Popup content='Valor aproximado' trigger={<Icon name="question circle outline"></Icon>} />
                        <strong>Valor total a pagar:</strong> {UTILS.formatoMoneda(totalPagar)}
                    </>

                )
            })
                || <p><strong>Sin tarifas</strong>, prontamente podrás calcular el valor monetario a pagar por tu consumo.</p>}

        </>
    )
}

export default ListaHogares