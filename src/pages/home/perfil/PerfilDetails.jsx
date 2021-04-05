import React from "react";
import Layout from "@components/layouts/LayoutPrivado";
import TablaInformacionHogares from '@components/sections/perfil/TablaInformacionHogares';
import {
  Button,
  Form,
  Grid,
  Header,
  Input,
  Modal,
  Table,
  Icon
} from "semantic-ui-react";
const PerfilDetails = (props) => {
  return (
      <Layout>
        <Grid>
          <Grid.Row>
            <Grid.Column width={6}>
              <Grid.Column width={8} className="center">
                <img className="imagen" src="/images/avatarUsuario.svg"></img>
                <p className="nombre">
                  <strong>{props.fullName}</strong>
                </p>
                <Grid.Column>
                  <Button
                    primary
                    className="editarDatosPersonales"
                    onClick={props.formularioInformacionPersonal}
                  >
                    Editar
                  </Button>
                </Grid.Column>
              </Grid.Column>
              <Grid.Column width={8}>
                {props.visibilidadFormulario && (
                  <div id="contenidoFormulario">
                    <Input
                      label="Nombre(s)"
                      icon="account_circle"
                      s={11}
                      placeholder={props.fullName}
                    />
                    <Input
                      label="Apellidos"
                      icon="account_circle"
                      s={11}
                      placeholder={props.fullName}
                    />
                  </div>
                )}
              </Grid.Column>
            </Grid.Column>
            <Grid.Column width={9} className="espacioSuperiorTabla">
              <TablaInformacionHogares
                onCloseModal={props.onCloseModal}
                onOpenModal={props.onOpenModal}
                modalIsOpen={props.modalIsOpen}
                onEditHogar={props.onEditHogar}
                hogar={""}
                listaHogares={props.listaHogares}
                goToAddHome={props.goToAddHome}
                hogarQueSeEditara={props.hogarQueSeEditara}
                handleHogarQueSeEditara={props.handleHogarQueSeEditara}
              ></TablaInformacionHogares>
            </Grid.Column>
            <Grid.Column width={1}></Grid.Column>
          </Grid.Row>
        </Grid>
      </Layout>
  );
};

export default PerfilDetails;
