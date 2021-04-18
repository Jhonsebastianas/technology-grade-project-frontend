import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Layout from '@components/layouts/LayoutPrivado'
import { Button, Container, Grid, Icon } from 'semantic-ui-react'
import ListaHogares from '@components/hooks/ListaHogares'
import ModalRegistroLectura from '@components/forms/lecturas/ModalRegistrarLecturaManual'
import ServiciosHogares from '@services/servicios.hogares'
import loginUtils from '@utils/login.utils'

const CERRAR_MODAL = false;
const ABRIR_MODAL = true;

const Home = () => {

    // Declaración de estado
    const [cantidadHogares, setCantidadHogares] = useState(0)
    const [hasHogares, setHasHogares] = useState(true)
    const [listaHogares, setListaHogares] = useState([])
    const [hogarSeleccionado, setHogarSeleccionado] = useState({})
    const [servicioPublicoSeleccionado, setServicioPublicoSeleccionado] = useState({
        servicioPublico: {
            principal: ''
        }
    })
    const [mostrarHogares, setMostrarHogares] = useState(false)
    const [cargandoHogares, setCargandoHogares] = useState(false)
    const [openLectura, setOpenLectura] = useState(CERRAR_MODAL)

    const router = useRouter()

    const goToAddHome = () => {
        router.push("/registrar/hogar");
    }

    const handleHogarSeleccionado = (index, servicio) => {
        setHogarSeleccionado({ ...listaHogares[index] })
        setServicioPublicoSeleccionado(servicio)
        setOpenLectura(ABRIR_MODAL)
    }

    const handleClickMostrarHogares = () => {
        if (listaHogares.length < 1) {
            setCargandoHogares(true)
            ServiciosHogares.getHogaresAndLecturas(loginUtils.getUsernameUser(), ({ data }) => {
                if (data) {
                    setListaHogares(data)
                    setCantidadHogares(data.length)
                    setMostrarHogares(true)
                }
                setCargandoHogares(false)
            }, (error) => {
                setCargandoHogares(false)
                setMostrarHogares(false)
            });
        } else {
            setListaHogares([])
            setMostrarHogares(false)
        }
    }


    useEffect(() => {
        let mounted = true;
        console.log(mounted)
        if (mounted) {
            ServiciosHogares.getCantidadHogaresByUsername(loginUtils.getUsernameUser(), ({ data }) => {
                if (data) {
                    setCantidadHogares(data);
                } else {
                    setHasHogares(false)
                }
            }, (error) => { });
        }
        return () => mounted = false;
    }, [])

    return (
        <Layout>
            <div>
                <Container>
                    <h1>Resumen consumo de servicios públicos</h1>
                    <p>En esta sección encontrarás un resumen de tus gastos</p>
                    <ListaHogares
                        goToAddHome={goToAddHome}
                        cantidadHogares={cantidadHogares}
                        setCantidadHogares={setCantidadHogares}
                        listaHogares={listaHogares}
                        cargandoHogares={cargandoHogares}
                        mostrarHogares={mostrarHogares}
                        handleClickMostrarHogares={handleClickMostrarHogares}
                        handleHogarSeleccionado={handleHogarSeleccionado}
                        hasHogares={hasHogares}
                    />
                    <br></br>
                    {hasHogares
                        &&
                        <Button animated basic color='green' onClick={goToAddHome}>
                            <Button.Content visible><Icon name="home" /> Agregar un hogar [+]</Button.Content>
                            <Button.Content hidden>
                                <Icon name='arrow right' />
                            </Button.Content>
                        </Button>
                        ||
                        ''
                    }
                    <Grid.Column width={12}>
                        {/* <RegistroManual servicio='agua' /> */}
                    </Grid.Column>
                    <ModalRegistroLectura
                        hogar={hogarSeleccionado}
                        servicioPublico={servicioPublicoSeleccionado}
                        openLectura={openLectura}
                        setOpenLectura={setOpenLectura}
                        positive
                    >
                        consumo
                    </ModalRegistroLectura>
                    <br></br>
                </Container>
            </div>
        </Layout>
    )
}

export default Home