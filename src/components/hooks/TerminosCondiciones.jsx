import React from 'react'
import { Button, Modal } from 'semantic-ui-react'
import Terminos from '@constants/TerminosAndCondiciones'
import { APP_NAME } from '@constants/Constants'

const TerminosCondiciones = (props) => {
    const [openTerminosCondiciones, setOpenTerminosCondiciones] = React.useState(false)

    return (
        <Modal
            centered={false}
            open={openTerminosCondiciones}
            onClose={() => setOpenTerminosCondiciones(false)}
            onOpen={() => setOpenTerminosCondiciones(true)}
            // trigger={<Button>Show Modal</Button>}
            {...props}
        >
            <Modal.Header>Acuerdo de Condiciones de Servicio de {APP_NAME}</Modal.Header>
            <Modal.Content scrolling>
                <Modal.Description>
                    {Terminos}
                </Modal.Description>
            </Modal.Content>
            <Modal.Actions>
                <Button onClick={() => setOpenTerminosCondiciones(false)}>Acepto</Button>
            </Modal.Actions>
        </Modal>
    )
}

export default TerminosCondiciones