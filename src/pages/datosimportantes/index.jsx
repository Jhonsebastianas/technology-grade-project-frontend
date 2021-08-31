import React, { useState, useEffect, useMemo } from 'react'

import { Grid, Input, Button, Container } from 'semantic-ui-react';

import ReactPaginate from 'react-paginate';

import Link from 'next/link';

import Layout from '@components/layouts/LayoutPrivado';
import DatosImportantesList from '@components/datosimportantes/DatosImportantesList';

import ServiciosDatosImportantes from '@services/servicios.datos_importantes';

// Barra de busqueda
function useSearchDato(datos) {
    const [query, setQuery] = useState('');
    const [filteredDatos, setFilteredDatos] = useState(datos);

    useMemo(() => {
        const result = datos.filter(dato => {
            return `${dato.titulo}`
                .toLowerCase()
                .includes(query.toLowerCase());
        });
        setFilteredDatos(result);
    }, [datos, query]);

    return { query, setQuery, filteredDatos };
}

const DatosImportantes = () => {

    const [datos, setDatos] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [pageNumber, setPageNumber] = useState(0);

    const { query, setQuery, filteredDatos } = useSearchDato(datos);

    const datosPerPage = 5;
    const pagesVisited = pageNumber * datosPerPage;

    // Obtener datos actuales
    const currentDatos = (!query) ? filteredDatos.slice(pagesVisited, pagesVisited + datosPerPage) : filteredDatos;

    // Cantidad de páginas
    const pageCount = Math.ceil(datos.length / datosPerPage);

    // Cambiar de página
    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };

    const obtenerDatos = () => {
        ServiciosDatosImportantes.getDatosActuales(({ data }) => {
            setDatos(data);
            setCargando(false)
        }, (error) => { });
    }

    useEffect(() => {
        obtenerDatos();
    }, []);

    return (
        <Layout>
            <Grid stackable className="main-datoImportante-container">
                <Grid.Row >
                    <Grid.Column width={16} className='datoImportante-opciones'>
                        <Container>
                            <Input
                                icon='search'
                                type="text"
                                placeholder='Buscar dato...'
                                className="datoImportante-opciones--barraBusqueda"
                                value={query}
                                onChange={(e) => {
                                    setQuery(e.target.value)
                                }} />
                            <Link href="/datosimportantes/nuevo-dato">
                                <Button className="datoImportante-opciones--botonNuevoDato">Nuevo Dato</Button>
                            </Link>
                        </Container>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={16}>
                        <DatosImportantesList
                            datos={currentDatos}
                            obtenerDatos={obtenerDatos}
                            cargando={cargando}
                        />
                    </Grid.Column>
                    <Grid.Column width={16}>
                        <ReactPaginate
                            previousLabel={'⟨'}
                            nextLabel={'⟩'}
                            pageCount={pageCount}
                            onPageChange={changePage}
                            containerClassName={'paginationBttns'}
                            previousClassName={'previousBttns'}
                            nextLinkClassName={'nextBttns'}
                            disabledClassName={'paginationDisabled'}
                            activeClassName={'paginationActive'}
                        />
                    </Grid.Column>
                </Grid.Row>

            </Grid>
        </Layout>
    )
}

export default DatosImportantes