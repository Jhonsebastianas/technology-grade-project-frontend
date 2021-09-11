import { values } from "@constants/PlantillasNotificaciones";
import React from "react";
import { Card, Form, Grid, Icon, Input } from 'semantic-ui-react'
import RegistrarServicios from '@components/forms/hogar/RegistrarHogarServicios'

const RegistarHogarDetails = (props) => {
  const {
    formik,
    handledChanged,
    errors,
    handledServicio,
    hogarQueSeEditara,
    validarExistenciaServicio,
  } = props;

  return (
    <>
      <Grid>
        <Grid.Column width={16}>
          <Form.Group widths="equal">
            <Form.Field width={16}>
              <label htmlFor="nombreHogar">Nombre hogar: *</label>
              <Input
                name="nombreHogar"
                id="nombreHogar"
                placeholder="Casa abuela"
                defaultValue={hogarQueSeEditara ? (hogarQueSeEditara.nombre ? hogarQueSeEditara.nombre : "") : ""}
                {...formik.getFieldProps("nombre")}

              />
              {formik.touched.nombre && formik.errors.nombre ? (
                <div className="ui pointing red basic label">
                  {formik.errors.nombre}
                </div>
              ) : null}
            </Form.Field>
            <Form.Field width={16}>
              <label htmlFor="numeroContrato"># Contrato: *</label>
              {/*alert(hogarQueSeEditara ? (hogarQueSeEditara.numeroContrato ? hogarQueSeEditara.numeroContrato:""):"")*/}
              <Input
                name="numeroContrato"
                id="numeroContrato"
                autoComplete="off"
                defaultValue={hogarQueSeEditara ? (hogarQueSeEditara.numeroContrato ? hogarQueSeEditara.numeroContrato : "") : ""}
                {...formik.getFieldProps("numeroContrato")}

              />
              {formik.touched.numeroContrato && formik.errors.numeroContrato ? (
                <div className="ui pointing red basic label">
                  {formik.errors.numeroContrato}
                </div>
              ) : null}
            </Form.Field>
            <Form.Field>
              <label>¿Este es el hogar en el que actualmente vive? *</label>
              {/*<Form.Group inline>*/}
              <div className="field">
                <div className="ui radio checkbox">
                  <input
                    type="radio"
                    name="hogarActual"
                    id="hogarPrincipalSi"
                    value="Si"
                    defaultChecked={hogarQueSeEditara ? (hogarQueSeEditara.hogarActual == true ? true : false) : false}
                    onChange={handledChanged}
                  />
                  <label htmlFor="hogarPrincipalSi">Sí</label>
                </div>
              </div>
              <div className="field">
                <div className="ui radio checkbox">
                  <input
                    type="radio"
                    name="hogarActual"
                    id="hogarPrincipalNo"
                    value="No"
                    defaultChecked={hogarQueSeEditara ? (hogarQueSeEditara.hogarActual == false ? true : false) : false}
                    onChange={handledChanged}
                  />
                  <label htmlFor="hogarPrincipalNo">No</label>
                </div>
              </div>
              {/*</Form.Group>*/}
              {errors.hogarActual && (
                <div className="ui pointing red basic label">
                  {errors.hogarActual}
                </div>
              )}
            </Form.Field>
          </Form.Group>
        </Grid.Column>
        <Grid.Column width={16}>
          <Form.Group className="viviendaEstrato">
            <Form.Field>
              <label>Tipo de vivienda: *</label>
              <Card.Group>
                <Card>
                  <Card.Content>
                    <div className="field">
                      <div className="ui radio checkbox">
                        <input
                          type="radio"
                          name="tipoHogar"
                          id="tipoHogarCasa"
                          value="casa"
                          defaultChecked={hogarQueSeEditara ? (hogarQueSeEditara.tipoHogar === "casa" ? true : false) : false}
                          onChange={handledChanged}
                        />
                        <label htmlFor="tipoHogarCasa">
                          <Icon className="home"></Icon>Casa
                      </label>
                      </div>
                    </div>
                  </Card.Content>
                </Card>
                <Card>
                  <Card.Content>
                    <div className="field">
                      <div className="ui radio checkbox">
                        <input
                          type="radio"
                          name="tipoHogar"
                          id="tipoHogarApartamento"
                          value="apartamento"
                          defaultChecked={hogarQueSeEditara ? (hogarQueSeEditara.tipoHogar === "apartamento" ? true : false) : false}
                          onChange={handledChanged}
                        />
                        <label htmlFor="tipoHogarApartamento">
                          <Icon className="building"></Icon>Apartamento
                      </label>
                      </div>
                    </div>
                  </Card.Content>
                </Card>
                <Card>
                  <Card.Content>
                    <div className="field">
                      <div className="ui radio checkbox">
                        <input
                          type="radio"
                          name="tipoHogar"
                          id="tipoHogarOtro"
                          value="otro"
                          defaultChecked={hogarQueSeEditara ? (hogarQueSeEditara.tipoHogar === "otro" ? true : false) : false}
                          onChange={handledChanged}
                        />
                        <label htmlFor="tipoHogarOtro">
                          <Icon className="factory"></Icon>Otro
                      </label>
                      </div>
                    </div>
                  </Card.Content>
                </Card>
              </Card.Group>
              {errors.tipoHogar && (
                <div className="ui pointing red basic label">
                  {errors.tipoHogar}
                </div>
              )}
            </Form.Field>
            <Form.Field className="estratos">
              <label>Estrato de la vivienda: *</label>
              <Form.Group inline>
                <div className="field">
                  <div className="ui radio checkbox">
                    <input
                      type="radio"
                      name="estrato"
                      id="estrato1"
                      value="1"
                      defaultChecked={hogarQueSeEditara ? (hogarQueSeEditara.estrato === "1" ? true : false) : false}
                      onChange={handledChanged}
                    />
                    <label htmlFor="estrato1">1</label>
                  </div>
                </div>
                <div className="field">
                  <div className="ui radio checkbox">
                    <input
                      type="radio"
                      name="estrato"
                      id="estrato2"
                      value="2"
                      defaultChecked={hogarQueSeEditara ? (hogarQueSeEditara.estrato === "2" ? true : false) : false}
                      onChange={handledChanged}
                    />
                    <label htmlFor="estrato2">2</label>
                  </div>
                </div>
                <div className="field">
                  <div className="ui radio checkbox">
                    <input
                      type="radio"
                      name="estrato"
                      id="estrato3"
                      value="3"
                      defaultChecked={hogarQueSeEditara ? (hogarQueSeEditara.estrato === "3" ? true : false) : false}
                      onChange={handledChanged}
                    />
                    <label htmlFor="estrato3">3</label>
                  </div>
                </div>
              </Form.Group>
              <Form.Group inline>
                <div className="field">
                  <div className="ui radio checkbox">
                    <input
                      type="radio"
                      name="estrato"
                      id="estrato4"
                      value="4"
                      defaultChecked={hogarQueSeEditara ? (hogarQueSeEditara.estrato === "4" ? true : false) : false}
                      onChange={handledChanged}
                    />
                    <label htmlFor="estrato4">4</label>
                  </div>
                </div>
                <div className="field">
                  <div className="ui radio checkbox">
                    <input
                      type="radio"
                      name="estrato"
                      id="estrato5"
                      value="5"
                      defaultChecked={hogarQueSeEditara ? (hogarQueSeEditara.estrato === "5" ? true : false) : false}
                      onChange={handledChanged}
                    />
                    <label htmlFor="estrato5">5</label>
                  </div>
                </div>
                <div className="field">
                  <div className="ui radio checkbox">
                    <input
                      type="radio"
                      name="estrato"
                      id="estrato6"
                      value="6"
                      defaultChecked={hogarQueSeEditara ? (hogarQueSeEditara.estrato === "6" ? true : false) : false}
                      onChange={handledChanged}
                    />
                    <label htmlFor="estrato6">6</label>
                  </div>
                </div>
              </Form.Group>
              {errors.estrato && (
                <div className="ui pointing red basic label">
                  {errors.estrato}
                </div>
              )}
            </Form.Field>
          </Form.Group>
          {/* <Grid.Column width={16}>
            <Form.Group>
              <Form.Field>
                <label>Servicios en el hogar:</label>
                <div className="ui checkbox">
                  <input
                    type="checkbox"
                    name="servicioAgua"
                    id="servicioAgua"
                    defaultValue="agua"
                    defaultChecked={hogarQueSeEditara ? validarExistenciaServicio("agua") : false}
                    onChange={handledServicio}
                  />
                  <label htmlFor="servicioAgua">Agua</label>
                </div>
                <div className="ui checkbox" style={{ marginLeft: "20px" }}>
                  <input
                    type="checkbox"
                    name="servicioEnergia"
                    id="servicioEnergia"
                    defaultValue="energia"
                    defaultChecked={hogarQueSeEditara ? validarExistenciaServicio("energia") : false}
                    onChange={handledServicio}
                  />
                  <label htmlFor="servicioEnergia">Energía</label>
                </div>
              </Form.Field>
            </Form.Group>
          </Grid.Column> */}
        </Grid.Column>
      </Grid>

      {/** REGISTRAR SERVICIOS */}
      <RegistrarServicios
        handledServicio={handledServicio}
        hogarQueSeEditara={hogarQueSeEditara}
        validarExistenciaServicio={validarExistenciaServicio}
      />
    </>
  );
};

export default RegistarHogarDetails;
