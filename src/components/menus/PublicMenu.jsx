import React, { useState } from 'react'
import Link from 'next/link'
import { APP_NAME } from '@constants/Constants'
import styles from './PublicMenu.module.css'

const PublicMenu = ({ children }) => {

    const { navigation, hamBtn, links, link, span1, span2, span3, active } = styles;
    const [actualizarMenuCelular, setMenuCelular] = useState(false);

    const menuCelular = () => {
        const formulario = (actualizarMenuCelular) ? false : true;
        setMenuCelular(formulario);
    }

    return (
        <>
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
        </>
    )
}

export default PublicMenu;