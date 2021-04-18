import React from 'react';
import { Container, Grid, Segment } from 'semantic-ui-react';
import Layout from '@components/layouts/PublicLayout';

const Agradecimientos = () => {
    return (
        <Layout>
            <Segment vertical className="nosotrosSectionOne" >
                <Grid stackable className="Nosotros" >
                    <Grid.Row >
                        <Grid.Column width={16}>
                            <Container verticalAlign='middle'>
                                <h1 className="nosotrosSectionOneTitle">Agradecimientos</h1>
                                <p className="nosotrosSectionOnePhrase">
                                    con un cariño especial para quienes jamás saldrán de nuestro corazón
                                </p>
                            </Container>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
            <Segment vertical className="">
                <Grid container stackable>
                    <Grid.Row >
                        <Grid.Column width={16}>
                            {/* <Container> */}
                            <p className="NosotrosTitle">Para nuestras familias:</p>
                            <p className="NosotrosIntroduccion">
                                <ul>
                                    <li>
                                        Familia de Jhon Agudelo
                                        </li>
                                    <li>
                                        Juan Esteban Henao Ruiz y toda su familia Henao Ruiz
                                    </li>
                                </ul>
                            </p>
                        </Grid.Column>
                        <Grid.Column width={16}>
                            <p className="NosotrosTitle">Para personas increibles</p>
                            <Grid columns='equal' stackable>
                                <Grid.Column>
                                    <p className="NosotrosIntroduccion">
                                        <ul>
                                            <li>
                                                Gerson Uribe Perez
                                        </li>
                                            <li>
                                                John Faber Flórez
                                        </li>
                                            <li>
                                                Javier Saldarriaga
                                        </li>
                                        </ul>
                                    </p>
                                </Grid.Column>
                                <Grid.Column>
                                    <p className="NosotrosIntroduccion">
                                        <ul>
                                            <li>
                                                Lina Marcela Vasquez
                                        </li>
                                            <li>
                                                Duban Andres Rojas Herrera
                                        </li>
                                        </ul>
                                    </p>
                                </Grid.Column>
                                <Grid.Column>
                                    <p className="NosotrosIntroduccion">
                                        <ul>
                                            <li>
                                                Ana Maria López Arango
                                        </li>
                                            <li>
                                                Marta Duque
                                        </li>
                                        </ul>
                                    </p>
                                </Grid.Column>
                            </Grid>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>

        </Layout>
    )
}

export default Agradecimientos