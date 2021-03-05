import React from 'react'
import { Button, Modal } from 'semantic-ui-react'
import Terminos from '@constants/TerminosAndCondiciones'

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
            <Modal.Header>POLÍTICA DE PRIVACIDAD</Modal.Header>
            <Modal.Content>
                <Modal.Description>
                    {Object.keys(Terminos).map((key, i) => {
                        return Terminos[key]
                    })}
                    {/* {Terminos.map(termino => {
                        return (
                            <>
                                <h4>{termino.titulo}</h4>
                                <p>{termino.descripcion}</p>
                            </>
                        )
                    })} */}
                </Modal.Description>
            </Modal.Content>
            <Modal.Actions>
                <Button onClick={() => setOpenTerminosCondiciones(false)}>Acepto</Button>
            </Modal.Actions>
        </Modal>
    )
}

export default TerminosCondiciones