import React from 'react';
import ModalPerfil from './ModalPerfil';
import { Button, Form, Input, Modal } from "semantic-ui-react";

const ModalEditHogar = (props) =>{
    return (
        <ModalPerfil modalIsOpen={props.modalIsOpen} onCloseModal={props.onCloseModal} onEditHogar={props.onEditHogar}>
            <Form>
              <Form.Group widths="equal">
                <Form.Field width={7}>
                  <label htmlFor="correo">
                    {"Nombre hogar: " +
                      (props.hogarQueSeEditara ? props.hogarQueSeEditara.nombre : "")}
                  </label>
                  <Input
                    name="nombreHogar"
                    id="nombreHogar"
                    placeholder={props.hogarQueSeEditara.nombre}
                  />
                </Form.Field>
                <Form.Field width={7}>
                  <label htmlFor="correo">
                    {"# Contrato: " +
                      (props.hogarQueSeEditara
                        ? props.hogarQueSeEditara.numero_contrato
                        : "")}
                  </label>
                  <Input
                    name="numeroContrato"
                    id="numeroContrato"
                    placeholder={props.hogarQueSeEditara.numero_contrato}
                    autocomplete="off"
                  />
                </Form.Field>
              </Form.Group>
              <Form.Group inline>
                <label>Servicios</label>
                <Form.Radio label="Agua" value="agua" />
                <Form.Radio label="Energía" value="Energía" />
              </Form.Group>
            </Form>
        </ModalPerfil>
    )
}

export default ModalEditHogar;