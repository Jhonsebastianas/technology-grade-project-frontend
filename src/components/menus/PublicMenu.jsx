import React, { useState } from 'react'
import Link from 'next/link'
import { Navbar, NavItem, Icon, Row } from 'react-materialize'
import { APP_NAME } from '@constants/Constants'
import styles from './PublicMenu.module.css'

const style = {
    menuColor: {
        backgroundColor: 'white',
    },
    colorNegro: {
        color: 'black'
    }
}

const PublicMenu = ({ children }) => {

    const { menuColor, colorNegro } = style;
    const { navigation, hamBtn, links, link, span1, span2, span3, active } = styles;
    const [actualizarMenuCelular, setMenuCelular] = useState(false);

    const menuCelular = () => {
        const formulario = (actualizarMenuCelular) ? false : true;
        setMenuCelular(formulario);
    }

    return (
        <Row>
            <Navbar style={menuColor}
                alignLinks="right"
                brand={<Link href='/' className="brand-logo"><a>{APP_NAME}</a></Link>}
                centerChildren
                id="mobile-nav"
                menuIcon={<Icon style={colorNegro}>menu</Icon>}
                options={{
                    draggable: true,
                    edge: 'left',
                    inDuration: 250,
                    onCloseEnd: null,
                    onCloseStart: null,
                    onOpenEnd: null,
                    onOpenStart: null,
                    outDuration: 200,
                    preventScrolling: true
                }}
            >
                <NavItem href="/" style={colorNegro}>
                    Inicio
            </NavItem>
                <NavItem href="/nosotros" style={colorNegro}>
                    Nosotros
            </NavItem>
                <NavItem href="/contactanos" style={colorNegro}>
                    Contáctanos
            </NavItem>
            </Navbar>
            <div className={(actualizarMenuCelular) ? navigation + " " + active : navigation}>
                <div className={hamBtn} onClick={menuCelular}>
                    <span className={span1}></span>
                    <span className={span2}></span>
                    <span className={span3}></span>
                </div>
                <div className={links}>
                    <div >
                        <a className={link} href="#">Home</a>
                    </div>
                    <div >
                        <a className={link} href="#">Dashb</a>
                    </div>
                    <div >
                        <a className={link} href="#">About</a>
                    </div>
                    <div >
                        <a className={link} href="#">Contac</a>
                    </div>
                </div>
            </div>
        </Row>
    )
}

export default PublicMenu;