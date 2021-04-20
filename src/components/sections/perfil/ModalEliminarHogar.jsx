import React from "react";
import ModalPerfil from "./ModalPerfil";
import { Button, Form, Input, Modal } from "semantic-ui-react";


const ModalEliminarHogar = (props) => {
  const {
    modalIsOpen, 
    handleCloseModal,
    hogarQueSeEditara,
    handleEliminarHogar,
  } = props;

  return (
    <ModalPerfil
      modalIsOpen={modalIsOpen}
      handleCloseModal={handleCloseModal}
    >
      <Form target="_blank" className="formularioEditarCuenta">
            <p>Seguro que deseas eleminar el hogar "{hogarQueSeEditara.nombre}"  con el numero de contrato : {hogarQueSeEditara.numeroContrato}</p>
      </Form>
      <Modal.Actions className="divActions">
          <Button color="black" onClick={handleCloseModal}>
            Descartar
          </Button>
          <Button
            content="Eliminar"
            labelPosition="right"
            icon="checkmark"
            onClick={handleEliminarHogar}
            negative
          />
        </Modal.Actions>
    </ModalPerfil>
  );
};

export default ModalEliminarHogar;
