import React from 'react'
import { Button, Form, Input, Modal } from 'semantic-ui-react'

function exampleReducer(state, action) {
    switch (action.type) {
        case 'OPEN_MODAL':
            return { open: true, dimmer: action.dimmer }
        case 'CLOSE_MODAL':
            return { open: false }
        default:
            throw new Error()
    }
}

const ModalRegistrarLecturaManual = (props) => {
    /**
     * Semantic modal:
     *  https://react.semantic-ui.com/modules/modal/#content-dimmer
     */
    const [state, dispatch] = React.useReducer(exampleReducer, {
        open: false,
        dimmer: undefined,
    })
    const { open, dimmer } = state

    const { servicio } = props
    return (
        <>
            <Button onClick={() => dispatch({ type: 'OPEN_MODAL', dimmer: 'blurring' })} {...props}>consumo</Button>
            <Modal
                dimmer={dimmer}
                open={open}
                onClose={() => dispatch({ type: 'CLOSE_MODAL' })}
            >
                <Modal.Header>Lectura del contador ({servicio})</Modal.Header>
                <Modal.Content>
                    <Form>
                        <Form.Field>
                            <label htmlFor='lecturaContador'>Lectura del contador público:</label>
                            <Input type="number" name="lecturaContador" id='lecturaContador' placeholder="123"
                            />
                        </Form.Field>
                    </Form>
                </Modal.Content>
                <Modal.Actions>
                    <Button negative onClick={() => dispatch({ type: 'CLOSE_MODAL' })}>
                        Cancelar
                    </Button>
                    <Button positive onClick={() => dispatch({ type: 'CLOSE_MODAL' })}>
                        Registrar
                    </Button>
                </Modal.Actions>
            </Modal>
        </>

    )
}

export default ModalRegistrarLecturaManual