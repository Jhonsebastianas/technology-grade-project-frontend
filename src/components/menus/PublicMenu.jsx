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
                        <li><a href="">{APP_NAME}</a></li>
                        <li><a href="">Inicio</a></li>
                        <li><a href="">Nosotros</a></li>
                        <li><a href="">Contáctanos</a></li>
                    </ul>
                </div>
            </nav>
            <div class={(actualizarMenuCelular) ? "navigation active" : "navigation"} onClick={menuCelular}>
                <div class={"ham-btn"}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div class="links">
                    <div class="link">
                        <a href="#">Inicio</a>
                    </div>
                    <div class="link">
                        <a href="#">Nosotros</a>
                    </div>
                    <div class="link">
                        <a href="#">Contáctanos</a>
                    </div>
                </div>
            </div>
        </Grid>
    )
}

export default PublicMenu;