import React from "react";
import { Form, Button, Table, Icon } from "semantic-ui-react";

import ModalEditOtroValor from "./ModalEditOtroValor";
import ModalEliminarOtroValor from "./ModalEliminarOtroValor";

const ValoresFijosDetails = (props) => {
  const { 
    tarifaExistente,
    formik,
    handleCloseModal,
    handleOpenModal,
    modalIsOpen, 
    setTipoDeAccionModal,
    tipoDeAccionModal,
    valorQueSeEditara,
    setValorQueSeEditara,
    handleOtroValorQueSeEditara,
    handleEditOtrosValores,
    handleDeleteOtrosValores,
   } = props;

  function modalAndEditarOtroValor(otroValor){
    handleOpenModal()
    handleOtroValorQueSeEditara(otroValor)
    setValorQueSeEditara(otroValor)
    setTipoDeAccionModal("editar");
    //Se llama el formik para actualiza el errors
    formik.setFieldTouched(formik.nombre, true, true);
 }

 function modalAndEliminarOtroValor(otroValor){
   handleOpenModal();
   handleOtroValorQueSeEditara(otroValor);
   setTipoDeAccionModal("eliminar");
   setValorQueSeEditara(otroValor)
   //Se llama el formik para actualiza el errors
   formik.setFieldTouched(formik.nombre, true, true);
 }

  return (
    <>
      <Form stackable="true">
        <h3>Valores fijos</h3>
        <Form.Group>
          <div className="elementoNombreOtroValor">
            <Form.Input
              fluid
              label="Nombre"
              placeholder="Ej: Cargo Fijo"
              width={4}
              className="nombreOtroValor"
              {...formik.getFieldProps("nombre")}
            />
            {formik.touched.nombre &&
            formik.errors.nombre ? (
              <div className="ui pointing red basic label">
                {formik.errors.nombre}
              </div>
            ) : null}
          </div>
          <div className="elementoValor">
            <Form.Input
              fluid
              label="Valor"
              placeholder="5731.85"
              width={4}
              className="valor"
              {...formik.getFieldProps("valor")}
            />
            {formik.touched.valor &&
            formik.errors.valor ? (
              <div className="ui pointing red basic label">
                {formik.errors.valor}
              </div>
            ) : null}
          </div>
          <div className="elementoDescripcion">
            <Form.TextArea
              fluid
              label="Descripcion"
              placeholder="Ej: Cobro por impuestos"
              width={4}
              className="descripcion"
              {...formik.getFieldProps("descripcion")}
            />
            {formik.touched.descripcion &&
            formik.errors.descripcion ? (
              <div className="ui pointing red basic label">
                {formik.errors.descripcion}
              </div>
            ) : null}
          </div>
          
          <div className="divAgregarValorFijo">
            <Button onClick={formik.submitForm}>Agregar</Button>
          </div>
        </Form.Group>
      </Form>
      <Table celled fixed>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>
              Nombre
            </Table.HeaderCell>
            <Table.HeaderCell>
              Descripcion
            </Table.HeaderCell>
            <Table.HeaderCell>
              Valor
            </Table.HeaderCell>
            <Table.HeaderCell />
          </Table.Row>
        </Table.Header>
        {tarifaExistente && tarifaExistente.otros_valores &&
          tarifaExistente.otros_valores.length > 0 &&
          tarifaExistente.otros_valores.map((otroValor, index) => {
            return (
              <Table.Body>
                <Table.Row key={index}>
                  <Table.Cell>
                    {otroValor.nombre}
                  </Table.Cell>
                  <Table.Cell>{otroValor.descripcion}</Table.Cell>
                  <Table.Cell>
                    {otroValor.valor}
                  </Table.Cell>
                  <Table.Cell className="center celdaIconosOtrosValores">
                  {/*<Icon  onClick={() => modalAndEditarHogar(hogar)} name="edit outline" className="iconoColorAzul" />*/}
                  <Icon onClick={() => modalAndEditarOtroValor(otroValor)} name="edit outline" className="iconoColorAzul" />
                  <Icon onClick={() => modalAndEliminarOtroValor(otroValor)} name="delete" className="iconoColorRojo" />
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            );
          })}
      </Table>
      {tarifaExistente && tarifaExistente.otros_valores && tarifaExistente.otros_valores.length > 0 && 
      tipoDeAccionModal === "editar" && (
        <ModalEditOtroValor 
        modalIsOpen = {modalIsOpen} 
        handleCloseModal = {handleCloseModal}
        valorQueSeEditara = {valorQueSeEditara}
        formik = {formik}
        handleEditOtrosValores = {handleEditOtrosValores}
        tituloModal = "Modificar valor"
        />
      )}

      {tarifaExistente && tarifaExistente.otros_valores && tarifaExistente.otros_valores.length > 0 && 
      tipoDeAccionModal === "eliminar" && (
        <ModalEliminarOtroValor 
        modalIsOpen = {modalIsOpen}
        handleCloseModal = {handleCloseModal}
        handleDeleteOtrosValores = {handleDeleteOtrosValores}
        formik = {formik}
        tituloModal = "Eliminar valor" 
        />
      )}
    </>
  );
};

export default ValoresFijosDetails;
