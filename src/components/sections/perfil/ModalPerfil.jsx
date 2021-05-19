import React, { useState } from "react";
import { Button, Form, Input, Modal } from "semantic-ui-react";
import ReactDOM from 'react-dom';

const ModalPerfil = (props) => {
  const { 
  modalIsOpen,
  handleCloseModal,
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
        <Modal.Content className="divContent">
          <Modal.Description>
            {children}
          </Modal.Description>
        </Modal.Content>
      </Modal>
    </>, document.getElementById('modal'))
  );
};

export default ModalPerfil;
