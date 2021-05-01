import React from "react";
import Image from "next/image";
import {
  Grid,
  Segment,
  Container,
  Icon,
  Form,
  Button,
  Checkbox,
  TextArea,
} from "semantic-ui-react";
import Layout from "@components/layouts/PublicLayout";

const srcImageContactanos = "/images/contactanos/mujeresReunidas.svg";

const Contactanos = () => {
  return (
    <Layout>
      <Segment vertical id="contactanosSectionOne">
        <Grid stackable className="contactanos">
          <Grid.Row>
            <Grid.Column width={16}>
              <Container verticalAlign="middle">
                <h1 className="contactanosSectionOneTitle">Contáctanos</h1>
                <p className="contactanosSectionOneSubtitulo">
                (Prototipo para el seguimiento y control de los servicios
                  públicos)
                </p>
              </Container>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <Segment vertical className="contactanosSectionTwo">
        <Grid container stackable>
          <Grid.Row>
            <Grid.Column width={8}>
              {/* <Container> */}
              <Image
                src={srcImageContactanos}
                size="big"
                width="500px"
                height="400px"
              ></Image>
              {/* </Container> */}
            </Grid.Column>
            <Grid.Column width={8}>
              {/* <Container> */}
              <Form className="formularioCorreo">
                <Form.Field className="center">
                  <p className="parrafodejarOpinion">Dejanos tu opinión </p>
                </Form.Field>
                <Form.Field>
                  <label>Nombre(s)</label>
                  <input placeholder="Ej: Carlos Andres Perez Perez" />
                </Form.Field>
                <Form.Field>
                  <label>Email</label>
                  <input type="email" placeholder="Ej: carlos@gmail.com" />
                </Form.Field>
                <Form.Field>
                  <TextArea rows={8} placeholder="Mensaje..." />
                </Form.Field>
                <Form.Field>
                  <Checkbox label="I agree to the Terms and Conditions" />
                </Form.Field>
                <Button type="submit">Submit</Button>
              </Form>
              {/* </Container> */}
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </Layout>
  );
};
{
  /*<Layout>
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
            <div className="segmentosSinEstilos canalesComunicacion">
            <Form className="formularioCorreo">
              <Form.Field>
                <label>First Name</label>
                <input placeholder="First Name" />
              </Form.Field>
              <Form.Field>
                <label>Last Name</label>
                <input placeholder="Last Name" />
              </Form.Field>
              <Form.Field>
                <TextArea rows={8} placeholder='Mensaje...' />
              </Form.Field>
              <Form.Field>
                <Checkbox label="I agree to the Terms and Conditions" />
              </Form.Field>
              <Button type="submit">Submit</Button>
            </Form>
              <Segment>
                <h2>Canales de comunicación:</h2>
              </Segment>
              <Segment className="contactanosCorreo segmentosSinEstilos">
                <a href="mailto:scp.secops@gmail.com">
                  <Icon
                    name="envelope"
                    className="iconEmailContactanos"
                    size="huge"
                  />
                </a>
                <p className="parrafoCorreo">scp.secops@gmail.com</p>
              </Segment>
               <Segment className="contactanosCelular segmentosSinEstilos">
                <Icon
                  name="phone"
                  className="iconCelularContactanos"
                  size="huge"
                />
                <p className="parrafoCelular">300-561-56-52</p>
              </Segment> 
            </div>
          </Grid.Column>
        </Grid>
      </Segment>
      <Segment className="segmentSinMargenInferior segmentosSinEstilos arcoAzulinferiorIzquierdo">
        <div className="map animate__animated animate__backInUp">
          <div className="responsiveIframe">
            

            <form method="post">
              <h2 class="text-center">Contact us</h2>
              <div class="form-group">
                <input
                  class="form-control"
                  type="text"
                  name="name"
                  placeholder="Name"
                />
              </div>
              <div class="form-group">
                <input
                  class="form-control is-invalid"
                  type="email"
                  name="email"
                  placeholder="Email"
                />
                <small class="form-text text-danger">
                  Please enter a correct email address.
                </small>
              </div>
              <div class="form-group">
                <textarea
                  class="form-control"
                  name="message"
                  placeholder="Message"
                  rows="14"
                ></textarea>
              </div>
              <div class="form-group">
                <button class="btn btn-primary" type="submit">
                  send{" "}
                </button>
              </div>
            </form>
          </div>
          <div className="contenedorArcoAzulContactanosInverso"></div>
        </div>
            </Segment>
    </Layout>*/
}

export default Contactanos;
