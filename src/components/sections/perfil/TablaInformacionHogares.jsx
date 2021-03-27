import React, { useEffect, useState } from "react";
import { Button, Form, Input, Modal, Table, Icon } from "semantic-ui-react";
import ServiciosHogares from "@services/servicios.hogares";
import { useRouter } from 'next/router'
import loginUtils from "@utils/login.utils";
import ModalEditarHogar from '@components/sections/perfil/ModalEditarHogar'

const TablaInformacionHogares = () => {
    const [hogarQueSeEditara, setHogarQueSeEditara] = useState({});
    

    const [listaHogares, setListaHogares] = useState([]);
    
  
    const router = useRouter()
  
      const goToAddHome = () => {
          router.push("/registrar/hogar");
      }

    

      useEffect(() => {
        let mounted = true;
    
        if (mounted) {
          
            ServiciosHogares.getHogaresByUsername(
              loginUtils.getUsernameUser(),
              ({ data }) => {
                
                console.log("ENTRAMOOOOOOOOOOOS");
                setListaHogares(data);
                setHogarQueSeEditara(data[0]);
              },
              (error) => {}
            );
        }
        return () => (mounted = false);
      }, []);

  return (
    <>
      <Table celled fixed singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>#Contrato</Table.HeaderCell>
            <Table.HeaderCell>Hogar</Table.HeaderCell>
            <Table.HeaderCell>Estrato</Table.HeaderCell>
            <Table.HeaderCell>Servicios</Table.HeaderCell>
            <Table.HeaderCell />
          </Table.Row>
        </Table.Header>
        {listaHogares.length > 0 &&
          listaHogares.map((hogar, index) => {
            return (
              <Table.Body>
                <Table.Row>
                  <Table.Cell>{hogar.numero_contrato}</Table.Cell>
                  <Table.Cell>{hogar.nombre}</Table.Cell>
                  <Table.Cell>{hogar.estrato}</Table.Cell>
                  <Table.Cell>
                    {hogar.servicios.map((servicio) => {
                      return <h5>{servicio.principal}</h5>;
                    })}
                  </Table.Cell>
                  <Table.Cell className="center">
                    <ModalEditarHogar hogarQueSeEditara={listaHogares[index]} />
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            );
          })}
      </Table>
      {listaHogares.length < 1 && (
              <div className="divPerfilSinHogar">
                <p className="parrafoPerfilSinHogar">
                  En estos momentos no cuentas con un hogar, si deseas puedes
                  registar uno
                </p>
                <Button animated basic color='green' onClick={goToAddHome}>
                                <Button.Content visible>Agregar un hogar [+]</Button.Content>
                                <Button.Content hidden>
                                    <Icon name='arrow right' />
                                </Button.Content>
                </Button>
              </div>
            )}
      {listaHogares.length > 0 && (
        <div></div>
      )}
    </>
  );
};

export default TablaInformacionHogares;
