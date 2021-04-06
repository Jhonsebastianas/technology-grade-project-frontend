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

  const {handleCloseModal,
  handleOpenModal,
  modalIsOpen, 
  handleEditHogar,
  listaHogares,
  goToAddHome,
  fullName,
  formularioInformacionPersonal,
  visibilidadFormulario,
  hogarQueSeEditara,
  handleHogarQueSeEditara} = props;

  return (
      <Layout>
        <Grid>
          <Grid.Row>
            <Grid.Column width={6}>
              <Grid.Column width={8} className="center">
                <img className="imagen" src="/images/avatarUsuario.svg"></img>
                <p className="nombre">
                  <strong>{fullName}</strong>
                </p>
                <Grid.Column>
                  <Button
                    primary
                    className="editarDatosPersonales"
                    onClick={formularioInformacionPersonal}
                  >
                    Editar
                  </Button>
                </Grid.Column>
              </Grid.Column>
              <Grid.Column width={8}>
                {visibilidadFormulario && (
                  <div id="contenidoFormulario">
                    <Input
                      label="Nombre(s)"
                      icon="account_circle"
                      s={11}
                      placeholder={fullName}
                    />
                    <Input
                      label="Apellidos"
                      icon="account_circle"
                      s={11}
                      placeholder={fullName}
                    />
                  </div>
                )}
              </Grid.Column>
            </Grid.Column>
            <Grid.Column width={9} className="espacioSuperiorTabla">
              <TablaInformacionHogares
                handleCloseModal={handleCloseModal}
                handleOpenModal={handleOpenModal}
                modalIsOpen={modalIsOpen}
                handleEditHogar={handleEditHogar}
                listaHogares={listaHogares}
                goToAddHome={goToAddHome}
                hogarQueSeEditara={hogarQueSeEditara}
                handleHogarQueSeEditara={handleHogarQueSeEditara}
              ></TablaInformacionHogares>
            </Grid.Column>
            <Grid.Column width={1}></Grid.Column>
          </Grid.Row>
        </Grid>
      </Layout>
  );
};

export default PerfilDetails;
