import React, { useEffect, useState } from 'react'
import { APP_NAME } from '@constants/Constants'
import Link from 'next/link'
import { Icon } from 'semantic-ui-react'
import { useRouter } from 'next/router'

import { addNightTheme, menuToggle, removeMobileMenu, scrollHeaderChange } from '@components/menus/effectsMenu';


const PublicMenu = () => {

    const router = useRouter();

    const getCurrentView = () => {
        const routeArray = router.pathname.split('/')
        return routeArray[routeArray.length - 1]
    }

    const activeLink = getCurrentView()

    const [cantidadItems, setCantidadItems] = useState(6)

    const cantidadItemMenu = () => {
        return document.querySelectorAll('.nav__item').length
    }

    useEffect(() => {
        let mounted = true;
        if (mounted) {
            menuToggle();
            removeMobileMenu();
            scrollHeaderChange();
            addNightTheme();
            setCantidadItems(cantidadItemMenu() / 2);
        }
        return () => mounted = false;
    }, [])

    const isActiveLink = (name) => {
        return (name === activeLink) ? 'active-link' : ''
    }

    return (
        <header className="menu__privado header" id="header">
            <nav className="nav container-menu-nav">
                <a href="/home" className="nav__logo">{APP_NAME}</a>
                <div className="nav__menu" id="nav-menu">
                    <ul className="nav__list grid-menu-nav" style={{ "gridTemplateColumns": `repeat(${cantidadItems}, 1fr)` }}>
                        <li className="nav__item">
                            <Link href="/">
                                <a>
                                    <span className={`nav__link ${isActiveLink('')}`}>
                                        <Icon className="nav__icon" name="home" /> Inicio
                                    </span>
                                </a>
                            </Link>
                        </li>
                        <li className="nav__item">
                            <Link href="/nosotros">
                                <a>
                                    <span className={`nav__link ${isActiveLink('nosotros')}`}>
                                        <Icon className="nav__icon" name="user" /> Nosotros
                                    </span>
                                </a>
                            </Link>
                        </li>
                        <li className="nav__item">
                            <Link href="/contactanos">
                                <a>
                                    <span className={`nav__link ${isActiveLink('contactanos')}`}>
                                        <Icon className="nav__icon" name="alarm" /> Contáctanos
                                    </span>
                                </a>
                            </Link>
                        </li>
                    </ul>
                    {/* <i className="uil uil-times nav__close" id="nav-close"></i> */}
                    <Icon className="nav__close" name="delete" id="nav-close" />
                </div>

                <div className="nav__btns">
                    {/* Theme change button */}
                    {/* <i className="uil uil-moon change-theme" id="theme-button"></i> */}
                    <Icon className="change-theme" name="moon outline" id="theme-button" />

                    <div className="nav__toggle" id="nav-toogle">
                        {/* <i className="uil uil-apps"></i> */}
                        <Icon name="bars" />
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default PublicMenu