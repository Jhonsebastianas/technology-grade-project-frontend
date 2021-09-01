import React from "react";
import ModalPerfil from "./ModalOtrosValores";
import { Button, Form, Modal, Table } from "semantic-ui-react";
import UTIL from '@utils/cp.utils'


const ModalEliminarOtroValor = (props) => {
  const {
    modalIsOpen, 
    handleCloseModal,
    handleDeleteOtrosValores,
    formik,
    tituloModal,
  } = props;

  return (
    <ModalPerfil
      modalIsOpen = {modalIsOpen}
      handleCloseModal = {handleCloseModal}
      tituloModal={tituloModal}
    >
      <Form target="_blank" className="formularioEditarCuenta">
        <h3>Estás seguro que deseas eliminar el valor fijo con: </h3>
        <Table celled fixed>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell className="encabezado">
                Nombre
              </Table.HeaderCell>
              <Table.HeaderCell className="encabezado">
                Descripcion
              </Table.HeaderCell>
              <Table.HeaderCell className="encabezado">
                Valor
              </Table.HeaderCell>
            </Table.Row>
          </Table.Header>
            <Table.Body>
              <Table.Row>
                <Table.Cell>
                      {formik.values.nombre}
                </Table.Cell>
                <Table.Cell>{formik.values.descripcion}</Table.Cell>
                <Table.Cell>
                  {UTIL.formatoMoneda(formik.values.valor)}
                </Table.Cell>
              </Table.Row>
            </Table.Body>
        </Table>
      </Form>
      <Modal.Actions className="divActions">
          <Button color="black" onClick={handleCloseModal}>
            Descartar
          </Button>
          <Button
            content="Eliminar"
            labelPosition="right"
            icon="checkmark"
            onClick = {handleDeleteOtrosValores}
            negative
          />
        </Modal.Actions>
    </ModalPerfil>
  );
};

export default ModalEliminarOtroValor;
