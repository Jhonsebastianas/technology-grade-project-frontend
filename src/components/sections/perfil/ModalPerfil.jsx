import React, { useState } from "react";
import { Button, Form, Input, Modal } from "semantic-ui-react";
import ReactDOM from 'react-dom';
const ModalPerfil = (props) => {
  const { hogarQueSeEditara } = props;

  const [open, setOpenModal] = useState(false);

  const openModal = () => {
    setOpenModal(!open);
  };
  return (
    ReactDOM.createPortal(<>
      {/*<span
        onClick={openModal}
        className="material-icons  iconoColorAzul"
        node="button"
      >
        mode_edit
      </span>*/}
      <Modal onClose={props.onCloseModal} open={props.modalIsOpen}>
        <Modal.Header>Edita tu hogar</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            {props.children}
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button color="black" onClick={props.onCloseModal}>
            Descartar
          </Button>
          <Button
            content="Modificar"
            labelPosition="right"
            icon="checkmark"
            onClick={props.onEditHogar}
            positive
          />
        </Modal.Actions>
      </Modal>
    </>, document.getElementById('modal'))
  );
};

export default ModalPerfil;
