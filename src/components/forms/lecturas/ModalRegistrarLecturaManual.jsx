import React, { useEffect, useState } from 'react'
import { Button, Form, Header, Icon, Input, Modal } from 'semantic-ui-react'
import ServiciosLecturas from '@services/servicios.lecturas'
import { useToasts } from 'react-toast-notifications'
import { validateLectura, validateLecturaInicial } from '@components/forms/lecturas/ModalRegistrarLecturaManualValidator'
import CpUtils from '@utils/cp.utils'
import HttpStatus from '@constants/HttpStatus'

const CERRAR_MODAL = false;
const ABRIR_MODAL = true;

const ModalRegistrarLecturaManual = (props) => {

    const {
        hogar, servicioPublico,
        openLectura, setOpenLectura
    } = props

    const funcionDetalle = props.updateDetalleHogar;

    const { numeroContrato } = hogar

    const { addToast } = useToasts()
    /* ESTADOS */
    const [lectura, setLectura] = useState(0)
    const [isLecturaFactura, setIsLecturaFactura] = React.useState(false)
    /* ESTADOS DE MODALS*/
    const [openPrimerRegistro, setOpenPrimerRegistro] = React.useState(CERRAR_MODAL)

    const openRegistroInicial = () => {
        setOpenLectura(CERRAR_MODAL);
        setOpenPrimerRegistro(ABRIR_MODAL);
    }

    const init = () => {
        const parametros = {
            numeroContrato: numeroContrato,
            servicioPublico: servicioPublico,
        }
        ServiciosLecturas.isPrimeraLecturaManual(parametros, ({ data }) => {
            setIsLecturaFactura(data);
        });
    };

    useEffect(() => {
        let mounted = true;
        if (mounted) {
            init();
        }
        return () => mounted = false;
    }, [])

    /* VALIDACIÓN FORMULARIOS */
    const [errors, setErrors] = useState({});
    const handledChanged = ({ target }) => {
        const { value } = target;
        setLectura((value > 0) ? Math.abs(value) : '');
    }

    const registrarLectura = () => {
        const parametros = {
            numeroContrato: numeroContrato,
            servicioPublico: servicioPublico,
            lecturaContador: lectura,
        }
        let error = validateLectura(lectura);
        setErrors(error);
        if (!Object.keys(error).length) {
            setOpenLectura(CERRAR_MODAL)
            setOpenPrimerRegistro(CERRAR_MODAL)
            ServiciosLecturas.addLecturaManual(parametros, ({ data, status }) => {
                if (data.code == HttpStatus.NO_CONTENT) {
                    addToast(data.message, { appearance: 'info', autoDismiss: true });
                } else {
                    addToast('Nueva lectura añadida correctamente, consumo actualizado', { appearance: 'success', autoDismiss: true });
                }
                funcionDetalle && funcionDetalle();
                init();
            }, (error) => {
                if (error.response) {
                    const { status, data: { message } } = error.response;
                    if (status === HttpStatus.PRECONDITION_FAILED) {
                        addToast(`El registro del contador no puede ser menor o igual al actual (lectura actual: ${CpUtils.formatoLectura(message)})`, { appearance: 'warning' });
                        setLectura(message);
                    } else {
                        addToast('oh no :(, no eres tú somos nosotros, algo a ido mal', { appearance: 'error' });
                    }
                } else {
                    addToast('oh no :(, no eres tú somos nosotros, algo a ido mal', { appearance: 'error' });
                }
            })
        }
    }

    const registrarLecturaInicial = () => {
        const parametros = {
            numeroContrato: numeroContrato,
            servicioPublico: servicioPublico,
            lecturaContador: lectura,
        }
        let error = validateLecturaInicial(lectura);
        setErrors(error);
        if (!Object.keys(error).length) {
            setOpenLectura(CERRAR_MODAL)
            setOpenPrimerRegistro(CERRAR_MODAL)
            ServiciosLecturas.agregarLecturaFactura(parametros, (response) => {
                addToast('Primer registro de factura añadido correctamente.', { appearance: 'success', autoDismiss: true });
                if (funcionDetalle) {
                    funcionDetalle()
                }
            });
        }
    }



    return (
        <>
            <Modal
                closeIcon
                dimmer='blurring'
                open={openLectura && !isLecturaFactura}
                onClose={() => setOpenLectura(CERRAR_MODAL)}
                className="modal__registrar-lectura-container"
            >
                <Modal.Header className="modal__registrar-lectura-header">Lectura del contador ({servicioPublico.principal})</Modal.Header>
                <Modal.Content className="modal__registrar-lectura-container">
                    <Form>
                        <Form.Field>
                            <label htmlFor='lectura'>Lectura actual del contador público:</label>
                            <Input className="input-contador" type="number" name="lectura" id='lectura' placeholder="0190201" value={(lectura.length > 6) ? lectura.substring(0, 6) : lectura}
                                onChange={handledChanged}
                            />
                            {errors.lectura && (<div className="ui pointing red basic label">{errors.lectura}</div>)}
                        </Form.Field>
                    </Form>
                </Modal.Content>
                <Modal.Actions className="modal__registrar-lectura-container">
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
                onClose={() => {
                    setOpenLectura(CERRAR_MODAL)
                }}
                open={(openLectura && isLecturaFactura)}
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
                    <Button basic color='red' inverted onClick={() => setOpenLectura(CERRAR_MODAL)}>
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
                className="modal__registrar-lectura-container"
            >
                <Header className="modal__registrar-lectura-header" icon='file alternate' content={`Primera lectura del mes (${servicioPublico.principal})`} />
                <Modal.Content className="modal__registrar-lectura-container">
                    <Form>
                        <Form.Field>
                            <label htmlFor='lecturaInicial' style={{ fontSize: 'medium' }}>Lectura actual en la factura de servicios públicos:</label>
                            <Input type="number" name="lecturaInicial" id='lecturaInicial' placeholder="0190201"
                                onChange={handledChanged} />
                            {errors.lecturaInicial && (<div className="ui pointing red basic label">{errors.lecturaInicial}</div>)}
                        </Form.Field>
                    </Form>
                </Modal.Content>
                <Modal.Actions className="modal__registrar-lectura-container">
                    <Button color='red' onClick={() => setOpenPrimerRegistro(CERRAR_MODAL)}>
                        <Icon name='remove' /> Cancelar
                    </Button>
                    <Button color='green' onClick={registrarLecturaInicial}>
                        <Icon name='checkmark' /> Registrar
                    </Button>
                </Modal.Actions>
            </Modal>
        </>
    )
}

export default ModalRegistrarLecturaManual;