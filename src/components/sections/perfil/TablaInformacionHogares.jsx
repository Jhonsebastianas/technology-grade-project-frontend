import React, { useEffect, useState } from "react";
import { Button, Form, Input, Table, Icon } from "semantic-ui-react";

import ModalPerfil from '@components/sections/perfil/ModalPerfil'
import ModalEditHogar from "./ModalEditHogar";
import ModalEliminarHogar from "./ModalEliminarHogar";

const TablaInformacionHogares = (props) => {

  const {
    handleCloseModal,
    handleOpenModal,
    modalIsOpen, 
    handleEditHogar,
    listaHogares,
    goToAddHome,
    hogarQueSeEditara,
    handleHogarQueSeEditara,
    handleEliminarHogar,
    formik,
    handledChanged,
    errors,
    handledServicio,
    validarExistenciaServicio,
    tipoDeAccion,
    setTipoDeAccion,
    } = props;

  function modalAndEditarHogar(hogar){
     handleOpenModal()
     handleHogarQueSeEditara(hogar)
     setTipoDeAccion("editar");
  }

  function modalAndEliminarHogar(hogar){
    handleOpenModal();
    handleHogarQueSeEditara(hogar);
    setTipoDeAccion("eliminar");
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
        {listaHogares.length > 0 &&
          listaHogares.map((hogar, index) => {
            return (
              <Table.Body key={index}>
                <Table.Row>
                  <Table.Cell>{hogar.numero_contrato}</Table.Cell>
                  <Table.Cell>{hogar.nombre}</Table.Cell>
                  <Table.Cell>{hogar.estrato}</Table.Cell>
                  <Table.Cell>
                    {hogar.servicios.map((servicio) => {
                      return <h5>{servicio.principal}</h5>;
                    })}
                  </Table.Cell>
                  <Table.Cell className="center celdaIconosInfoHogares">
                  <span  onClick={() => modalAndEditarHogar(hogar)} className="material-icons  iconoColorAzul" node="button">mode_edit</span>
                  <span  onClick={() => modalAndEliminarHogar(hogar)} className="material-icons  iconoColorRojo" node="button">close</span>
                    {/*<ModalPerfil hogarQueSeEditara={listaHogares[index]} />*/}
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
      {listaHogares.length > 0 && tipoDeAccion === "editar" && (
        <ModalEditHogar 
        modalIsOpen={modalIsOpen} 
        handleCloseModal={handleCloseModal}
        handleEditHogar={handleEditHogar}
        hogarQueSeEditara={hogarQueSeEditara}
        formik={formik}
        handledChanged={handledChanged}
        errors={errors}
        handledServicio={handledServicio}
        validarExistenciaServicio={validarExistenciaServicio}
        />
      )}

      {listaHogares.length > 0 && tipoDeAccion === "eliminar" && (
        <ModalEliminarHogar 
        modalIsOpen={modalIsOpen} 
        handleCloseModal={handleCloseModal}
        hogarQueSeEditara={hogarQueSeEditara}
        handleEliminarHogar={handleEliminarHogar}
        />
      )}
    </>
  );
};

export default TablaInformacionHogares;
