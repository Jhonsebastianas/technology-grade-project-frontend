import React, { useState } from 'react';
import Layout from '@components/layouts/LayoutPrivado'
import { Container, Grid, Label, Segment } from 'semantic-ui-react';
import ServiciosNotificaciones from '@services/servicios.notificaciones'
import StyledComponents, { css } from 'styled-components'

const Notificaciones = () => {

    const [notificaciones, setNotificaciones] = useState([])

    React.useEffect(() => {
        let mounted = true;
        if (mounted) {
            ServiciosNotificaciones.getAllNotificaciones({}, ({ data }) => {
                setNotificaciones(data)
            }, (error) => { })
        }
        return () => mounted = false;
    }, [])

    return (
        <Layout>
            <Container>
                <h1>Panel de notificaciones</h1>
                <p>Aquí encontrarás todas las alertas y notificaciones que correspondan a tus hogares.</p>
                {notificaciones
                    && notificaciones.map((notificacion, index) => <DetalleNotificacion notificacion={notificacion} index={index} />)
                    || 'Sin notificaciones'}
            </Container>
        </Layout>
    )
}

const StyledNotificacion = StyledComponents.div`

    ${props => props.estado == 'nueva' && css`
        div {
            background: var(--input-color);
        }

        .label__notification {
            background: var(--input-color);
            color: var(--first-color);
        }
    `}

    ${props => props.estado == 'vista' && css`
        div {
            background: var(--input-color);
        }
    `}

    ${props => props.estado == 'eliminada' && css`
        div {
            display: none;
        }  
    `}
`

const DetalleNotificacion = (props) => {

    const { notificacion, index } = props
    const { descripcion, diaMes, estado, titulo, tiempo } = notificacion

    return (
        <Container>
            <StyledNotificacion estado={estado} key={index}>
                {/* <h2>06 / Abril</h2> */}
                <h2>{diaMes}</h2>
                <Segment vertical>
                    <Grid>
                        <Grid.Column width={16}>
                            <h2>
                                {estado == 'nueva' &&
                                    <Label className="label__notification" floating>
                                        {estado}
                                    </Label>
                                    || ''}

                                {titulo}
                            </h2>
                            <Grid>
                                <Grid.Column width={12}>
                                    <h4>Hora de notificación:</h4>
                                </Grid.Column>
                                <Grid.Column width={4} textAlign='right'>
                                    {tiempo}
                                </Grid.Column>
                            </Grid>
                        </Grid.Column>
                        <Grid.Column width={16}>
                            <p>{descripcion}</p>
                        </Grid.Column>
                    </Grid>
                </Segment>
            </StyledNotificacion>
        </Container>
    )
}

export default Notificaciones