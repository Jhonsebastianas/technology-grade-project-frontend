import React from "react";
import ModalPerfil from "./ModalOtrosValores";
import { Button, Form, Modal } from "semantic-ui-react";
import RegistarHogarDetails from "@components/forms/hogar/RegistarHogarDetails";

const ModalEditOtroValor = (props) => {
  const {
    modalIsOpen, 
    handleCloseModal,
    formik,
    handleEditOtrosValores,
    tituloModal,
  } = props;

  return (
    <ModalPerfil
      modalIsOpen={modalIsOpen}
      handleCloseModal={handleCloseModal}
      handleEditOtrosValores = {handleEditOtrosValores}
      tituloModal={tituloModal}
    >
      <Form target="_blank" className="formularioEditarOtrosValores" stackable="true"> 
        <Form.Group>
          <div className="elementoNombreOtroValorModal" >
            <Form.Input
              fluid
              label="Nombre"
              placeholder="Ej: Cargo Fijo"
              width={4}
              className="nombreOtroValor"
              {...formik.getFieldProps("nombre")}
            />
            {formik.touched.nombre &&
            formik.errors.nombre ? (
              <div className="ui pointing red basic label">
                {formik.errors.nombre}
              </div>
            ) : null}
          </div>
          <div className="elementoValorModal">
            <Form.Input
              fluid
              label="Valor"
              placeholder="5731.85"
              width={4}
              className="valor"
              {...formik.getFieldProps("valor")}
            />
            {formik.touched.valor &&
            formik.errors.valor ? (
              <div className="ui pointing red basic label">
                {formik.errors.valor}
              </div>
            ) : null}
          </div>
          </Form.Group>
          <div className="elementoDescripcionModal">
            <Form.TextArea
              fluid
              label="Descripcion"
              placeholder="Ej: Cobro por impuestos"
              width={4}
              className="descripcion"
              {...formik.getFieldProps("descripcion")}
            />
            {formik.touched.descripcion &&
            formik.errors.descripcion ? (
              <div className="ui pointing red basic label">
                {formik.errors.descripcion}
              </div>
            ) : null}
          </div>
        
      
      </Form>
      <Modal.Actions className="divActions">
          <Button color="black" onClick={handleCloseModal}>
            Descartar
          </Button>
          <Button
            content="Modificar"
            labelPosition="right"
            icon="checkmark"
            onClick={handleEditOtrosValores}
            positive
          />
        </Modal.Actions>
    </ModalPerfil>
  );
};

export default ModalEditOtroValor;
