import React, { useState } from 'react'

import { Button, Header, Icon, Modal } from 'semantic-ui-react'

import { useToasts } from 'react-toast-notifications';

import ServiciosDatosImportantes from '@services/servicios.datos_importantes'

const ModalEliminarDato = ({idDato, obtenerDatos}) => {

    const funcionDatos = obtenerDatos;

    const [open, setOpen] = useState(false);

    const { addToast } = useToasts();

    const datoId = { 'datoId': idDato };

    const deleteDato = () => {
        ServiciosDatosImportantes.deleteDatoById(datoId, ({ data }) => {
            addToast('Dato eliminado con exito', { appearance: 'success', autoDismiss: true });
            setOpen(false);
            if (funcionDatos) {
                funcionDatos()
            }
        }, (error) => {
            if (error.response) {
                addToast('oh no :(, no eres tú somos nosotros, algo a ido mal', { appearance: 'error' });
                setOpen(false);
            }
        });
    }

    return (
        <Modal
            onClose = {() => setOpen(false)}
            onOpen = {() => setOpen(true)}
            open = {open}
            trigger = {
                <Icon 
                    name='trash' 
                    size='large' 
                    aria-label = 'eliminar dato' 
                    className = 'datosImportantesItem-modal--eliminar'
                />
            }
            className='modalEliminarDato'
        >
            <Header icon>
                <Icon name='warning sign' />
                Eliminar Dato
            </Header>
            <Modal.Content >
                <p>
                    Estas a punto de eliminar un dato, seguro que quieres continuar?
                </p>
            </Modal.Content>
            <Modal.Actions>
                <Button 
                    color="black" 
                    onClick={() => setOpen(false)}
                    content="Descartar"
                />
                <Button  
                   content="Eliminar"
                    labelPosition="right"
                    icon="checkmark"
                    negative  
                    onClick={deleteDato}/>
            </Modal.Actions>
        </Modal>
    )
}

export default ModalEliminarDato;