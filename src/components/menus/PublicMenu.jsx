import React, { useState } from 'react'
import Link from 'next/link'
import { Grid } from 'semantic-ui-react';


const PublicMenu = () => {

    const [actualizarMenuCelular, setMenuCelular] = useState(false);

    const menuCelular = () => {
        const formulario = (actualizarMenuCelular) ? false : true;
        setMenuCelular(formulario);
    }

    return (
        <Grid>
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
            <header>
                <a href="#" class="logo"></a>
                <ul>
                    <li><a href="/">Inicio</a></li>
                    <li><a href="/nosotros">Nosotros</a></li>
                    <li><a href="/contactanos">Contáctanos</a></li>
                </ul>
            </header>
        </Grid>
    )
}

export default PublicMenu;