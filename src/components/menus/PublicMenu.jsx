import React, { useState } from 'react'
// import Link from 'next/link'
import { Grid } from 'semantic-ui-react';
import { APP_NAME } from '@constants/Constants'

const style = {
    menuColor: {
        backgroundColor: 'white',
    },
    colorNegro: {
        color: 'black'
    },
    link: {

    }
}

const PublicMenu = () => {

    const { menuColor, colorNegro } = style;
    const [actualizarMenuCelular, setMenuCelular] = useState(false);

    const menuCelular = () => {
        const formulario = (actualizarMenuCelular) ? false : true;
        setMenuCelular(formulario);
    }

    return (
        <Grid>
            <nav className="banner-superior">
                <div>
                    <ul className="banner-lista">
                        <li><a>{APP_NAME}</a></li>
                        <li><a>Inicio</a></li>
                        <li><a>Nosotros</a></li>
                        <li><a>Contáctanos</a></li>
                    </ul>
                </div>
            </nav>
            <div className={(actualizarMenuCelular) ? "navigation active" : "navigation"} onClick={menuCelular}>
                <div className={"ham-btn"}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className="links">
                    <div className="link">
                        <a href="#">Inicio</a>
                    </div>
                    <div className="link">
                        <a href="#">Nosotros</a>
                    </div>
                    <div className="link">
                        <a href="#">Contáctanos</a>
                    </div>
                </div>
            </div>
        </Grid>
    )
}

export default PublicMenu;