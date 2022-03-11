import React from "react";
import ModalPerfil from "./ModalPerfil";
import { Button, Form, Input, Modal } from "semantic-ui-react";
import RegistarHogarDetails from "@components/forms/hogar/RegistarHogarDetails";

const ModalEditHogar = (props) => {
  const {
    modalIsOpen,
    handleCloseModal,
    handleEditHogar,
    hogarQueSeEditara,
    formik,
    handledChanged,
    errors,
    handledServicio,
    validarExistenciaServicio
  } = props;

  return (
    <ModalPerfil
      modalIsOpen={modalIsOpen}
      handleCloseModal={handleCloseModal}
      handleEditHogar={handleEditHogar}
    >
      <Form target="_blank" className="formularioEditarCuenta">
        <RegistarHogarDetails
          formik={formik}
          handledChanged={handledChanged}
          errors={errors}
          handledServicio={handledServicio}
          hogarQueSeEditara={hogarQueSeEditara}
          validarExistenciaServicio={validarExistenciaServicio}
        />
      </Form>
      <Modal.Actions className="divActions">
        <Button color="black" onClick={handleCloseModal}>
          Descartar
        </Button>
        <Button
          content="Modificar"
          labelPosition="right"
          icon="checkmark"
          onClick={handleEditHogar}
          positive
        />
      </Modal.Actions>
    </ModalPerfil>
  );
};

export default ModalEditHogar;
