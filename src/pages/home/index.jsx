import React from 'react'
import { useRouter } from 'next/router'
import Layout from '@components/layouts/LayoutPrivado'
import { Button, Container, Grid, Icon, Segment } from 'semantic-ui-react'
import ListaHogares from '@components/hooks/ListaHogares'

const Home = () => {

    const router = useRouter()

    const goToAddHome = () => {
        router.push("/registrar/hogar");
    }

    return (
        <Layout>
            <div>
                <Container>
                    <h1>Resumen consumo de servicios públicos</h1>
                    <p>En esta sección encontrarás un resumen de tus gastos</p>
                    <Segment>
                        <ListaHogares />
                    </Segment>
                    <Grid>
                        <Grid.Column textAlign="left" width={16}>
                            <Button animated basic color='green' onClick={goToAddHome}>
                                <Button.Content visible>Agregar un hogar [+]</Button.Content>
                                <Button.Content hidden>
                                    <Icon name='arrow right' />
                                </Button.Content>
                            </Button>
                        </Grid.Column>

                    </Grid>
                    <Grid.Column width={12}>
                        {/* <RegistroManual servicio='agua' /> */}
                    </Grid.Column>
                </Container>
            </div>
        </Layout>
    )
}

export default Home