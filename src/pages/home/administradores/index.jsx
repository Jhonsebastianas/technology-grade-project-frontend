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
              //setOpcionesUsuarios(key:usuario.)
                const us = {
                  nombres:usuario.nombres, //+ " " + usuario.apellidos,
                  apellidos:usuario.apellidos,
                  correo:usuario.correo,
                  perfiles:usuario.perfiles
                }
                //console.log("BBBBBBBBBBBBBBBB")
                //console.log(us);
                usuariosAdministradores.push(us);
            });
            console.log("asdasdasdsa")
            //console.log(usuariosAdministradores);
            //setAdministradores(usuariosAdministradores);
            console.log(usuariosAdministradores);
            setUsuarios(usuariosAdministradores);
            console.log(usuariosAdministradores);
            //console.log(usuariosAdministradores);
            
        
        },
        (error) => {}
      );
    }

    const obtenerTotalUsuariosRegistrados = () =>{
      serviciosUsuario.getNumeroUsuariosAdmin(
        ({ data }) => {
          //setCantidadUsuariosAdmin(data);
          //console.log("TENEMOS DE USUARIOS:")
          //console.log(data)
          //console.log((Math.ceil(data/10))); 
          setPaginacion({...paginacion, totalPages:Math.ceil(data/10)})

        },
        (error) => {}
      );
    }

    useEffect(() => {
        let mounted = true;
        if (mounted) {
            //console.log(cantidadUsuariosPaginacion)
          obtenerTotalUsuariosRegistrados();
          obtenerUsuariosLimitado(0,10);
        }
        return () => (mounted = false);
    }, []);

    // const handledChanged = (e) => {
    //   let elemento = document.querySelector("div.ui.active.visible.fluid.multiple.search.selection.dropdown > input");
    //   let texto = ""
    //   if(elemento){
    //     texto = elemento.value;
    //   }
    //   //console.log(texto.length);
    //   if(texto.length > 2){
    //     const frase = {
    //       frase: texto.toUpperCase()
    //     };
    //       serviciosUsuario.getUsuariosFrase(frase,
    //         ({ data }) => {
    //           let usuariosAdministradores = [];
    //           //console.log(data);
    //             data.forEach(usuario => {
    //               //setOpcionesUsuarios(key:usuario.)
    //                 const us = {
    //                   key:usuario.correo,
    //                   text:usuario.correo,
    //                   value:usuario.correo
    //                 }
    //                 usuariosAdministradores.push(us);
    //                 //console.log(usuariosAdministradores)
    //             });
    //             if(usuariosSeleccionados && usuariosSeleccionados.length > 0){
    //               //console.log("CONCATENATIOOOO");
    //               let usuariosTotales = usuariosSeleccionados.concat(usuariosAdministradores);
    //               setUsuarios(usuariosTotales);
    //               //console.log(usuariosTotales);
                  
    //             }else{
    //               setUsuarios(usuariosAdministradores);
    //             }    
    //         },
    //         (error) => {}
    //     );
    //   }else{
    //     if(usuariosSeleccionados && usuariosSeleccionados.length > 0){
    //       setUsuarios(usuariosSeleccionados);
    //     }else{
    //       setUsuarios(null);
    //     }
    //   }

     


    // };

    // const selectElement = document.querySelector('div.ui.active.visible.fluid.multiple.search.selection.dropdown > input');

    // selectElement.addEventListener('change', (event) => {
    //    //console.log("asdasd"); 
    // });


    const handleChangeTexto = (e) =>{
      const {value} = e.target;
      
      if(value.length >= 3){
        setInhabilitarBotonConsultar(false);
        setTextoConsultar(value);
      }else{
        setInhabilitarBotonConsultar(true);
      }
    }

    const handleChangeColuman = (e) =>{
      console.log(e.target.outerText);
      setValorSelectColumna(e.target.outerText);

    }

    const handleClickConsultar = () =>{
      setConsultaRealizada(true);
      if(textoConsultar.length >= 3){
        setCambioPaginacion(false);
        setRealizaConsulta(true);
        console.log("ASDGCCC");
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
                    console.log(paginacion);
                    
                    setUsuarios(listaUsuarios);
                    setPaginacion({...paginacion, totalPages:Math.ceil(data.length/10), activePage:1})
                    console.log(paginacion);

                    
                  },
                  (error) => {}
        );

        const timer = setTimeout(() => {
          setCambioPaginacion(true);
        }, 250);
        return () => clearTimeout(timer);

      }
      
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
          console.log(usuariosModificados);
          let listaUsuarios = [];
          if(usuarioExistenteLista){
            console.log(listaUsuarios);
            listaUsuarios = usuariosModificados.filter(usuarioModificado => usuarioModificado.correo != usuario.correo);
            setUsuariosModificados(listaUsuarios);
          }else{
            if(usuariosModificados && usuariosModificados.length > 0){

              setUsuariosModificados([...usuariosModificados, usuario]);

            }else{
              setUsuariosModificados([usuario]);
            }
          }
        
          // usuarios.forEach(function(usuarioModificado){
          //   if(usuarioModificado.correo == usuario.correo){
          //     usuarioExistenteLista = true;
          //     console.log("MOD")
          //     console.log(usuarioModificado.perfiles)
          //     console.log("use")
          //     console.log(usuario.perfiles)
          //     usuarioModificado.perfiles = usuario.perfiles;
          //   }
          // });
          // if(listaUsuarios && listaUsuarios.length > 0){
          //   console.log("1")
          //   setUsuariosModificados([...usuario]);
          // }else{
          //   console.log("2")
          //   setUsuariosModificados([listaUsuarios]);
          // }
        
        }else{
          setUsuariosModificados([usuario]);
        }      
    }
    //  const handleCheckboxChange = (e, {target}) =>{
        
    //   if(e.target.innerText.length > 0){
    //     const usuarioSeleccionado = {
    //       key:e.target.innerText,
    //       text:e.target.innerText,
    //       value:e.target.innerText
    //     }
      
    //     setUsuariosSeleccionados([...usuariosSeleccionados, usuarioSeleccionado])
    //     //console.log(e.target.innerText);
    //     //console.log(e);

    //   }else{
    //     let usuarios = document.querySelectorAll("#usuarios a.ui.label");
    //     //console.log("ASDASDASDASDASD___");
    //     //console.log(e.target.parentElement.innerText);

    //     //const usuariosT = usuarios.filter(usuario => usuario != e.target.parentElement.innerText)

    //     let usuariosT = [];
    //     usuarios.forEach(function(element){ 
    //       if(element.innerText != e.target.parentElement.innerText){
    //         const usuario = {
    //           key:element.innerText,
    //           text:element.innerText,
    //           value:element.innerText
    //         }
    //         usuariosT.push(usuario);
    //       }
    //     });
    //     /*//console.log("ULTIMOS LISTA - ESTE")
    //     //console.log(usuariosT);*/

    //     setUsuariosSeleccionados(usuariosT);
    //     setUsuarios(usuariosT);

    //     /*//console.log("ULTIMOS LISTA")
    //     //console.log(usuariosSeleccionados)
    //     //console.log(usuarios)*/

    //   }
    //  }

     const handleClickAgregar = () =>{
      setInhabilitarBotonGuardar(true);
      
       if(usuariosModificados && usuariosModificados.length > 0){
            serviciosUsuario.agregarPerfilAdministrador(usuariosModificados,
              () => {
                
                //setUsuariosSeleccionados([]);
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
     
     //const  handleInputChange = (e, { name, value }) => setState({ [name]: value })

     const paginarUsuariosConsulta = (inicio, final) =>{
     
      let listaUsuarios = usuariosConsulta.slice(inicio, final);
      
      setUsuarios(listaUsuarios);
    }


     const  handlePaginationChange = (e, { activePage }) =>{
      if(realizaConsulta){
        setCambioPaginacion(false);
        const final = (10 * activePage);
        const inicio = final - 10;

        console.log(inicio, final);
        setPaginacion({ ...paginacion,activePage });
        paginarUsuariosConsulta(inicio, final);
        const timer = setTimeout(() => {
          setCambioPaginacion(true);
        }, 250);
        return () => clearTimeout(timer);
      } else {
        setCambioPaginacion(false);
        console.log("TENIAMOS")
        console.log(inicioUsuariosPaginacion);
        console.log(finalUsuariosPaginacion);
        console.log(activePage);
        const valorInicio = activePage != 1 ? (10 * activePage -10):0;
        const valorFinal = 10
        // setInicioUsuariosPaginacion(2 * (activePage - 1));
        // setFinalUsuariosPaginacion((2 * activePage) - 1);
        setPaginacion({ ...paginacion,activePage });
          
    
          
          
          obtenerUsuariosLimitado(valorInicio,valorFinal);
          console.log("NOS QUEDOOO");
          console.log(inicioUsuariosPaginacion);
          console.log(finalUsuariosPaginacion);
          

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
                  < Input fluid placeholder='Search...' onChange={handleChangeTexto}/>
                 </Grid.Column>
                 <Grid.Column  id="consultar">
                 <label></label>
                 <Button className={inhabilitarBotonConsultar ? "disabled":""} primary onClick={handleClickConsultar}>Consultar</Button>
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
