import React, { useState } from 'react';
import ValoresFijosDetails from './ValoresFijosDetails';
import { useFormik } from 'formik'
import * as Yup from 'yup'
import serviciosTarifas from '@services/servicios.tarifas'
import { useToasts } from "react-toast-notifications";


const ValoresFijosContainer = (props) =>{
    const { addToast } = useToasts();
    const {tarifaExistente,setTarifaExistente} = props;
    setInterval(() => {
      console.log("TOMAMOS ---- : " , {...tarifaExistente});
    }, 2000);
    
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
        valor: Yup.string().trim()
        .min(1, 'Mínimo 1 caracter')
        .max(10, 'Máximo 10 números')
        .required('Este campo es obligatorio')
      });
  

      const registarOtrosValores = () =>{
        let allValores = []
        console.log("ENTRAMOS 1", tarifaExistente);
        if(tarifaExistente?.otros_valores){
          allValores = [...tarifaExistente.otros_valores]
          const {} = tarifaExistente
          console.log("ENTRAMOS 2",tarifaExistente);
        }
        console.log("ENTRAMOS 3",tarifaExistente);
        const otroValor = {
            nombre: formik.values.nombre,
            descripcion: formik.values.descripcion,
            valor: formik.values.valor,
        }

        allValores.push(otroValor)

        const otrosValoresCantidad = parseInt(tarifaExistente.otros_valores_cantidad) + 1;
        const otrosValoresSumatoria =  parseFloat(tarifaExistente.otros_valores_sumatoria) + parseFloat(otroValor.valor);

        const tarifaParaActualizar = {
          ...tarifaExistente,
          otros_valores:allValores,
          otros_valores_cantidad:parseInt(otrosValoresCantidad),
          otros_valores_sumatoria:parseFloat(otrosValoresSumatoria),
        };

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
          let allValores = [...tarifaExistente.otros_valores]

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

          let allValores = [...tarifaExistente.otros_valores]

          const posicionValorfijoModificar = allValores.indexOf(valorQueSeEditara)

          const otroValorModificado = {
            nombre: formik.values.nombre,
            valor: parseFloat(formik.values.valor),
            descripcion: formik.values.descripcion,
          }

          allValores[posicionValorfijoModificar] = otroValorModificado

          let otrosValoresSumatoria = 0;

          allValores.forEach(otroValor => otrosValoresSumatoria += parseFloat(otroValor.valor))

          guardarModificacionOtrosValores(allValores, otrosValoresSumatoria)

        }
      }

      const guardarModificacionOtrosValores  = (allValores, otrosValoresSumatoria) =>{
         
          const tarifaParaActualizar = {
            ...tarifaExistente,
            otros_valores:allValores,
            otros_valores_sumatoria:parseFloat(otrosValoresSumatoria).toFixed(3),
          };

          setTarifaExistente({
            ...tarifaExistente,
            otros_valores:allValores,
            otros_valores_sumatoria:parseFloat(otrosValoresSumatoria).toFixed(3),
          })

          serviciosTarifas.updateTarifa(
            tarifaParaActualizar,
            () => {
              addToast("Valor fijo actualizado con éxito", {
                appearance: "success",
                autoDismiss: true,
              });
                handleCloseModal()
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