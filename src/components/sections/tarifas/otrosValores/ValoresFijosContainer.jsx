import React, { useState } from 'react';
import ValoresFijosDetails from './ValoresFijosDetails';
import { useFormik } from 'formik'
import * as Yup from 'yup'
import serviciosTarifas from '@services/servicios.tarifas'
import { useToasts } from "react-toast-notifications";


const ValoresFijosContainer = (props) =>{
    const { addToast } = useToasts();
    const {tarifaExistente,setTarifaExistente,tarifaEjemplo} = props;
    
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [valorQueSeEditara, setValorQueSeEditara] = useState({});
    const [tipoDeAccionModal, setTipoDeAccionModal] = useState(false);
    const [otrosValores, setOtrosValores] = useState({});

    const validarOtrosValores = Yup.object().shape({
        nombre: Yup.string().trim()
        .min(1, 'Mínimo 1 caracter')
        .max(40,'Máximo 40 caracteres')
        .required('Este campo es obligatorio'),
        descripcion: Yup.string().trim()
        .min(1, 'Mínimo 1 caracter')
        .max(500,'Máximo 500 caracteres')
        .required('Este campo es obligatorio'),
        valor: Yup.number().required("Este campo es obligatorio")
        .test(
          "Validar la cantidad de numeros enteros permitidos",
          "Máximo 9 numeros enteros",
          (number) =>  (parseInt(number).toString().length <= 9),
        )
        .test(
          "Validar la cantidad de decimales permitidos",
          "Máximo 5 números decimales",
          (number) => Number.isInteger(number * (10 ** 5)),
        )
        .typeError('Solo números'),
      });
  

      const registarOtrosValores = () =>{
        console.log("tarifaEjemplo",tarifaEjemplo);
        tarifaExistente = tarifaEjemplo.values;
        let allValores = []
        console.log("ENTRAMOS 1", tarifaExistente);
        if(tarifaExistente?.otros_valores){
          allValores = [...tarifaExistente.otros_valores]
          console.log("ENTRAMOS 2",allValores);
        }
        console.log("ENTRAMOS 3",tarifaExistente);
        const otroValor = {
            nombre: formik.values.nombre,
            descripcion: formik.values.descripcion,
            valor: formik.values.valor,
        }

        allValores.push(otroValor)
        console.log("allvalores final: ",allValores);

        const otrosValoresCantidad = allValores.length;
        const otrosValoresSumatoria =  allValores.reduce((valorTotal,otroValor) => valorTotal += parseInt(otroValor.valor),0);

        const tarifaParaActualizar = {
          ...tarifaExistente,
          otros_valores:allValores,
          otros_valores_cantidad:parseInt(otrosValoresCantidad),
          otros_valores_sumatoria:parseFloat(otrosValoresSumatoria),
        };

        tarifaEjemplo.values.otros_valores_cantidad = otrosValoresCantidad;
        tarifaEjemplo.values.otros_valores_sumatoria = otrosValoresSumatoria;

        setTarifaExistente({
          ...tarifaExistente,
          otros_valores:allValores,
          otros_valores_cantidad:parseInt(otrosValoresCantidad),
          otros_valores_sumatoria:parseFloat(otrosValoresSumatoria),
        })

        serviciosTarifas.updateTarifa(
          tarifaParaActualizar,
          () => {
            formik.values.descripcion = "";
            formik.values.valor = "";
            formik.values.nombre = "";
            console.log("TARIFAAAAAA");
            console.log(tarifaEjemplo);
            tarifaEjemplo.values.otros_valores = allValores;
            console.log(tarifaEjemplo);
            formik.resetForm();
            addToast("Valor fijo registrado con éxito", {
              appearance: "success",
              autoDismiss: true,
            });
          },
          (error) => {
            if (error.response) {
              const { status } = error.response;
              if (status === 409) {
                addToast("No fue posible registrar el valor", { appearance: "info" });
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

      const handleOpenModal = (e) => {
        setModalIsOpen(true);
      };
    
      const handleCloseModal = (e) => {
        formik.values.descripcion = "";
        formik.values.valor = "";
        formik.values.nombre = "";
        setValorQueSeEditara({})
        setModalIsOpen(false);
      };

      const handleOtroValorQueSeEditara = (otroValor) =>{
        formik.values.descripcion = otroValor.descripcion;
        formik.values.valor = otroValor.valor;
        formik.values.nombre = otroValor.nombre;
      }

      const handleDeleteOtrosValores = () => {
        if(JSON.stringify(formik.errors)=='{}'){
          let allValores = [...tarifaEjemplo.values.otros_valores]

          const posicionValorfijoModificar = allValores.indexOf(valorQueSeEditara)
          const otroValorEliminar = allValores[posicionValorfijoModificar]

          allValores = allValores.filter(otroValor => otroValor != otroValorEliminar)

          let otrosValoresSumatoria = 0;
          allValores.forEach(otroValor => otrosValoresSumatoria += parseFloat(otroValor.valor))

          guardarModificacionOtrosValores(allValores, otrosValoresSumatoria)
        }
      }

      const handleEditOtrosValores  = () =>{
        if(JSON.stringify(formik.errors)=='{}'){

          let allValores = [...tarifaEjemplo.values.otros_valores]

          const posicionValorfijoModificar = allValores.indexOf(valorQueSeEditara)

          const otroValorModificado = {
            nombre: formik.values.nombre,
            valor: parseFloat(formik.values.valor),
            descripcion: formik.values.descripcion,
          }

          allValores[posicionValorfijoModificar] = otroValorModificado
          console.log("VALORES QUEDARON: ", allValores);
          let otrosValoresSumatoria = 0;

          allValores.forEach(otroValor => otrosValoresSumatoria += parseFloat(otroValor.valor))

          guardarModificacionOtrosValores(allValores, otrosValoresSumatoria)

        }
      }

      const guardarModificacionOtrosValores  = (allValores, otrosValoresSumatoria) =>{
        
          tarifaEjemplo.values.otros_valores = allValores;
          tarifaExistente = tarifaEjemplo.values; 

          const tarifaParaActualizar = {
            ...tarifaExistente,
            otros_valores:allValores,
            otros_valores_sumatoria:parseFloat(otrosValoresSumatoria).toFixed(3),
            otros_valores_cantidad:tarifaEjemplo.values.otros_valores.length,
          };

          tarifaEjemplo.values.otros_valores_cantidad = tarifaEjemplo.values.otros_valores.length;
          tarifaEjemplo.values.otros_valores_sumatoria = parseFloat(otrosValoresSumatoria).toFixed(3);

          setTarifaExistente({
            ...tarifaExistente,
            otros_valores:allValores,
            otros_valores_sumatoria:parseFloat(otrosValoresSumatoria).toFixed(3),
            otros_valores_cantidad:tarifaEjemplo.values.otros_valores.length,
          })

          serviciosTarifas.updateTarifa(
            tarifaParaActualizar,
            () => {
              addToast("Valor fijo actualizado con éxito", {
                appearance: "success",
                autoDismiss: true,
              });
                handleCloseModal()
                formik.resetForm();
            },
            (error) => {
              if (error.response) {
                const { status } = error.response;
                if (status === 409) {
                  addToast("No fue posible actualizar el valor fijo", { appearance: "info" });
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

      const formik = useFormik({
        initialValues:{
            nombre:'',
            valor:'',
            descripcion:'',
        },
        validationSchema: validarOtrosValores,
        onSubmit:registarOtrosValores,
      });

    return(
        <ValoresFijosDetails 
        tarifaExistente = {tarifaExistente}
        formik = {formik}
        handleCloseModal = {handleCloseModal}
        handleOpenModal = {handleOpenModal}
        modalIsOpen = {modalIsOpen}
        setTipoDeAccionModal= {setTipoDeAccionModal}
        tipoDeAccionModal = {tipoDeAccionModal}
        valorQueSeEditara = {valorQueSeEditara}
        setValorQueSeEditara = {setValorQueSeEditara}
        handleOtroValorQueSeEditara = {handleOtroValorQueSeEditara}
        handleEditOtrosValores = {handleEditOtrosValores}
        handleDeleteOtrosValores = {handleDeleteOtrosValores}
        />
        
    
    
    );
}

export default ValoresFijosContainer;