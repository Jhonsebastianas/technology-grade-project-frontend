import React, { useState } from "react";
import ReactDOM from 'react-dom';
import { Modal } from "semantic-ui-react";

const ModalOtrosValores = (props) => {
  const { 
  modalIsOpen,
  handleCloseModal,
  tituloModal,
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
        <Modal.Header>{tituloModal}</Modal.Header>
        <Modal.Content className="divContent">
          <Modal.Description>
            {children}
          </Modal.Description>
        </Modal.Content>
      </Modal>
    </>, document.getElementById('modal'))
  );
};

export default ModalOtrosValores;
