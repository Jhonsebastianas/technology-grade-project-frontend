import React, { useState } from 'react';
import Layout from '@components/layouts/LayoutPrivado'
import { Container, Grid, Segment } from 'semantic-ui-react';
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
            background: white;
        }
    `}

    ${props => props.estado == 'vista' && css`
        div {
            background: lightgray;
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
    const { descripcion, diaMes,  estado, titulo, tiempo } = notificacion

    return (
        <StyledNotificacion estado={estado} key={index}>
            {/* <h2>06 / Abril</h2> */}
            <h2>{diaMes}</h2>
            <Segment>
                <Grid>
                    <Grid.Column width={16}>
                        <h2>{titulo}</h2>
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
    )
}

export default Notificaciones