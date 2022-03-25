import React from 'react'

import { Form, Button, Container } from 'semantic-ui-react';

import Link from 'next/link';

const CrearDatoImpornateDetails = (props) => {

    const { formik, handleOnChange, handleOnAdd, handleOnRemove, Enlace, enlaces,  tituloPagina} = props

    return (
        <Container>
            <Form onSubmit={formik.handleSubmit} >
                <h2 className='crearDato-title'>{tituloPagina} dato</h2>

                <Form.Input label='Título' htmlFor='titulo' type="text" name="titulo" id='titulo' placeholder="Título"
                        {...formik.getFieldProps('titulo')}
                    />
                    {formik.touched.titulo && formik.errors.titulo ? (<div className="ui pointing red basic label">{formik.errors.titulo}</div>) : null}

                <Form.Field className="crearDato-textAreaDato">
                    <label htmlFor='descripcion'>Descripción</label>
                    <Form.TextArea id='descripcion' placeholder="Descripción tip"
                        {...formik.getFieldProps('descripcion')}
                    />
                    {formik.touched.descripcion && formik.errors.descripcion ? (<div className="ui pointing red basic label">{formik.errors.descripcion}</div>) : null}
                </Form.Field>
                <Form.Group widths='equal'>
                <Form.Input label='Autor' htmlFor='autor' type="text" name="autor" id='autor' placeholder=""
                    {...formik.getFieldProps('autor')}
                />
                {formik.touched.autor && formik.errors.autor ? (<div className="ui pointing red basic label">{formik.errors.autor}</div>) : null}
                
                    <Form.Input label='Tipo de Dato' htmlFor='tipoDato' type="text" name="tipoDato" id='tipoDato' placeholder=""
                        {...formik.getFieldProps('tipoDato')}
                    />
                    {formik.touched.tipoDato && formik.errors.tipoDato ? (<div className="ui pointing red basic label">{formik.errors.tipoDato}</div>) : null}
                </Form.Group>
               

                <p className='infodato'>Da clic para agregar las fuentes de donde se extrajo la información </p>

                <div onClick={handleOnAdd} className='crearDato-botonEnlace'>Agregar fuente</div>
                {enlaces !== undefined && enlaces.map((enlace, index) => (
                    <Enlace
                        {...enlace}
                        onChange={(name, value) => handleOnChange(index, name, value)}
                        onRemove={() => handleOnRemove(index)}
                        key={index}
                        formik={formik}
                    />
                ))}
                <Button type='submit'disabled={!formik.isValid} className="crearDato-botonEnviarDato">
                    Guardar dato
                </Button>
                <Link href="/datosimportantes">
                    <Button className='crearDato-botonRegresar'>Cancelar</Button>
                </Link>

            </Form>
        </Container>
    );
}

export default CrearDatoImpornateDetails
