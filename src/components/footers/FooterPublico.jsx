import React from 'react';
import Link from 'next/link'
import { APP_NAME } from '@constants/Constants'
import { Button, Container, Grid, Header, Icon, List, Segment } from 'semantic-ui-react';

export default function FooterPublico() {
    return (
        <footer>
            <Segment className="footer-bg" inverted vertical>
                <Container>
                    <Grid divided inverted stackable>
                        <Grid.Row>
                            <Grid.Column width={3}>
                                <Header inverted as='h4' content={APP_NAME} />
                                <List link inverted>
                                    <List.Item><Link href='/nosotros'><a>Acerca de</a></Link></List.Item>
                                    <List.Item as='a'><Link href='/nosotros'><a>Contactanos</a></Link></List.Item>
                                </List>
                            </Grid.Column>
                            <Grid.Column width={7}>
                                <Header as='h4' inverted>
                                    Redes sociales
                                </Header>
                                <p>
                                    <a rel="noreferrer" target="_blank"
                                        aria-label="Facebook controlsep"
                                        href="https://www.facebook.com/Arjeware-753778911629883">
                                        <Icon className="footer__social-icon" name="facebook square" />
                                    </a>
                                </p>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                    <Grid centered>
                        © 2021 - Desarrollado por {APP_NAME} | versión 0.2 (Beta)
                    </Grid>
                </Container>
            </Segment>
        </footer>
    );
}