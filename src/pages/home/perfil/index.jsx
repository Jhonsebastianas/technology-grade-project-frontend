import React, { useEffect, useState } from "react";
import Layout from "@components/layouts/LayoutPrivado";
import loginUtils from "@utils/login.utils";
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

const Perfil = () => {
  const [visibilidadFormulario, setVisibilidadformulario] = useState(false);
  const [usuario, setUsuario] = useState({});

  const formularioInformacionPersonal = () => {
    const formulario = visibilidadFormulario ? false : true;
    setVisibilidadformulario(formulario);
  };

  useEffect(() => {
    let mounted = true;

    if (mounted) {
      const dataUser = {
        fullName: loginUtils.getFullName(),
      };
      setUsuario(dataUser);
      
    }
    return () => (mounted = false);
  }, []);

  return (
    <Layout>
      <Grid>
        <Grid.Row>
          <Grid.Column width={6}>
            <Grid.Column width={8} className="center">
              <img className="imagen" src="/images/avatarUsuario.svg"></img>
              <p className="nombre">
                <strong>{usuario.fullName}</strong>
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
                    placeholder={loginUtils.getFullName()}
                  />
                  <Input
                    label="Apellidos"
                    icon="account_circle"
                    s={11}
                    placeholder={loginUtils.getFullName()}
                  />
                </div>
              )}
            </Grid.Column>
          </Grid.Column>
          <Grid.Column width={9} className="espacioSuperiorTabla">
            
                <TablaInformacionHogares></TablaInformacionHogares>
          </Grid.Column>
          <Grid.Column width={1}></Grid.Column>
        </Grid.Row>
      </Grid>
    </Layout>
  );
};

export default Perfil;
