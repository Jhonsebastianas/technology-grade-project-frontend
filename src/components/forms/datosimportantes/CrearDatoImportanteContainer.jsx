import React, { useState } from 'react'

import { useRouter } from 'next/router'
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { useToasts } from 'react-toast-notifications';
import ServiciosDatosImportantes from '@services/servicios.datos_importantes'

import Enlace from '@components/forms/datosimportantes/Enlace'
import CrearDatoImportanteDetails from '@components/forms/datosimportantes/CrearDatoImportanteDetails'

const defaultState = {
    nombrePagina: "",
    url: "",
};

const CrearDatoImportanteContainer = ({ metodo, formDato, tituloPagina }) => {
    const [enlaces, setEnlaces] = useState((metodo === 'agregarNuevoDato') ? [defaultState] : ValidarEnlaces());
    const { addToast } = useToasts();
    const router = useRouter();

    function ValidarEnlaces() {
        let vinculos = [];
        if (formDato.fuentes.enlace && formDato.fuentes.enlace.length > 0) {
            formDato.fuentes.enlace.map(enlace => {
                vinculos.push(enlace)
            });
            return vinculos
        }
        return [defaultState]
    }

    const handleOnChange = (index, name, value) => {
        const copyEnlaces = [...enlaces];
        copyEnlaces[index] = {
            ...copyEnlaces[index],
            [name]: value
        };
        setEnlaces(copyEnlaces);
    };

    const handleOnAdd = () => {
        setEnlaces(enlaces.concat(defaultState));
    };

    const handleOnRemove = index => {
        const copyEnlaces = [...enlaces];
        copyEnlaces.splice(index, 1);
        setEnlaces(copyEnlaces);
    };

    const datosSchema = Yup.object().shape({
        autor: Yup.string().trim()
            .min(1, 'Mínimo 1 caracter')
            .max(40, 'Máximo 40 caracteres')
            .required('Este campo es obligatorio'),
        descripcion: Yup.string().trim()
            .max(300, 'Máximo 300 caracteres')
            .required('Este campo es obligatorio'),
        tipoDato: Yup.string().trim()
            .min(3, 'Mínimo 3 caracteres')
            .max(20, 'Máximo 20 caracteres')
            .required('Este campo es obligatorio'),
        titulo: Yup.string().trim()
            .max(90, 'Máximo 90 caracteres')
            .required('Este campo es obligatorio'),
    });

    const agregarNuevoDato = (values) => {
        const { autor, descripcion, tipoDato, titulo } = values
        const fuentes = {
            'cantidad': enlaces.length,
            'enlaces': enlaces
        }
        const nuevoDato = {
            'autor': autor,
            'descripcion': descripcion,
            'tipoDato': tipoDato,
            'titulo': titulo,
            'fuentes': fuentes
        };
        ServiciosDatosImportantes.nuevoDato(nuevoDato, ({ data }) => {
            addToast('¡Dato creado con éxito!', { appearance: 'success', autoDismiss: true });
            router.push("/datosimportantes");
        }, (error) => {
            if (error.response) {
                addToast('oh no :(, no eres tú somos nosotros, algo a ido mal', { appearance: 'error', autoDismiss: true });
            }
        });
    }

    const actualizarDato = (values) => {
        const { autor, descripcion, tipoDato, titulo } = values
        const fuentes = {
            'cantidad': enlaces.length,
            'enlaces': enlaces
        }
        const actualizarDato = {
            'autor': autor,
            'descripcion': descripcion,
            'tipoDato': tipoDato,
            'titulo': titulo,
            'fuentes': fuentes,
            'datoId' : formDato._id,
        };
        ServiciosDatosImportantes.updateDato(actualizarDato, ({ data }) => {
            addToast('¡Dato actualizado con éxito!', { appearance: 'success', autoDismiss: true });
            router.push("/datosimportantes");
        }, (error) => {
            if (error.response) {
                addToast('oh no :(, no eres tú somos nosotros, algo a ido mal', { appearance: 'error', autoDismiss: true });
            }
        });
    }

    const formik = useFormik({
        initialValues: {
            autor: formDato.autor,
            descripcion: formDato.descripcion,
            tipoDato: formDato.tipoDato,
            titulo: formDato.titulo,
        },
        validationSchema: datosSchema,
        onSubmit: (metodo === 'agregarNuevoDato') ? agregarNuevoDato : actualizarDato,
    });

    return (
        <CrearDatoImportanteDetails
            formik={formik}
            handleOnChange={handleOnChange}
            handleOnAdd={handleOnAdd}
            handleOnRemove={handleOnRemove}
            Enlace={Enlace}
            enlaces={enlaces}
            router={router}
            tituloPagina={tituloPagina}
        />
    )

}

export default CrearDatoImportanteContainer

