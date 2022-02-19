import React, { useState } from "react";
import LayoutAdmin from "@components/layouts/LayoutAdmin";
import TarifasDetails from "@components/sections/tarifas/TarfiasDetails";
import DateUtils from "@utils/dates.util";
import serviciosTarifas from "@services/servicios.tarifas";
import serviciosPaises from "@services/servicios.paises";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useToasts } from "react-toast-notifications";

const Tarifas = () => {
  const { addToast } = useToasts();
  const mesActual = DateUtils.getMes();

  const [nuevaTarifa, setNuevaTarifa] = useState({
    estrato: "1",
    servicio: "",
    mes: mesActual,
  });
  const [tarifaExistente, setTarifaExistente] = useState({ otros_valores: [] });
  const [errors, setErrors] = useState({});
  const [validarExistenciaTarfia, setValidarExistenciaTarfia] = useState(null);
  const [localidad, setLocalidad] = useState({});
  const [mostrarValoresFijos, setMostrarValoresFijos] = useState(false);
  const [mostrarFormularioTarifa, setMostrarFormularioTarifa] = useState(false);
  const codigoCiudadDivipola = { codigoDivipola: "05001" };

  const opcionServicios = [
    { key: "acueducto", text: "Acueducto", value: "acueducto" },
    { key: "alcantarillado", text: "Alcantarillado", value: "alcantarillado" },
    { key: "energia", text: "Energia", value: "energia" },
    { key: "gas", text: "Gas", value: "gas" },
  ];

  const opcionMeses = [
    { key: "1", text: "Enero", value: "01" },
    { key: "2", text: "Febrero", value: "02" },
    { key: "3", text: "Marzo", value: "03" },
    { key: "4", text: "Abril", value: "04" },
    { key: "5", text: "Mayo", value: "05" },
    { key: "6", text: "Junio", value: "06" },
    { key: "7", text: "Julio", value: "07" },
    { key: "8", text: "Agosto", value: "08" },
    { key: "9", text: "Septiembre", value: "09" },
    { key: "10", text: "Octubre", value: "10" },
    { key: "11", text: "Noviembre", value: "11" },
    { key: "12", text: "Diciembre", value: "12" },
  ];

  const validarTarifaSchema = Yup.object().shape({
    limite_subsidiado: Yup.number().required("Este campo es obligatorio")
    .test(
      "Validar la cantidad de numeros enteros permitidos",
      "Máximo 9 numeros enteros",
      (number) =>  (parseInt(number).toString().length <= 9),
    )
    .test(
      "Validar la cantidad de decimales permitidos",
      "Máximo 5 números decimales",
      (number) => validarDecimales(number, 5),
    )
    .typeError('Solo números'),

    valor_consumo: Yup.number().required("Este campo es obligatorio")
    .test(
      "Validar la cantidad de numeros enteros permitidos",
      "Máximo 9 numeros enteros",
      (number) =>  (parseInt(number).toString().length <= 9),
    )
    .test(
      "Validar la cantidad de decimales permitidos",
      "Máximo 5 números decimales",
      (number) => validarDecimales(number, 5),
    )
    .typeError('Solo números'),
    valor_consumo_exceso: Yup.number().required("Este campo es obligatorio")
    .test(
      "Validar la cantidad de numeros enteros permitidos",
      "Máximo 9 numeros enteros",
      (number) =>  (parseInt(number).toString().length <= 9),
    )
    .test(
      "Validar la cantidad de decimales permitidos",
      "Máximo 5 números decimales",
      (number) => validarDecimales(number, 5),
    )
    .typeError('Solo números'),
    subsidio_gobierno: Yup.number().required("Este campo es obligatorio")
    .test(
      "Validar la cantidad de numeros enteros permitidos",
      "Máximo 9 numeros enteros",
      (number) =>  (parseInt(number).toString().length <= 9),
    )
    .test(
      "Validar la cantidad de decimales permitidos",
      "Máximo 5 números decimales",
      (number) => validarDecimales(number, 5),
    )
    .typeError('Solo números'),
    unidad_medida: Yup.string()
      
      .min(1, "Mínimo 1 número")
      .max(40, "Máximo 40 números")
      .required("Este campo es obligatorio"),
  });

  function validarDecimales(numero,cantidadDecimales){
    if(!numero){
      return true;
    }

    let numeroFinal = numero.toString().split(".")[1];

    if(!numeroFinal){
      return true;
    }
    
    return numeroFinal.length < (cantidadDecimales + 1);
  }

  const actualizarValoresFormik = (values) => {
    if (values) {
      formik.values.estrato = values.estrato;
      formik.values.limite_subsidiado = values.limite_subsidiado;
      formik.values.fecha_fin = values.fecha_fin;
      formik.values.fecha_inicio = values.fecha_inicio;
      formik.values.localidad = values.localidad;
      formik.values.otros_valores = values.otros_valores;
      formik.values.otros_valores_cantidad = values.otros_valores_cantidad;
      formik.values.otros_valores_sumatoria = values.otros_valores_sumatoria;
      formik.values.servicio_publico = values.servicio_publico;
      formik.values.subsidio_gobierno = values.subsidio_gobierno;
      formik.values.tarifa_activa = values.tarifa_activa;
      formik.values.unidad_medida = values.unidad_medida;
      formik.values.valor_consumo = values.valor_consumo;
      formik.values.valor_consumo_exceso = values.valor_consumo_exceso;
      formik.values.version_schema = values.version_schema;
      setMostrarValoresFijos(true)
      formik.setFieldTouched(formik.version_schema, true, true);
    } else {
      formik.values.estrato = "";
      formik.values.limite_subsidiado = "";
      formik.values.fecha_fin = "";
      formik.values.fecha_inicio = "";
      formik.values.localidad = "";
      formik.values.otros_valores = "";
      formik.values.otros_valores_cantidad = "";
      formik.values.otros_valores_sumatoria = "";
      formik.values.servicio_publico = "";
      formik.values.subsidio_gobierno = "";
      formik.values.tarifa_activa = "";
      formik.values.unidad_medida = "";
      formik.values.valor_consumo = "";
      formik.values.valor_consumo_exceso = "";
      formik.values.version_schema = "";
      setMostrarValoresFijos(false)
      formik.resetForm();
    }
  };

  const consultarCiudadByDivipola = (codigoDivipola) => {
    serviciosPaises.getCiudadByDivipola(
      codigoDivipola,
      ({ data }) => {
        setLocalidad(data);
      },
      (error) => {}
    );
  };

  const consultarTarifasByEstratoServicioMes = (nuevoValorTarifa) => {
    serviciosTarifas.getTarifaActualByEstratoServicioMes(
      nuevoValorTarifa,
      ({ data }) => {
        actualizarValoresFormik(data);
        setTarifaExistente(data);
        console.log("TARIFA EXISTENTES");
        console.log(tarifaExistente);
        if (data) {
          setValidarExistenciaTarfia(true);
        } else {
          setValidarExistenciaTarfia(false);
        }
        setMostrarFormularioTarifa(true)
      },
      (error) => {}
    );
  };

  const handledChangedEstratos = ({ target }) => {
    console.log(target);
    const { name, value } = target;
    const nuevoValorTarifa = { ...nuevaTarifa, [name]: value };
    setNuevaTarifa(nuevoValorTarifa);

    console.log(nuevaTarifa);

    if (nuevoValorTarifa.mes != "" && nuevoValorTarifa.servicio != "") {
      consultarTarifasByEstratoServicioMes(nuevoValorTarifa);
    }
  };

  const handledChangedServicios = (event, result) => {
    consultarCiudadByDivipola(codigoCiudadDivipola);
    const { value } = result;
    const nuevoValorTarifa = { ...nuevaTarifa, ["servicio"]: value };
    setNuevaTarifa(nuevoValorTarifa);

    if (nuevoValorTarifa.mes != "") {
      consultarTarifasByEstratoServicioMes(nuevoValorTarifa);
    }
  };

  const handledChangedMeses = (event, result) => {
    const { value } = result;
    const nuevoValorTarifa = { ...nuevaTarifa, ["mes"]: value };
    setNuevaTarifa(nuevoValorTarifa);

    if (nuevoValorTarifa.servicio != "") {
      consultarTarifasByEstratoServicioMes(nuevoValorTarifa);
    }
  };

  const handledChanged = (event, result) => {
    const { value, name } = result;
    const nuevoValorTarifa = { ...tarifaExistente, [name]: value };
    setTarifaExistente(nuevoValorTarifa);
  };

  /*REGISTARR TARIFA NUEVA*/
  const registerNuevaTarifa = () => {
    const fechaInicio = DateUtils.getDateWithFirstDayByMounth(nuevaTarifa.mes);
    const fechaFin = DateUtils.getDateWithLastDayByMounth(nuevaTarifa.mes);
    
    console.log("nuevaTarif");
    console.log(nuevaTarifa);

    const tarifaParaRegistrar = {
      estrato: nuevaTarifa.estrato,
      fecha_fin: fechaFin,
      fecha_inicio: fechaInicio,
      limite_subsidiado: parseFloat(formik.values.limite_subsidiado), // > 13 m^3 (EPM)
      localidad: {
        id_pais: localidad.idLocalidad,
        codigo_divipola_ciudad: localidad.ciudad.codigo_divipola,
      },
      otros_valores: tarifaExistente.otros_valores
        ? tarifaExistente.otros_valores
        : [],
      otros_valores_cantidad: 0,
      otros_valores_sumatoria: 0,
      //ciudad: tarifaExistente.ciudad,
      servicio_publico: {
        principal: nuevaTarifa.servicio == "energia" ? "energia" : (nuevaTarifa.servicio == "gas" ? "gas" : "agua"),
        secundario: nuevaTarifa.servicio == "energia" ? "nn" : (nuevaTarifa.servicio == "gas" ? "nn" : nuevaTarifa.servicio),
      },
      subsidio_gobierno: formik.values.subsidio_gobierno,
      tarifa_activa: false,
      unidad_medida: formik.values.unidad_medida, // Liters or M^3
      valor_consumo: parseFloat(formik.values.valor_consumo),
      valor_consumo_exceso: parseFloat(formik.values.valor_consumo_exceso),
    };

    formik.values.estrato = tarifaParaRegistrar.estrato;
    formik.values.fecha_fin= tarifaParaRegistrar.fecha_fin;
    formik.values.fecha_inicio = tarifaParaRegistrar.fecha_inicio;
    formik.values.limite_subsidiado = tarifaParaRegistrar.limite_subsidiado;
    formik.values.localidad = tarifaParaRegistrar.localidad;
    formik.values.otros_valores = tarifaParaRegistrar.otros_valores;
    formik.values.otros_valores_cantidad = tarifaParaRegistrar.otros_valores_cantidad;
    formik.values.otros_valores_sumatoria = tarifaParaRegistrar.otros_valores_sumatoria;
    formik.values.servicio_publico = tarifaParaRegistrar.servicio_publico;
    formik.values.subsidio_gobierno = tarifaParaRegistrar.subsidio_gobierno;
    formik.values.tarifa_activa = tarifaParaRegistrar.tarifa_activa;
    formik.values.unidad_medida = tarifaParaRegistrar.unidad_medida;
    formik.values.valor_consumo = tarifaParaRegistrar.valor_consumo;
    formik.values.valor_consumo_exceso = tarifaParaRegistrar.valor_consumo_exceso;


    console.log("NOS TRAJOO", formik.values);
    //const error = validateTarifa(tarifaParaRegistrar);
    //setErrors(error);
    setTarifaExistente(tarifaParaRegistrar);
    serviciosTarifas.crearTarifa(
      tarifaParaRegistrar,
      () => {
        addToast("Tarifa registrada con exito", {
          appearance: "success",
          autoDismiss: true,
        });
        setValidarExistenciaTarfia(true);
        setMostrarValoresFijos(true);
        //router.push("/home");
      },
      (error) => {
        if (error.response) {
          const { status } = error.response;
          if (status === 409) {
            addToast("Tarifa actualmente existente", { appearance: "info" });
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

  const updateTarifa = () =>{
    if(JSON.stringify(formik.errors)=='{}'){
      const tarifaParaRegistrar = {
        estrato: formik.values.estrato,
        fecha_fin: formik.values.fecha_fin,
        fecha_inicio: formik.values.fecha_inicio,
        limite_subsidiado: parseFloat(formik.values.limite_subsidiado), // > 13 m^3 (EPM)
        localidad: formik.values.localidad,
        otros_valores: formik.values.otros_valores,
        otros_valores_cantidad: formik.values.otros_valores_cantidad,
        otros_valores_sumatoria: formik.values.otros_valores_sumatoria,
        servicio_publico: formik.values.servicio_publico,
        subsidio_gobierno: parseFloat(formik.values.subsidio_gobierno),
        tarifa_activa: formik.values.tarifa_activa,
        unidad_medida: formik.values.unidad_medida, // Liters or M^3
        valor_consumo: parseFloat(formik.values.valor_consumo),
        valor_consumo_exceso: parseFloat(formik.values.valor_consumo_exceso),
      };

      serviciosTarifas.updateTarifa(
        tarifaParaRegistrar,
        () => {
          addToast("Tarifa actualizada con exito", {
            appearance: "success",
            autoDismiss: true,
          });
          //router.push("/home");
        },
        (error) => {
          if (error.response) {
            const { status } = error.response;
            if (status === 409) {
              addToast("No fue posible actualizar la tarifa", { appearance: "info" });
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
  }

  const formik = useFormik({
    initialValues: {
      limite_subsidiado: "",
      valor_consumo: "",
      valor_consumo_exceso: "",
      subsidio_gobierno: "",
      unidad_medida: "",
    },
    validationSchema: validarTarifaSchema,
    onSubmit: registerNuevaTarifa,
  });

  const handleClickRegistrarTarifa = () => {
    registerNuevaTarifa();
  };

  return (
    <LayoutAdmin>
      <div id="modal"></div>
      <TarifasDetails
        opcionServicios={opcionServicios}
        opcionMeses={opcionMeses}
        handledChangedEstratos={handledChangedEstratos}
        handledChangedServicios={handledChangedServicios}
        handledChangedMeses={handledChangedMeses}
        valueCheckedEstrato={nuevaTarifa.estrato}
        valueSelectServicios={nuevaTarifa.servicio}
        valueSelectMeses={nuevaTarifa.mes}
        tarifaExistente={tarifaExistente}
        setTarifaExistente={setTarifaExistente}
        handledChanged={handledChanged}
        validarExistenciaTarfia={validarExistenciaTarfia}
        handleClickRegistrarTarifa={handleClickRegistrarTarifa}
        formik={formik}
        updateTarifa={updateTarifa}
        mostrarValoresFijos = {mostrarValoresFijos}
        mostrarFormularioTarifa  = {mostrarFormularioTarifa }
      />
    </LayoutAdmin>
  );
};

export default Tarifas;
