
import React, { useState } from "react";
import { Button, Form, Input, Modal } from "semantic-ui-react";

const ModalEditarHogar = (props) => {
  const { hogarQueSeEditara } = props;

  const [open, setOpenModal] = useState(false);

  const openModal = () => {
    setOpenModal(!open);
  };
  return (
    <>
      <span
        onClick={openModal}
        className="material-icons  iconoColorAzul"
        node="button"
      >
        mode_edit
      </span>
      <Modal onClose={openModal} open={open}>
        <Modal.Header>Edita tu hogar</Modal.Header>
        <Modal.Content>
          <Modal.Description>
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
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button color="black" onClick={openModal}>
            Descartar
          </Button>
          <Button
            content="Modificar"
            labelPosition="right"
            icon="checkmark"
            onClick={openModal}
            positive
          />
        </Modal.Actions>
      </Modal>
    </>
  );
};

export default ModalEditarHogar;
