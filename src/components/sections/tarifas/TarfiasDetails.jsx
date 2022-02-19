import React from "react";
import { Button, Form, Grid, Select } from "semantic-ui-react";
import ValoresFijosContainer from "./otrosValores/ValoresFijosContainer";

const TarifasDetails = (props) => {
  const {
    opcionServicios,
    opcionMeses,
    handledChangedEstratos,
    handledChangedServicios,
    handledChangedMeses,
    valueCheckedEstrato,
    valueSelectServicios,
    valueSelectMeses,
    tarifaExistente,
    setTarifaExistente,
    handledChanged,
    validarExistenciaTarfia,
    handleClickRegistrarTarifa,
    formik,
    updateTarifa,
    mostrarValoresFijos,
    mostrarFormularioTarifa,
  } = props;

  return (
    <Grid celled="internally">
      <Grid.Row centered>
        <Grid.Column mobile={14} tablet={12} computer={12}>
          <Form stackable="true">
            <h1 className="tituloTarifas">Tarifas</h1>
            <Form.Group>
              <Form.Group grouped className="estratos" width={5}>
                <label>Estrato</label>
                <Form.Group inline>
                  <Form.Radio
                    label="1"
                    name="estrato"
                    id="estrato1"
                    value="1"
                    checked={valueCheckedEstrato === "1"}
                    onChange={handledChangedEstratos}
                  />
                  <Form.Radio
                    label="2"
                    name="estrato"
                    id="estrato2"
                    value="2"
                    checked={valueCheckedEstrato === "2"}
                    onChange={handledChangedEstratos}
                  />
                  <Form.Radio
                    label="3"
                    name="estrato"
                    id="estrato3"
                    value="3"
                    checked={valueCheckedEstrato === "3"}
                    onChange={handledChangedEstratos}
                  />
                </Form.Group>
                <Form.Group inline>
                  <Form.Radio
                    label="4"
                    name="estrato"
                    id="estrato4"
                    value="4"
                    checked={valueCheckedEstrato === "4"}
                    onChange={handledChangedEstratos}
                  />
                  <Form.Radio
                    label="5"
                    name="estrato"
                    id="estrato5"
                    value="5"
                    checked={valueCheckedEstrato === "5"}
                    onChange={handledChangedEstratos}
                  />
                  <Form.Radio
                    label="6"
                    name="estrato"
                    id="estrato6"
                    value="6"
                    checked={valueCheckedEstrato === "6"}
                    onChange={handledChangedEstratos}
                  />
                </Form.Group>
              </Form.Group>

              <Form.Select
                fluid
                name="servicio"
                label="Servicio"
                placeholder="Servicio"
                options={opcionServicios}
                width={5}
                onChange={handledChangedServicios}
                value={valueSelectServicios}
              />

              {/*<Form.Select
                fluid
                label="Mes"
                placeholder="Mes"
                options={opcionMeses}
                width={5}
                onChange={handledChangedMeses}
                value={valueSelectMeses}
              />*/}

              <Form.Field
                control={Select}
                options={opcionMeses}
                label={{
                  children: "Mes",
                  htmlFor: "form-select-control-mes",
                }}
                placeholder="Mes"
                search
                searchInput={{ id: "form-select-control-mes" }}
                width={5}
                onChange={handledChangedMeses}
                value={valueSelectMeses}
              />
            </Form.Group>
            { mostrarFormularioTarifa && 
            <div>
            <Form.Group>
              <div className="elementoLimiteSubsidiado">
                <Form.Input
                  fluid
                  label="Límite subsidiado"
                  placeholder="Ej: 130"
                  width={5}
                  name="limite_subsidiado"
                  className="limiteSubsidiado"
                  //onChange={handledChanged}
                  //value={tarifaExistente ? tarifaExistente.limite_subsidiado : ""}
                  {...formik.getFieldProps("limite_subsidiado")}
                />
                {formik.touched.limite_subsidiado &&
                formik.errors.limite_subsidiado ? (
                  <div className="ui pointing red basic label">
                    {formik.errors.limite_subsidiado}
                  </div>
                ) : null}
              </div>
              <div className="elementoValorConsumo">
                <Form.Input
                  fluid
                  label="Valor Consumo"
                  placeholder="Ej: 470.1"
                  width={5}
                  name="valor_consumo"
                  className="valorConsumo"
                  //onChange={handledChanged}
                  //value={tarifaExistente ? tarifaExistente.valor_consumo : ""}
                  {...formik.getFieldProps("valor_consumo")}
                />
                {formik.touched.valor_consumo && formik.errors.valor_consumo ? (
                  <div className="ui pointing red basic label">
                    {formik.errors.valor_consumo}
                  </div>
                ) : null}
              </div>
              <div className="elementoValorConsumoExceso">
                <Form.Input
                  fluid
                  label="Valor Exceso"
                  placeholder="Ej: 553.05"
                  width={5}
                  name="valor_consumo_exceso"
                  className="valorConsumoExceso"
                  //onChange={handledChanged}
                  /*value={
                    tarifaExistente ? tarifaExistente.valor_consumo_exceso : ""
                  }*/
                  {...formik.getFieldProps("valor_consumo_exceso")}
                />
                {formik.touched.valor_consumo_exceso &&
                formik.errors.valor_consumo_exceso ? (
                  <div className="ui pointing red basic label">
                    {formik.errors.valor_consumo_exceso}
                  </div>
                ) : null}
              </div>
            </Form.Group>

            <Form.Group>
              <div className="elementoSubsidioGobierno">
                <Form.Input
                  fluid
                  label="Subsidio del gobierno"
                  placeholder="Ej: 0"
                  width={5}
                  name="subsidio_gobierno"
                  className="subsidioGobierno"
                  //onChange={handledChanged}
                  //value={tarifaExistente ? tarifaExistente.subsidio_gobierno : ""}
                  {...formik.getFieldProps("subsidio_gobierno")}
                />
                {formik.touched.subsidio_gobierno &&
                formik.errors.subsidio_gobierno ? (
                  <div className="ui pointing red basic label">
                    {formik.errors.subsidio_gobierno}
                  </div>
                ) : null}
              </div>
              <div className="elementoUnidadMedida">
                <Form.Input
                  fluid
                  label="Unidad de medida"
                  placeholder="Ej: kwh"
                  width={5}
                  name="unidad_medida"
                  className="unidadMedida"
                  //onChange={handledChanged}
                  //value={tarifaExistente ? tarifaExistente.unidad_medida : ""}
                  {...formik.getFieldProps("unidad_medida")}
                />
                {formik.touched.unidad_medida && formik.errors.unidad_medida ? (
                  <div className="ui pointing red basic label">
                    {formik.errors.unidad_medida}
                  </div>
                ) : null}
              </div>
            </Form.Group>
            <Form.Group>
              <div className="divAgregarNuevaTarifa">
                {validarExistenciaTarfia == false && (
                  <Button onClick={formik.submitForm}>Agregar</Button>
                )}
                {validarExistenciaTarfia == true && <Button onClick={updateTarifa}>Actualizar</Button>}
              </div>
            </Form.Group>
            </div>}
          </Form>
          {mostrarValoresFijos &&
          <ValoresFijosContainer 
          tarifaExistente={tarifaExistente}
          setTarifaExistente={setTarifaExistente}
          tarifaEjemplo = {formik}
          />}
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default TarifasDetails;
