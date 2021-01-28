import React from 'react'
import Layout from '@components/layouts/LayoutPrivado'
import { Container, Grid } from 'semantic-ui-react'

const Home = () => {
    return (
        <Layout>
            <div>
            <Container>
                <h1>Resumen consumo de servicios públicos</h1>
                <p>En esta sección encontrarás un resumen de tus gastos</p>
                {/* <ListaHogares /> */}
                <Grid.Column width={12}>
                    {/* <ButtonOutline onClick={() => history.push("agregar-un-hogar")}>Agregar un hogar [+]</ButtonOutline> */}
                </Grid.Column>
                <Grid.Column width={12}>
                    {/* <RegistroManual servicio='agua' /> */}
                </Grid.Column>
            </Container>
        </div>
        </Layout>
    )
}

export default Home