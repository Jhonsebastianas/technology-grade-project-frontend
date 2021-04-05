import React, { useEffect, useState } from "react";
import { Button, Form, Input, Table, Icon } from "semantic-ui-react";

import ModalPerfil from '@components/sections/perfil/ModalPerfil'
import ModalEditHogar from "./ModalEditHogar";

const TablaInformacionHogares = (props) => {
  
  //const {handleHogarQueSeEditara} = props;

  function modalAndHogar(hogar){
     props.onOpenModal()
     props.handleHogarQueSeEditara(hogar)
  }

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
        {props.listaHogares.length > 0 &&
          props.listaHogares.map((hogar, index) => {
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
                  <span key={index} onClick={() => modalAndHogar(hogar)} className="material-icons  iconoColorAzul" node="button">mode_edit</span>
                    {/*<ModalPerfil hogarQueSeEditara={props.listaHogares[index]} />*/}
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            );
          })}
      </Table>
      {props.listaHogares.length < 1 && (
              <div className="divPerfilSinHogar">
                <p className="parrafoPerfilSinHogar">
                  En estos momentos no cuentas con un hogar, si deseas puedes
                  registar uno
                </p>
                <Button animated basic color='green' onClick={props.goToAddHome}>
                                <Button.Content visible>Agregar un hogar [+]</Button.Content>
                                <Button.Content hidden>
                                    <Icon name='arrow right' />
                                </Button.Content>
                </Button>
              </div>
            )}
      {props.listaHogares.length > 0 && (
        <ModalEditHogar 
        modalIsOpen={props.modalIsOpen} 
        onCloseModal={props.onCloseModal}
        onEditHogar={props.onEditHogar}
        hogarQueSeEditara={props.hogarQueSeEditara}
  
        />
      )}
    </>
  );
};

export default TablaInformacionHogares;
