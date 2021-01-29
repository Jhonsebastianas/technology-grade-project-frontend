import React, { useState, useEffect } from 'react';
import { Accordion, Card, Grid, GridColumn, Icon } from 'semantic-ui-react'
import ServiciosHogares from '@services/servicios.hogares'
import loginUtils from '@utils/login.utils'
import Image from 'next/image';

const ListaHogares = () => {

    const [listaHogares, setListaHogares] = useState([]);
    const [activeIndex, setActiveIndex] = useState(-1);

    const handleClick = (e, titleProps) => {
        const { index } = titleProps
        const newIndex = activeIndex === index ? -1 : index
        setActiveIndex(newIndex)
    }

    useEffect(() => {
        let mounted = true;
        console.log(mounted)
        ServiciosHogares.getHogaresByUsername(loginUtils.getUsernameUser(), ({ data }) => {
            if (mounted) {
                setListaHogares(data);
            }
        }, (error) => {
        });
        return () => mounted = false;
    }, [])


    return (
        <>
            <Accordion fluid styled>
                {listaHogares.map((hogar, index) => {
                    return (
                        <>
                            <Accordion.Title
                                active={activeIndex === 0}
                                index={index}
                                onClick={handleClick}
                            >
                                <Icon name='dropdown' />
                                <Icon name={(hogar.tipoHogar === 'casa') ? 'home' : 'building'} />
                                {hogar.nombre}
                            </Accordion.Title>
                            <Accordion.Content active={activeIndex === 0}>
                                <Grid>
                                    <GridColumn width={16}>
                                        <h4>Información de tu hogar</h4>
                                        <p>Contrato: {hogar.numeroContrato} | Estrato: {hogar.estrato} | Tipo hogar: {hogar.tipoHogar}</p>
                                    </GridColumn>
                                    <GridColumn width={16}>
                                        <h4>Información de tus servicios</h4>
                                        {hogar.servicios.map(servicio => {
                                            return (
                                                <Card>
                                                    {/* <Image 
                                                        src={`/images/servicios/${servicio.img}`}
                                                        wrapped 
                                                        ui={false}
                                                        alt={`imagen-${servicio}`}
                                                    /> */}
                                                    <Card.Content>
                                                        <Card.Header>{servicio}</Card.Header>
                                                        <Card.Meta>
                                                            <span className='date'>Última actualización 28/01/2021</span>
                                                        </Card.Meta>
                                                        <Card.Description>
                                                            Esto es una descripción
                                                        </Card.Description>
                                                    </Card.Content>
                                                    <Card.Content extra>
                                                        <a>
                                                            <Icon name='user' />
                                                    ver al detalle
                                                </a>
                                                    </Card.Content>
                                                </Card>
                                            )
                                        })}

                                    </GridColumn>
                                </Grid>
                            </Accordion.Content>
                        </>
                    )
                })}
            </Accordion>
        </>
    )
}



// const ListaHogares = () => {

//     const [listaHogares, setListaHogares] = useState([]);

//     useEffect(() => {
//         let mounted = true;
//         console.log(mounted)
//         Services.getHogaresByUsername(LoginUtils.getUsernameUser(), ({ data }) => {
//             if (mounted) {
//                 setListaHogares(data);
//             }
//         }, (error) => {

//         });
//         return () => mounted = false;
//     }, [])

//     return (
//         <div>
//             <Collapsible accordion popout >
//                 {listaHogares.map(hogar => {
//                     return (
//                         <CollapsibleItem className={`${Styles.itemHogar}`}
//                             //expanded
//                             header={hogar.nombre}
//                             icon={<Icon>{(hogar.tipoHogar === 'casa') ? 'home' : 'apartment'}</Icon>}
//                             node="div"
//                         >
//                             <Col m={12}>
//                                 Información de tu hogar: {hogar.nombre}
//                             </Col>
//                             <Row>
//                                 <CardPanel className="">
//                                     <span className="black-text">
//                                         Contrato: {hogar.numeroContrato} | Tipo hogar: {hogar.tipoHogar} | Estrato: {hogar.estrato}
//                                     </span>
//                                 </CardPanel>
//                                 <Row>
//                                     <Col m={12}>
//                                         Información de tus servicios
//                                     </Col>
//                                     {hogar.servicios.map(servicio => {
//                                         return (
//                                             <Col m={6}>
//                                                 <Card
//                                                     actions={[
//                                                         <a key="1" href="">Ver al detalle</a>
//                                                     ]}
//                                                     closeIcon={<Icon>close</Icon>}
//                                                     header={<CardTitle alt={`imagen-${servicio}`} image={(servicio === 'Agua') ? imgAgua : imgEnergia} />}
//                                                     horizontal
//                                                     revealIcon={<Icon>more_vert</Icon>}
//                                                 >
//                                                     {servicio}
//                                                 </Card>
//                                             </Col>
//                                         );
//                                     })}
//                                 </Row>
//                             </Row>

//                         </CollapsibleItem>
//                     );
//                 })}
//             </Collapsible>
//         </div>
//     )
// }


export default ListaHogares