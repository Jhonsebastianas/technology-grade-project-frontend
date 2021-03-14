import React from "react";
import Image from "next/image";
import { Grid, Segment, Container, Icon } from "semantic-ui-react";
import Layout from "@components/layouts/PublicLayout";
import styles from "@styles/modules/contactanos.module.css";

const srcImageContactanos = "/images/contactanos/mujeresReunidas.svg";

const Contactanos = () => {
  const {
    cardRegistro,
    apodoAlmacen,
    light,
    iconPhone,
    ladoInforamcion,
    nombreAlmacen,
    googleMaps,
    responsiveIframe,
    textContactanos,
    map,
  } = styles;

  return (
    <Layout>
      {/*<Segment vertical>
                <Grid stackable>
                    <Grid.Column width={3}></Grid.Column>
                    {/* s={12} m={8} l={8} 
                    <Grid.Column width={10}>
                        <div className={cardRegistro}>
                            <Grid stackable>
                                    <Grid.Column width={8}>
                                        <div className="icon-block">
                                            <Image
                                                width='auto'
                                                height='280dv'
                                                src="/images/contactanos.svg"
                                                alt="Unsplashed background img 1"
                                                className={'responsive-img animate__animated animate__backInLeft'}
                                            />
                                        </div>
                                        <h1 className={textContactanos + " animate__animated animate__backInLeft"}>Contáctenos</h1>
                                    </Grid.Column>
                                    <Grid.Column width={8} className={ladoInforamcion + " animate__animated animate__backInRight"}>
                                        <h2 className={apodoAlmacen + " center"}><strong>SECOPS</strong></h2>
                                        <h5 className={nombreAlmacen + " center nombre-almacen"}>(Prototipo para el seguimiento y control de los servicios públicos a través de un aplicativo web)</h5>
                                        <h2 className={light + " light-blue-text"}><i className={iconPhone + " material-icons"}>email</i></h2>
                                        <p className="">Canales de comunicación <br />Gmail: jhon_agudelo23191@elpoli.edu.co<br /></p>
                                    </Grid.Column>
                                </Grid>
                            <Segment vertical className="nosotrosSectionOne" >
                                <Grid stackable className="Nosotros" >
                                    <Grid.Row >
                                        <Grid.Column width={16}>
                                            <Container verticalAlign='middle'>
                                                <h1 className="nosotrosSectionOneTitle">quiénes somos</h1>
                                                <p className="nosotrosSectionOnePhrase">
                                                    Transfroma la manera en que gastas tus servicios públicos
                                                </p>
                                            </Container>
                                        </Grid.Column>
                                    </Grid.Row>

                                </Grid>
                            </Segment>
                            <section>
                                <div className={map + " animate__animated animate__backInUp"}>
                                    <h5>
                                        Estamos ubicados en:
                                         </h5>
                                    <p >
                                        San Javier, Medellín, Antioquia
                                         </p>
                                    <div className={responsiveIframe}>
                                        <iframe
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.0606689473257!2d-75.62346168541107!3d6.2557381454719145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e442bd61b35b135%3A0x7ac589026488978b!2sSan%20Javier%2C%20Medell%C3%ADn%2C%20Antioquia!5e0!3m2!1ses!2sco!4v1607442657848!5m2!1ses!2sco"
                                            allowfullscreen=""
                                            aria-hidden="false"
                                            frameborder="0"
                                            tabindex="0"
                                            className={googleMaps}
                                        ></iframe>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </Grid.Column>
                    <Grid.Column width={3}></Grid.Column>
                </Grid>
            </Segment>*/}

      <Segment vertical className="contactanosSectionOne">
        <Grid stackable className="contactanos">
          <Grid.Row>
            <Grid.Column width={16}>
              <Container verticalAlign="middle">
                <h1 className="contactanosSectionOneTitle">Contáctanos</h1>
                <p className="contactanosSectionOneSubtitulo">
                  (Prototipo para el seguimiento y control de los servicios
                  públicos a través de un aplicativo web)
                </p>
              </Container>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <Segment vertical className="contactanosSectionTwo segmentosSinEstilos">
        <Grid stackable columns={2}>
          <Grid.Column className="contactanosColumnOne">
            <Image
              src={srcImageContactanos}
              size="big"
              width="500px"
              height="400px"
            ></Image>
          </Grid.Column>
          <Grid.Column className="contactanosColumnSecond arcoAzulSuperiorDerecho">
            <Segment className="segmentosSinEstilos canalesComunicacion">
              <Segment>
                <h2>Canales de comunicación:</h2>
              </Segment>
              <Segment className="contactanosCorreo segmentosSinEstilos">
                <Icon
                  name="envelope"
                  className="iconEmailContactanos"
                  size="huge"
                />
                <p className="parrafoCorreo">JHON_AGUDELO23191@ELPOLI.EDU.CO</p>
              </Segment>
              <Segment className="contactanosCelular segmentosSinEstilos">
                <Icon
                  name="phone"
                  className="iconCelularContactanos"
                  size="huge"
                />
                <p className="parrafoCelular">300-561-56-52</p>
              </Segment>
            </Segment>
          </Grid.Column>
        </Grid>
      </Segment>
      <Segment className="segmentSinMargenInferior segmentosSinEstilos arcoAzulinferiorIzquierdo">
        <div className= "map animate__animated animate__backInUp">
          <h5>Estamos ubicados en:</h5>
          <p>San Javier, Medellín, Antioquia</p>
          <div className="responsiveIframe">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.0606689473257!2d-75.62346168541107!3d6.2557381454719145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e442bd61b35b135%3A0x7ac589026488978b!2sSan%20Javier%2C%20Medell%C3%ADn%2C%20Antioquia!5e0!3m2!1ses!2sco!4v1607442657848!5m2!1ses!2sco"
              allowfullscreen=""
              aria-hidden="false"
              frameborder="0"
              tabindex="0"
              className="googleMaps"
            ></iframe>
          </div>
          <div className="contenedorArcoAzulContactanosInverso">
            
          </div>
        </div>
      </Segment>
    </Layout>
  );
};

export default Contactanos;
