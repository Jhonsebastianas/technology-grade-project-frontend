import React from 'react'
import Layout from '@components/layouts/LayoutPrivado'
import { Container } from 'semantic-ui-react'
import Formulario from '@components/forms/hogar/RegistrarHogarContainer'

const RegistroHogar = () => {
    return (
        <Layout>
            <Container>
                <h2>Agregar un nuevo hogar:</h2>
                <Formulario />
            </Container>
        </Layout>
    )
}

export default RegistroHogar