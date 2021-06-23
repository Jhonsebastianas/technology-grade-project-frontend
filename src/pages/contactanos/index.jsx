import React, { useState } from "react";
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
import { useFormik } from "formik";
import * as Yup from "yup";

const srcImageContactanos = "/images/contactanos/mujeresReunidas.svg";

const Contactanos = () => {
  const [urlCompleta, setUrlCompleta] = useState();

  const validarMensajeCorreo = Yup.object().shape({
    nombre: Yup.string()
      .trim()
      .min(1, "Mínimo 1 caracter")
      .max(40, "Máximo 100 caracteres")
      .required("Este campo es obligatorio"),
    correo: Yup.string()
      .trim()
      .required("Este campo es obligatorio")
      .email("Correo electronico invalido")
      .min(5, "Mínimo 5 caracteres"),
    mensaje: Yup.string()
      .trim()
      .min(1, "Mínimo 1 caracter")
      .max(1000, "Máximo 1000 números")
      .required("Este campo es obligatorio"),
  });

  const sendCorreo = () => {
    
    /*
      .replace(/ /g,"%20") : Reemplaza todos los espacios vacios por %20
       / /g se esta usando para reemplazar todas las posiciones donde se encuentre un vacio por 20%

       Ayuda:
       https://jmartinhc.blogspot.com/2013/08/reemplazar-todos-los-caracteres-con-javascript.html#:~:text=Para%20reemplazar%20caracteres%20dentro%20de,todas%20las%20ocurrencias%20del%20mismo.
    */
    let urlOrganizada = "mailto:controlsep.soporte@gmail.com?subject=Controlsep%20opinion%20de:%20" + formik.values.nombre.replace(/ /g,"%20") +
                          "&body=";// + formik.values.mensaje.replace(/ /g,"%20") + "%0A%0AContacto: " + formik.values.correo;
    
    const separacionMensajePorLinea = formik.values.mensaje.split('\n');
    separacionMensajePorLinea.forEach(element =>urlOrganizada += (element == ""?"%0A":`%0A${element}`));//element == ""? urlOrganizada + "%0A":urlOrganizada + "%0A" + element);

    urlOrganizada += "%0A%0AContacto: " + formik.values.correo;

    setUrlCompleta(urlOrganizada);
    //return false;
  };

  const formik = useFormik({
    initialValues: {
      nombre: "",
      correo: "",
      mensaje: "",
    },
    validationSchema: validarMensajeCorreo,
    onSubmit: sendCorreo,
  });

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
                className="mujeresReunidas"
              ></Image>
              {/* </Container> */}
            </Grid.Column>
            <Grid.Column width={8}>
              {/* <Container> */}
              <Form className="formularioCorreo">
                <Form.Field className="center">
                  <p className="parrafodejarOpinion" id="mensajeOpinion">Dejanos tu opinión </p>
                </Form.Field>
                <Form.Field>
                  <label>Nombre(s)</label>
                  <input
                    id="nombre"
                    placeholder="Ej: Carlos Andres Perez Perez"
                    {...formik.getFieldProps("nombre")}
                  />
                  {formik.touched.nombre && formik.errors.nombre ? (
                    <div className="ui pointing red basic label">
                      {formik.errors.nombre}
                    </div>
                  ) : null}
                </Form.Field>
                <Form.Field>
                  <label>Email</label>
                  <input
                    type="email"
                    placeholder="Ej: carlos@gmail.com"
                    {...formik.getFieldProps("correo")}
                  />
                  {formik.touched.correo && formik.errors.correo ? (
                    <div className="ui pointing red basic label">
                      {formik.errors.correo}
                    </div>
                  ) : null}
                </Form.Field>
                <Form.Field>
                  <TextArea
                    rows={8}
                    name="mensaje"
                    placeholder="Mensaje..."
                    {...formik.getFieldProps("mensaje")}
                  />
                  {formik.touched.mensaje && formik.errors.mensaje ? (
                    <div className="ui pointing red basic label">
                      {formik.errors.mensaje}
                    </div>
                  ) : null}
                </Form.Field>
                <a onClick={formik.submitForm} href={urlCompleta?urlCompleta:"#mensajeOpinion"} className="" id="sendCorreo">Enviar</a>
              </Form>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </Layout>
  );
};

export default Contactanos;
