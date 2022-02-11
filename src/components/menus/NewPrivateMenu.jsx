import React, { useEffect, useState } from 'react'
import { APP_NAME } from '@constants/Constants'
import Link from 'next/link'
import { Icon } from 'semantic-ui-react'
import StyledComponents from 'styled-components'
import LoginUtils from '@utils/login.utils'
import { useToasts } from 'react-toast-notifications'
import { useRouter } from 'next/router'

import { addNightTheme, menuToggle, removeMobileMenu, scrollHeaderChange } from '@components/menus/effectsMenu';


const Header = () => {

    const router = useRouter();
    const { addToast } = useToasts();

    const getCurrentView = () => {
        const routeArray = router.pathname.split('/')
        return routeArray[routeArray.length - 1]
    }

    const activeLink = getCurrentView()

    const [cantidadItems, setCantidadItems] = useState(6)
    const [isAdmin, setIsAdmin] = useState(false);

    const cantidadItemMenu = () => {
        return document.querySelectorAll('.nav__item').length
    }

    const setRoles = () => {
        const roles = LoginUtils.getRoles();
        setIsAdmin(roles.includes('ADMIN'));
    }

    useEffect(() => {
        let mounted = true;
        if (mounted) {
            setRoles();
            menuToggle();
            removeMobileMenu();
            scrollHeaderChange();
            addNightTheme();
            setCantidadItems(cantidadItemMenu() / 2);
        }
        return () => mounted = false;
    }, [])

    const singOff = () => {
        LoginUtils.SignOff();
        addToast('Sesión cerrada con éxito', { appearance: 'success', autoDismiss: true, });
        router.push("/");
    }

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
                            <Link href="/home">
                                <a>
                                    <span className={`nav__link ${isActiveLink('home')}`}>
                                        <Icon className="nav__icon" name="home" /> Hogares
                                    </span>
                                </a>
                            </Link>
                        </li>
                        <li className="nav__item">
                            <Link href="/home/perfil">
                                <a>
                                    <span className={`nav__link ${isActiveLink('perfil')}`}>
                                        <Icon className="nav__icon" name="user" /> Perfil
                                    </span>
                                </a>
                            </Link>
                        </li>
                        <li className="nav__item">
                            <Link href="/home/notificaciones">
                                <a>
                                    <span className={`nav__link ${isActiveLink('notificaciones')}`}>
                                        <Icon className="nav__icon" name="alarm" /> Notificaciones
                                    </span>
                                </a>
                            </Link>
                        </li>
                        {isAdmin &&
                            [<li className="nav__item">
                                <Link href="/home/tarifas">
                                    <a>
                                        <span className={`nav__link ${isActiveLink('tarifas')}`}>
                                            <Icon className="nav__icon" name="file alternate" /> Tarifas
                                        </span>
                                    </a>
                                </Link>

                            </li>,
                            <li className="nav__item">
                                <Link href="/datosimportantes">
                                    <a>
                                        <span className={`nav__link ${isActiveLink('tips')}`}>
                                            <Icon className="nav__icon" name="lightbulb outline" /> Tips
                                        </span>
                                    </a>
                                </Link>
                            </li>
                            ]
                        }

                        <li className="nav__item">
                            <Link href="/">
                                <a>
                                    <span className="nav__link" onClick={singOff}>
                                        <Icon className="nav__icon" name="log out" /> Cerrar sesión
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

export default Header