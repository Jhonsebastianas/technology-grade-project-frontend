import React, { useState } from 'react'
import Link from 'next/link'
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
                        <li><Link href="/"><a>{APP_NAME}</a></Link></li>
                        <li><Link href="/"><a>Inicio</a></Link></li>
                        <li><Link href="/nosotros"><a>Nosotros</a></Link></li>
                        <li><Link href="/contactanos"><a>Contáctanos</a></Link></li>
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
                        <Link href="/"><a>Inicio</a></Link>
                    </div>
                    <div className="link">
                        <Link href="/nosotros"><a>Nosotros</a></Link>
                    </div>
                    <div className="link">
                        <Link href="/contactanos"><a>Contáctanos</a></Link>
                    </div>
                </div>
            </div>
        </Grid>
    )
}

export default PublicMenu;