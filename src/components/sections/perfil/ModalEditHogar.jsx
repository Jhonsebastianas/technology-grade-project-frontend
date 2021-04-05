import React from "react";
import ModalPerfil from "./ModalPerfil";
import { Button, Form, Input, Modal } from "semantic-ui-react";

const ModalEditHogar = (props) => {
  const {modalIsOpen, 
  handleCloseModal,
  handleEditHogar,
  hogarQueSeEditara} = props;

  return (
    <ModalPerfil
      modalIsOpen={modalIsOpen}
      handleCloseModal={handleCloseModal}
      handleEditHogar={handleEditHogar}
    >
      <Form>
        <Form.Group widths="equal">
          <Form.Field width={7}>
            <label htmlFor="correo">
              {"Nombre hogar: " +
                (hogarQueSeEditara ? hogarQueSeEditara.nombre : "")}
            </label>
            <Input
              name="nombreHogar"
              id="nombreHogar"
              placeholder={hogarQueSeEditara.nombre}
            />
          </Form.Field>
          <Form.Field width={7}>
            <label htmlFor="correo">
              {"# Contrato: " +
                (hogarQueSeEditara
                  ? hogarQueSeEditara.numero_contrato
                  : "")}
            </label>
            <Input
              name="numeroContrato"
              id="numeroContrato"
              placeholder={hogarQueSeEditara.numero_contrato}
              autocomplete="off"
            />
          </Form.Field>
        </Form.Group>
        <Form.Group inline>
          <label>Servicios</label>
          <Form.Radio label="Agua" value="agua" />
          <Form.Radio label="Energía" value="Energía" />
        </Form.Group>
      </Form>
    </ModalPerfil>
  );
};

export default ModalEditHogar;
