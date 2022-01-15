import Layout from "@components/layouts/LayoutAdmin";
import React, { useEffect, useState } from "react";
import { Checkbox, Dropdown, Form, Grid, Pagination, Select, Table, Button, Input, Popup, Icon } from "semantic-ui-react";
import { useToasts } from "react-toast-notifications";
import serviciosUsuario from '@services/servicios.usuario'
import { useFormik } from "formik";

const Administradores = () => {

    const { addToast } = useToasts();
    
    const [usuarios, setUsuarios] = useState(null); 
    const [usuariosConsulta, setUsuariosConsulta] = useState(null);
    const [administradores, setAdministradores] = useState(null);
    const [usuariosSeleccionados, setUsuariosSeleccionados] = useState([]);
    const [usuariosModificados,setUsuariosModificados] = useState([]);
    const [inhabilitarbotonguardar, setInhabilitarBotonGuardar] = useState(true);
    const [inhabilitarBotonConsultar, setInhabilitarBotonConsultar] = useState(true);
    const [consultaRealizada, setConsultaRealizada] = useState(false);
    const [textoConsultar, setTextoConsultar] = useState(""); 
    const [cantidadUsuariosAdmin,setCantidadUsuariosAdmin] = useState([]);
    // const [cantidadUsuariosPaginacion, setCantidadUsuariosPaginacion] = useState({
    //   inicio:0,
    //   final:1,
    // });
    const [inicioUsuariosPaginacion,setInicioUsuariosPaginacion] = useState(0);
    const [finalUsuariosPaginacion,setFinalUsuariosPaginacion ]= useState(10);
    const [cambioPaginacion, setCambioPaginacion] = useState(true);
    const [valorSelectColumna, setValorSelectColumna] = useState("Nombres");
    const [realizaConsulta, setRealizaConsulta] = useState(false);
    const [paginacion, setPaginacion] = useState({
      activePage: 1,
      boundaryRange: 1,
      siblingRange: 1,
      showEllipsis: true,
      showFirstAndLastNav: true,
      showPreviousAndNextNav: true,
      totalPages: 0,
    });

    const opcionesColumna = [
      { key: 'no', text: 'Nombres', value: 'Nombres' },
      { key: 'ap', text: 'Apellidos', value: 'Apellidos' },
      { key: 'co', text: 'Correo', value: 'Correo' },
    ]
    
    const obtenerUsuariosLimitado= (inicio, final) =>{
      const cantidadUsuariosPaginacion = {
        inicio:inicio,
        final:final
      }
      serviciosUsuario.getUsuariosLimitado(cantidadUsuariosPaginacion,
        ({ data }) => {
            let usuariosAdministradores = [];
            data.forEach(usuario => {
                const us = {
                  nombres:usuario.nombres, 
                  apellidos:usuario.apellidos,
                  correo:usuario.correo,
                  perfiles:usuario.perfiles
                }

                usuariosAdministradores.push(us);
            });

            setUsuarios(usuariosAdministradores);     
        },
        (error) => {}
      );
    }

    const obtenerTotalUsuariosRegistrados = () =>{
      serviciosUsuario.getNumeroUsuariosAdmin(
        ({ data }) => {
          setPaginacion({...paginacion, totalPages:Math.ceil(data/10), activePage:1})
        },
        (error) => {}
      );
    }

    useEffect(() => {
        let mounted = true;
        if (mounted) {
          obtenerTotalUsuariosRegistrados();
          obtenerUsuariosLimitado(0,10);
        }
        return () => (mounted = false);
    }, []);

    const handleChangeTexto = (e) =>{
      const {value} = e.target;
      setTextoConsultar(value);
      
      if(value.length >= 3){
        setInhabilitarBotonConsultar(false);
      }else{
        setInhabilitarBotonConsultar(true);
      }
    }

    const handleChangeColuman = (e) =>{
      setValorSelectColumna(e.target.outerText);
    }

    const handleClickConsultar = () =>{
      setConsultaRealizada(true);
      if(textoConsultar.length >= 3){
        setCambioPaginacion(false);
        setRealizaConsulta(true);

        const opciones = {
          frase:textoConsultar.toUpperCase(),
          opcion:valorSelectColumna.toLowerCase()
        }

        serviciosUsuario.getUsuariosFrase(opciones,
                  ({ data }) => {
                    setUsuariosConsulta(data);
                    let listaUsuarios = [];
                    let contador = 0;
                    data.some(function(usuario, index){
                      listaUsuarios.push(usuario);
                      return index == 9
                    });
                    
                    setUsuarios(listaUsuarios);
                    setPaginacion({...paginacion, totalPages:Math.ceil(data.length/10), activePage:1}) 
                  },
                  (error) => {}
        );

        const timer = setTimeout(() => {
          setCambioPaginacion(true);
        }, 250);
        return () => clearTimeout(timer);

      }
      
    }
  
    const handleLimpiarCampos = () => {
      
      const activePage = 1;
      
      setRealizaConsulta(false);
      setCambioPaginacion(false);
      setInhabilitarBotonConsultar(true);
      setConsultaRealizada(false);
      obtenerTotalUsuariosRegistrados();
      obtenerUsuariosLimitado(0,10);
      setTextoConsultar("");

      const timer = setTimeout(() => {
        setCambioPaginacion(true);
      }, 250);
      return () => clearTimeout(timer);
    }

    const handleCheckboxChange = (usuario) =>{

        setInhabilitarBotonGuardar(false);

        const quitarPerfilAdmin = usuario.perfiles.some(perfil => perfil == "ADMIN");

        if(quitarPerfilAdmin){
          
          usuario.perfiles = usuario.perfiles.filter(perfil => perfil !== "ADMIN");
          
        }else{

          usuario.perfiles.push("ADMIN");
  
        }

        if(usuariosModificados && usuariosModificados.length > 0 ){
          let usuarioExistenteLista = usuariosModificados.some(usuarioModificado => usuarioModificado.correo == usuario.correo);;

          let listaUsuarios = [];
          if(usuarioExistenteLista){
            listaUsuarios = usuariosModificados.filter(usuarioModificado => usuarioModificado.correo != usuario.correo);
            setUsuariosModificados(listaUsuarios);
          }else{
            if(usuariosModificados && usuariosModificados.length > 0){

              setUsuariosModificados([...usuariosModificados, usuario]);

            }else{
              setUsuariosModificados([usuario]);
            }
          }        
        }else{
          setUsuariosModificados([usuario]);
        }      
    }

    const handleClickAgregar = () =>{
      setInhabilitarBotonGuardar(true);
      
       if(usuariosModificados && usuariosModificados.length > 0){
            serviciosUsuario.agregarPerfilAdministrador(usuariosModificados,
              () => {
                setUsuariosModificados([]);
                addToast("Usuario(s) actualizado(s) con exito", {
                  appearance: "success",
                  autoDismiss: true,
                });
                
              },
              (error) => {}
          );
        }else{
          addToast("No hay cambios por realizar", {
            appearance: "info",
            autoDismiss: true,
          });
        }
     }
    
     const paginarUsuariosConsulta = (inicio, final) =>{
     
      let listaUsuarios = usuariosConsulta.slice(inicio, final);
      
      setUsuarios(listaUsuarios);
    }


     const  handlePaginationChange = (e, { activePage }) =>{
      if(realizaConsulta){
        setCambioPaginacion(false);
        const final = (10 * activePage);
        const inicio = final - 10;

        setPaginacion({ ...paginacion,activePage });
        paginarUsuariosConsulta(inicio, final);
        const timer = setTimeout(() => {
          setCambioPaginacion(true);
        }, 250);
        return () => clearTimeout(timer);
      } else {
        setCambioPaginacion(false);

        const valorInicio = activePage != 1 ? (10 * activePage -10):0;
        const valorFinal = 10

        setPaginacion({ ...paginacion,activePage });
        obtenerUsuariosLimitado(valorInicio,valorFinal);
          
        const timer = setTimeout(() => {
          setCambioPaginacion(true);
        }, 250);
        return () => clearTimeout(timer);
      }
        
    }

  return (
    <Layout>
      <div id="modal"></div>
      <Grid celled="internally">
        <Grid.Row centered>
          <Grid.Column stackable mobile={14} tablet={12} computer={12}>
            <Form stackable="true">
              <h1 className="tituloTarifas">Agregar administradores</h1>
              <Grid>
                <Grid.Column mobile={16} tablet={5} computer={4} id="lista">
                <label>Columna</label>
                <Dropdown
                    //placeholder='Seleccionar columna'
                    fluid
                    selection
                    options={opcionesColumna}
                    defaultValue={valorSelectColumna}
                    onChange={handleChangeColuman}
                 />
                 </Grid.Column>
                 <Grid.Column mobile={16} tablet={6} computer={6} id="texto">
                 <label>Texto</label>
                  < Input fluid placeholder='Search...' onChange={handleChangeTexto} value={textoConsultar}/>
                 </Grid.Column>
                 <Grid.Column  id="consultar" mobile={16} tablet={3} computer={2}>
                 <label></label>
                 <Button className={inhabilitarBotonConsultar ? "disabled":""} primary onClick={handleClickConsultar}>Consultar</Button>
                 </Grid.Column>
                 <Grid.Column  id="limpiarCamposConsultar" mobile={16} tablet={4} computer={3}>
                 <label></label>
                 <Button className={inhabilitarBotonConsultar ? "disabled":""} primary onClick={handleLimpiarCampos}>Limpiar campos</Button>
                 </Grid.Column>
                
              </Grid>
              {/*<Form.Field
                control={Select}
                options={null}
                label={{
                  children: "Mes",
                  htmlFor: "form-select-control-mes",
                }}
                placeholder="Mes"
                search
                searchInput={{ id: "form-select-control-mes" }}
                width={5}
                onChange={null}
                value={null}
              />*/}
              <Table celled>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell>Nombres</Table.HeaderCell>
                    <Table.HeaderCell>Apellidos</Table.HeaderCell>
                    <Table.HeaderCell>Correo</Table.HeaderCell>
                    <Table.HeaderCell className="center"><Popup content='Marque los usuarios a los que desea asignar el perfil de administrador, para caso contrario debe desmarcarlos. Recuerde dar clic en "Guardar cambios" una vez realizado algún cambio.' trigger={<Icon name='question circle outline' />} /></Table.HeaderCell>
                  </Table.Row>
                </Table.Header>
                {cambioPaginacion && usuarios && usuarios.length > 0 &&
                usuarios.map((usuario, index) => {
                return(
                  <Table.Body key={"fila" + index}>
                    <Table.Row>
                      <Table.Cell>{usuario.nombres}</Table.Cell>
                      <Table.Cell>{usuario.apellidos}</Table.Cell>
                      <Table.Cell>{usuario.correo}</Table.Cell>
                      <Table.Cell className="center">
                        <Checkbox onChange={() => handleCheckboxChange(usuario)} defaultChecked={usuario.perfiles.some(perfil => perfil == "ADMIN")}/>
                      </Table.Cell>
                    </Table.Row>
                  </Table.Body>
                )})}
                
              </Table>
              <Grid columns={1}>
                <Grid.Column id="paginacion">
                  <Pagination
                    activePage={paginacion.activePage}
                    boundaryRange={paginacion.boundaryRange}
                    onPageChange={handlePaginationChange}
                    size="mini"
                    siblingRange={paginacion.siblingRange}
                    totalPages={paginacion.totalPages}
                    // Heads up! All items are powered by shorthands, if you want to hide one of them, just pass `null` as value
                    ellipsisItem={paginacion.showEllipsis ? undefined : null}
                    firstItem={paginacion.showFirstAndLastNav ? undefined : null}
                    lastItem={paginacion.showFirstAndLastNav ? undefined : null}
                    prevItem={paginacion.showPreviousAndNextNav ? undefined : null}
                    nextItem={paginacion.showPreviousAndNextNav ? undefined : null}
                  />
                  <Button className={inhabilitarbotonguardar ? "disabled" : ""} primary onClick={handleClickAgregar}>Guardar cambios</Button>
                </Grid.Column>
              </Grid>
            </Form>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Layout>
  );
};

export default Administradores;
