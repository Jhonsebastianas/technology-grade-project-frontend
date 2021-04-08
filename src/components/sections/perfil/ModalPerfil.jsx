import React, { useState } from "react";
import { Button, Form, Input, Modal } from "semantic-ui-react";
import ReactDOM from 'react-dom';
const ModalPerfil = (props) => {
  const { modalIsOpen,
  handleCloseModal,
  handleEditHogar,
  children} = props;

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
      <Modal onClose={handleCloseModal} open={modalIsOpen}>
        <Modal.Header>Edita tu hogar</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            {children}
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
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
      </Modal>
    </>, document.getElementById('modal'))
  );
};

export default ModalPerfil;
