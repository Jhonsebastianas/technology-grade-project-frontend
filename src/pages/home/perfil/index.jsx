import React, { useEffect, useState } from "react";
import Layout from "@components/layouts/LayoutPrivado";
import loginUtils from "@utils/login.utils";
import TablaInformacionHogares from '@components/sections/perfil/TablaInformacionHogares';
import {
  Button,
  Form,
  Grid,
  Header,
  Input,
  Modal,
  Table,
  Icon
} from "semantic-ui-react";

import ServiciosHogares from "@services/servicios.hogares";
import { useRouter } from 'next/router'
import PerfilDetails from './PerfilDetails';
import { Fragment } from "react";

const Perfil = () => {
  
  const [visibilidadFormulario, setVisibilidadformulario] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [usuario, setUsuario] = useState({});

  const [hogarQueSeEditara, setHogarQueSeEditara] = useState({});
  const [listaHogares, setListaHogares] = useState([]);

  const router = useRouter()
  
  const goToAddHome = () => {
      router.push("/registrar/hogar");
  }

  const formularioInformacionPersonal = () => {
    const formulario = visibilidadFormulario ? false : true;
    setVisibilidadformulario(formulario);
  };

  

  useEffect(() => {
    let mounted = true;

    if (mounted) {

      ServiciosHogares.getHogaresByUsername(
        loginUtils.getUsernameUser(),
        ({ data }) => {
          
          console.log("ENTRAMOOOOOOOOOOOS");
          setListaHogares(data);
          //setHogarQueSeEditara(data[0]);
        },
        (error) => {}
      );

      const dataUser = {
        fullName: loginUtils.getFullName(),
      };
      setUsuario(dataUser);
      
    }
    return () => (mounted = false);
  }, []);

  const handleOpenModal =  e =>{
    setModalIsOpen(true);
  }

  const handleCloseModal = e =>{
    setModalIsOpen(false);
  }

  const handleHogarQueSeEditara = (hogar) =>{
    setHogarQueSeEditara(hogar)
  }

  const handleDeleteBadge = async e =>{
     //this.setState({loading:true, error:null});
  }       
  
  const handleEditHogar = e =>{
    alert("Aun no se hace la parte ");
  }

  return (
    <Fragment>
      <div id="modal">

      </div>
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
        />
    </Fragment>
  );
};

export default Perfil;
