import React, { useState } from 'react'
import { Button, Form, Header, Icon, Input, Modal } from 'semantic-ui-react'
import ServiciosLecturas from '@services/servicios.lecturas'
import { useToasts } from 'react-toast-notifications'
import { validateLectura, validateLecturaInicial } from '@components/forms/lecturas/ModalRegistrarLecturaManualValidator'
import HttpStatus from '@constants/HttpStatus'

const CERRAR_MODAL = false;
const ABRIR_MODAL = true;

const ModalRegistrarLecturaManual = (props) => {

    const {
        hogar, servicioPublico,
        openLectura, setOpenLectura
    } = props

    const { numero_contrato } = hogar

    const { addToast } = useToasts()
    /* ESTADOS */
    const [lectura, setLectura] = useState(0)
    const [isLecturaFactura, setIsLecturaFactura] = React.useState(false)
    /* ESTADOS DE MODALS*/
    const [openConfirmar, setOpenConfirmar] = React.useState(CERRAR_MODAL)
    const [openPrimerRegistro, setOpenPrimerRegistro] = React.useState(CERRAR_MODAL)

    const openRegistroInicial = () => {
        setOpenConfirmar(CERRAR_MODAL)
        setOpenPrimerRegistro(ABRIR_MODAL)
        setIsLecturaFactura(true)
    }

    /* VALIDACIÓN FORMULARIOS */
    const [errors, setErrors] = useState({});
    const handledChanged = ({ target }) => {
        const { name, value } = target;
        setLectura(value);
    }

    const registrarLectura = () => {
        const parametros = {
            numeroContrato: numero_contrato,
            servicioPublico: servicioPublico,
            lecturaContador: lectura,
            isLecturaFactura,
        }
        let error = (isLecturaFactura) ? validateLecturaInicial(lectura) : validateLectura(lectura)
        setErrors(error);
        if (!Object.keys(error).length) {
            setOpenLectura(CERRAR_MODAL)
            setOpenPrimerRegistro(CERRAR_MODAL)
            ServiciosLecturas.addLecturaManual(parametros, ({ data, status }) => {
                console.log(status, data)
                if (isLecturaFactura) {
                    addToast('Primer registro de factura añadido correctamente.', { appearance: 'success', autoDismiss: true });
                } else {
                    addToast('Nueva lectura añadida correctamente, consumo actualizado', { appearance: 'success', autoDismiss: true });
                }
                setIsLecturaFactura(false)
            }, (error) => {
                if (error.response) {
                    const { status, data: { lectura_actual_contador } } = error.response;
                    if (status === HttpStatus.CONFLICT) {
                        // Actualmente no cuenta con un primer registro manual para este mes...
                        setOpenConfirmar(ABRIR_MODAL)
                        setLectura(0)
                    } else if (status === HttpStatus.PRECONDITION_FAILED) {
                        console.log(error.response)
                        addToast(`El registro del contador no puede ser menor o igual al actual (lectura actual: ${lectura_actual_contador})`, { appearance: 'warning' });
                        setLectura(lectura_actual_contador)
                    } else {
                        addToast('oh no :(, no eres tú somos nosotros, algo a ido mal', { appearance: 'error' });
                    }
                } else {
                    addToast('oh no :(, no eres tú somos nosotros, algo a ido mal', { appearance: 'error' });
                }
            })
        }
    }
    return (
        <>
            <Modal
                closeIcon
                dimmer='blurring'
                open={openLectura}
                onClose={() => setOpenLectura(CERRAR_MODAL)}
            >
                <Modal.Header>Lectura del contador ({servicioPublico.principal})</Modal.Header>
                <Modal.Content>
                    <Form>
                        <Form.Field>
                            <label htmlFor='lectura'>Lectura actual del contador público:</label>
                            <Input type="number" name="lectura" id='lectura' placeholder="0190201" value={lectura}
                                onChange={handledChanged}
                            />
                            {errors.lectura && (<div className="ui pointing red basic label">{errors.lectura}</div>)}
                        </Form.Field>
                    </Form>
                </Modal.Content>
                <Modal.Actions>
                    <Button negative onClick={() => setOpenLectura(CERRAR_MODAL)}>
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
                onClose={() => setOpenConfirmar(CERRAR_MODAL)}
                onOpen={() => setOpenConfirmar(ABRIR_MODAL)}
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
                    <Button basic color='red' inverted onClick={() => setOpenConfirmar(CERRAR_MODAL)}>
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
                onClose={() => setOpenPrimerRegistro(CERRAR_MODAL)}
                onOpen={() => setOpenPrimerRegistro(ABRIR_MODAL)}
            >
                <Header icon='file alternate' content={`Primera lectura del mes (${servicioPublico.principal})`} />
                <Modal.Content>
                    <Form>
                        <Form.Field>
                            <label htmlFor='lecturaInicial' style={{ fontSize: 'medium' }}>Lectura actual en la factura de servicios públicos:</label>
                            <Input type="number" name="lecturaInicial" id='lecturaInicial' placeholder="0190201"
                                onChange={handledChanged} />
                            {errors.lecturaInicial && (<div className="ui pointing red basic label">{errors.lecturaInicial}</div>)}
                        </Form.Field>
                    </Form>
                </Modal.Content>
                <Modal.Actions>
                    <Button color='red' onClick={() => setOpenPrimerRegistro(CERRAR_MODAL)}>
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