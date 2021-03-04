import React from 'react'
import { Button, Form, Header, Icon, Input, Modal } from 'semantic-ui-react'
import ServiciosLecturas from '@services/servicios.lecturas'
import { useToasts } from 'react-toast-notifications'

/**
     * Semantic modal:
     *  https://react.semantic-ui.com/modules/modal/#content-dimmer
     */
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

    const { servicioPublico, numeroContrato } = props
    const { addToast } = useToasts()

    const [state, dispatch] = React.useReducer(exampleReducer, {
        open: false,
        dimmer: undefined,
    })
    const { open, dimmer } = state

    const [openConfirmar, setOpenConfirmar] = React.useState(false)
    const [openPrimerRegistro, setOpenPrimerRegistro] = React.useState(false)
    const [isLecturaFactura, setIsLecturaFactura] = React.useState(false)

    const registrarLectura = () => {
        dispatch({ type: 'CLOSE_MODAL' })
        setOpenPrimerRegistro(false)
        const parametros = {
            numeroContrato,
            servicioPublico,
            lecturaContador: 1000,
            isLecturaFactura,
        }
        ServiciosLecturas.addLecturaManual(parametros, ({ data, status }) => {
            console.log(status, data)
            setIsLecturaFactura(false)
        }, (error) => {
            if (error.response) {
                const { status } = error.response;
                if (status === 409) {
                    // addToast('Actualmente no cuenta con un primer registro manual para este mes...', { appearance: 'info' });
                    setOpenConfirmar(true)
                }
            } else {
                addToast('oh no :(, no eres tú somos nosotros, algo a ido mal', { appearance: 'error' });
            }
        })
    }

    const openRegistroInicial = () => {
        setOpenConfirmar(false)
        setOpenPrimerRegistro(true)
        setIsLecturaFactura(true)
    }

    return (
        <>
            <Button onClick={() => dispatch({ type: 'OPEN_MODAL', dimmer: 'blurring' })} {...props}>consumo</Button>
            <Modal
                closeIcon
                dimmer={dimmer}
                open={open}
                onClose={() => dispatch({ type: 'CLOSE_MODAL' })}
            >
                <Modal.Header>Lectura del contador ({servicioPublico.principal})</Modal.Header>
                <Modal.Content>
                    <Form>
                        <Form.Field>
                            <label htmlFor='lecturaContador'>Lectura actual del contador público:</label>
                            <Input type="number" name="lecturaContador" id='lecturaContador' placeholder="0190201"
                            />
                        </Form.Field>
                    </Form>
                </Modal.Content>
                <Modal.Actions>
                    <Button negative onClick={() => dispatch({ type: 'CLOSE_MODAL' })}>
                        Cancelar
                    </Button>
                    <Button positive onClick={registrarLectura}>
                        Registrar
                    </Button>
                </Modal.Actions>
            </Modal>
            {/* Modal de confirmación */}
            <Modal
                basic
                onClose={() => setOpenConfirmar(false)}
                onOpen={() => setOpenConfirmar(true)}
                open={openConfirmar}
                size='small'
            >
                <Header icon>
                    <Icon name='file alternate' />
                        Toma tu factura de servicios públicos
                </Header>
                <Modal.Content>
                    <p style={{ fontSize: 'medium' }}>
                        Actualmente no cuentas con un primer registro manual del contador, para este mes. ¿Deseas agregarlo?
                    </p>
                </Modal.Content>
                <Modal.Actions>
                    <Button basic color='red' inverted onClick={() => setOpenConfirmar(false)}>
                        <Icon name='remove' /> No
                    </Button>
                    <Button color='green' inverted onClick={() => openRegistroInicial()}>
                        <Icon name='checkmark' /> Sí
                    </Button>
                </Modal.Actions>
            </Modal>
            <Modal
                closeIcon
                open={openPrimerRegistro}
                // trigger={<Button>Show Modal</Button>}
                onClose={() => setOpenPrimerRegistro(false)}
                onOpen={() => setOpenPrimerRegistro(true)}
            >
                <Header icon='file alternate' content={`Primera lectura del mes (${servicioPublico.principal})`} />
                <Modal.Content>
                    <Form>
                        <Form.Field>
                            <label htmlFor='lecturaContador' style={{ fontSize: 'medium' }}>Lectura actual en la factura de servicios públicos:</label>
                            <Input type="number" name="lecturaFactura" id='lecturaFactura' placeholder="0190201" />
                        </Form.Field>
                    </Form>
                </Modal.Content>
                <Modal.Actions>
                    <Button color='red' onClick={() => setOpenPrimerRegistro(false)}>
                        <Icon name='remove' /> Cancelar
                </Button>
                    <Button color='green' onClick={registrarLectura}>
                        <Icon name='checkmark' /> Registrar
                </Button>
                </Modal.Actions>
            </Modal>
        </>
    )
}

export default ModalRegistrarLecturaManual