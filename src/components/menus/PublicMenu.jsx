import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { Grid, Icon } from 'semantic-ui-react';

import { addNightTheme } from '@components/menus/effectsMenu';

const PublicMenu = () => {

    const [actualizarMenuCelular, setMenuCelular] = useState(false);

    const menuCelular = () => {
        const formulario = (actualizarMenuCelular) ? false : true;
        setMenuCelular(formulario);
    }

    useEffect(() => {
        let mounted = true;
        if (mounted) {
            addNightTheme();
        }
        return () => mounted = false;
    }, [])

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
            <header className="menuPublico">
                <a href="#" className="logo"></a>
                <ul>
                    <li><Link href="/"><a>Inicio</a></Link></li>
                    <li><Link href="/nosotros"><a>Nosotros</a></Link></li>
                    <li><Link href="/contactanos"><a>Contáctanos</a></Link></li>
                    <li><Icon className="change-theme" name="moon outline" id="theme-button" /></li>
                    
                </ul>
            </header>
        </Grid>
    )
}

export default PublicMenu;