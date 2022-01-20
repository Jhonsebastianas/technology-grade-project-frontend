import React, { useEffect, useState } from "react";
import loginUtils from "@utils/login.utils";
import ServiciosHogares from "@services/servicios.hogares";
import { useRouter } from "next/router";
import PerfilDetails from "@components/sections/perfil/PerfilDetails";
import { Fragment } from "react";

import { useFormik } from "formik";
import * as Yup from "yup";
import { useToasts } from "react-toast-notifications";
import { Container } from "semantic-ui-react";

const Perfil = () => {
  const [visibilidadFormulario, setVisibilidadformulario] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [usuario, setUsuario] = useState({});
  const [hogarQueSeEditara, setHogarQueSeEditara] = useState({});
  const [listaHogares, setListaHogares] = useState([]);
  const [tipoDeAccion, setTipoDeAccion] = useState(false);

  const router = useRouter();

  const goToAddHome = () => {
    router.push("/registrar/hogar");
  };

  const formularioInformacionPersonal = () => {
    const formulario = visibilidadFormulario ? false : true;
    setVisibilidadformulario(formulario);
  };

  const consultarHogares = () => {
    ServiciosHogares.getHogaresByUsername(
      loginUtils.getUsernameUser(),
      ({ data }) => {
        setListaHogares(data);
        //setHogarQueSeEditara(data[0]);
      },
      (error) => { }
    );
  };

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      consultarHogares();
      const dataUser = {
        fullName: loginUtils.getFullName(),
      };
      setUsuario(dataUser);
    }
    return () => (mounted = false);
  }, []);

  const handleOpenModal = (e) => {
    console.log(listaHogares)
    setModalIsOpen(true);
  };

  const handleCloseModal = (e) => {
    formik.values.nombre = "";
    formik.values.numeroContrato = "";
    setModalIsOpen(false);
  };

  const handleHogarQueSeEditara = (hogar) => {
    formik.values.nombre = hogar.nombre;
    formik.values.numeroContrato = hogar.numero_contrato;

    const hogarPropiedadesEditadas = {
      activo: hogar.activo,
      estrato: hogar.estrato,
      hogarActual: hogar.hogar_actual,
      /*localidad:{
        idPais:hogar.localidad._idPais,
        codigo_divipola:hogar.localidad.codigo_divipola,
      },*/
      nombre: hogar.nombre,
      numeroContrato: hogar.numero_contrato,
      servicios: hogar.servicios.map((servicio) => servicio.principal),
      tipoHogar: hogar.tipo_hogar,
      numeroContratoAnterior: hogar.numero_contrato,
    };
    setHogarQueSeEditara(hogarPropiedadesEditadas);
  };

  const handleEliminarHogar = (hogar) => {
    //this.setState({loading:true, error:null});
    deleteHogarByNumeroContrato();
  };

  const handleEditHogar = (e) => {
    formik.submitForm();
  };

  /*LOGICA PARA LA INFORAMCION DE LA MODAL (COPIADA DE REGISTAR HOGAR)*/

  const validate = (values) => {
    const errors = {};
    console.log("---------VALUES------");
    console.log(values);
    if (values.hogarActual != true && values.hogarActual != false) {
      errors.hogarActual =
        "Seleccione si este hogar es en el que vive actualmente.";
    }
    if (!values.estrato) {
      errors.estrato = "Seleccione el estrato de la vivienda.";
    }
    if (!values.tipoHogar) {
      errors.tipoHogar = "Seleccione el tipo de hogar de la vivienda";
    }
    return errors;
  };

  const { addToast } = useToasts();
  //const router = useRouter()

  const [hogar, setHogar] = useState({});
  const [servicios, setServicios] = useState([]);
  const [errors, setErrors] = useState({});

  const handledChanged = ({ target }) => {
    const { name, value } = target;

    // console.log(`${name}: ${value}`);
    if (name === "hogarActual") {
      setHogarQueSeEditara({
        ...hogarQueSeEditara,
        [name]: value === "Si" ? true : false,
      });
    } else if (name === "nombreHogar") {
      formik.values.nombre = value;
    } else if (name === "numeroContrato") {
      formik.values.numeroContrato = value;
    } else {
      setHogarQueSeEditara({ ...hogarQueSeEditara, [name]: value });
    }
  };

  const handledServicio = (event) => {
    if (event.target.checked) {
      const serviciosExistentes = hogarQueSeEditara.servicios;
      serviciosExistentes.push(event.target.value);
      setHogarQueSeEditara({
        ...hogarQueSeEditara,
        servicios: serviciosExistentes,
      });
    } else {
      const serviciosRegistrar = hogarQueSeEditara.servicios.filter(
        (servicio) => servicio != event.target.value
      );
      setHogarQueSeEditara({
        ...hogarQueSeEditara,
        servicios: serviciosRegistrar,
      });
    }
  };

  const updateHogarByNumeroContratoHomeSchema = Yup.object().shape({
    nombre: Yup.string()
      .trim()
      .max(40, "Máximo 40 caracteres")
      .required("Este campo es obligatorio"),
    numeroContrato: Yup.string()
      .trim()
      .min(6, "Mínimo 6 números")
      .max(12, "Máximo 12 números")
      .matches(/^([0-9])*$/, "Solo números")
      .required("Este campo es obligatorio"),
  });

  const updateHogarByNumeroContrato = (values) => {
    const { nombre, numeroContrato } = values;
    console.log(listaHogares);
    const nuevoHogar = {
      ...hogarQueSeEditara,
      servicios: hogarQueSeEditara.servicios,
      nombre: nombre,
      numeroContrato: numeroContrato,
      username: loginUtils.getUsernameUser(),
    };
    const error = validate(nuevoHogar);
    setErrors(error);
    
    if (!Object.keys(error).length) {
      //nuevoHogar.hogarActual = hogar.hogarActual === "Si" ? true : false;
      const { ...hogarFiltrado } = nuevoHogar;
      ServiciosHogares.updateHogarByNumeroContrato(
        hogarFiltrado,
        () => {
          consultarHogares();
          setModalIsOpen(false);
          addToast("Hogar actualizado con exito", {
            appearance: "success",
            autoDismiss: true,
          });
        },
        (error) => {
          if (error.response) {
            const { status } = error.response;
            if (status === 409) {
              addToast("Hogar actualmente existente", { appearance: "info" });
            } else if (status === 422) {
              addToast("Valida la información, por favor", {
                appearance: "warning",
              });
            } else if (status === 500) {
              addToast("oh no :(, no eres tú somos nosotros, algo a ido mal", {
                appearance: "error",
              });
            }
          } else {
            addToast("oh no :(, no eres tú somos nosotros, algo a ido mal", {
              appearance: "error",
            });
          }
        }
      );
    }
  };

  const deleteHogarByNumeroContrato = () => {
    const nuevoHogar = {
      ...hogarQueSeEditara,
      activo: false,
      username: loginUtils.getUsernameUser(),
    };
    setModalIsOpen(false);
    console.log(nuevoHogar);

    //nuevoHogar.hogarActual = hogar.hogarActual === "Si" ? true : false;
    const { ...hogarFiltrado } = nuevoHogar;
    ServiciosHogares.updateHogarByNumeroContrato(
      hogarFiltrado,
      () => {
        consultarHogares();
        addToast("Hogar eliminado con exito", {
          appearance: "success",
          autoDismiss: true,
        });
      },
      (error) => {
        if (error.response) {
          const { status } = error.response;
          if (status === 409) {
            addToast("Hogar actualmente existente", { appearance: "info" });
          } else if (status === 422) {
            addToast("Valida la información, por favor", {
              appearance: "warning",
            });
          } else if (status === 500) {
            addToast("oh no :(, no eres tú somos nosotros, algo a ido mal", {
              appearance: "error",
            });
          }
        } else {
          addToast("oh no :(, no eres tú somos nosotros, algo a ido mal", {
            appearance: "error",
          });
        }
      }
    );
  };

  const formik = useFormik({
    initialValues: {},
    validationSchema: updateHogarByNumeroContratoHomeSchema,
    onSubmit: updateHogarByNumeroContrato,
  });

  const validarExistenciaServicio = (tipoServicio) => {
    if (hogarQueSeEditara.servicios.length < 1) {
      return false;
    } else {
      const existeServicio = hogarQueSeEditara.servicios.some(
        (servicio) => servicio === tipoServicio
      );
      if (existeServicio) {
        return true;
      }
    }
    return false;
  };

  return (
    <Container>
      <div id="modal"></div>
      <PerfilDetails
        handleCloseModal={handleCloseModal}
        handleOpenModal={handleOpenModal}
        modalIsOpen={modalIsOpen}
        handleEditHogar={handleEditHogar}
        listaHogares={listaHogares}
        goToAddHome={goToAddHome}
        fullName={usuario.fullName}
        formularioInformacionPersonal={formularioInformacionPersonal}
        visibilidadFormulario={visibilidadFormulario}
        hogarQueSeEditara={hogarQueSeEditara}
        handleHogarQueSeEditara={handleHogarQueSeEditara}
        handleEliminarHogar={handleEliminarHogar}
        formik={formik}
        handledChanged={handledChanged}
        errors={errors}
        handledServicio={handledServicio}
        validarExistenciaServicio={validarExistenciaServicio}
        /*setTipoDeAccion es una variable para identificar si se va a elemianr o editar*/
        tipoDeAccion={tipoDeAccion}
        setTipoDeAccion={setTipoDeAccion}
      />
    </Container>
  );
};

export default Perfil;
