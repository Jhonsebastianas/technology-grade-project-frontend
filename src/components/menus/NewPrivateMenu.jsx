import React, { useEffect, useState } from 'react'
import { APP_NAME } from '@constants/Constants'
import Link from 'next/link'
import { Icon } from 'semantic-ui-react'
import StyledComponents from 'styled-components'
import LoginUtils from '@utils/login.utils'
import { useToasts } from 'react-toast-notifications'
import { useRouter } from 'next/router'

/** Change background header */
const scrollHeaderChange = () => {
    function scrollHeader() {
        const nav = document.getElementById('header')
        if (this.scrollY >= 80) {
            nav?.classList?.add('scroll-header')
        } else {
            nav?.classList?.remove('scroll-header')
        }
    }
    window.addEventListener('scroll', scrollHeader)
}


/** Menú para celular */
function showMenu() {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.add('show-menu')
}

function hiddenMenu() {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}

const menuToggle = () => {
    const navToogle = document.getElementById('nav-toogle'),
        navClose = document.getElementById('nav-close')

    if (navToogle) {
        navToogle.addEventListener('click', showMenu)
    }

    if (navClose) {
        navClose.addEventListener('click', hiddenMenu)
    }

}

const removeMobileMenu = () => {
    const navLink = document.querySelectorAll('.nav__link')

    navLink.forEach(links => links.addEventListener('click', hiddenMenu))
}

/** Night theme */
const addNightTheme = () => {
    const themeButton = document.getElementById('theme-button')
    const darkTheme = 'dark-theme'
    const iconTheme = 'sun'

    // Previously selected topic
    const selectedTheme = localStorage.getItem('selected-theme')
    const selectedIcon = localStorage.getItem('selected-icon')

    // We obtain the current theme that the interface has by validating the dark-theme class
    const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
    const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'moon outline' : 'sun'

    // We validate if the user previously chose a topic
    if (selectedTheme) {
        console.log("Tema seleccionado: ", document.body.classList.contains(darkTheme) ? 'dark' : 'light')
        // if the validation is fulfilled, we ask what the issue was to know if we activated or deactivate the dark theme
        window.addEventListener('load', function () {
            document.body.classList[(selectedTheme === 'dark') ? 'add' : 'remove'](darkTheme)
            themeButton.classList[(selectedIcon === 'moon outline') ? 'add' : 'remove'](iconTheme)
        })
    }

    // Active / deactivate the theme manually with the button

    themeButton.addEventListener('click', () => {
        // Add or remove the dark / icon theme
        document.body.classList.toggle(darkTheme)
        themeButton.classList.toggle(iconTheme)
        // We save the theme and the current icon that the user chose
        localStorage.setItem('selected-theme', getCurrentTheme)
        localStorage.setItem('selected-icon', getCurrentIcon)
    })
}

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
                                        <Icon className="nav__icon" name="alarm" /> Notifiaciones
                                    </span>
                                </a>
                            </Link>
                        </li>
                        {isAdmin &&
                            <li className="nav__item">
                                <Link href="/home/tarifas">
                                    <a>
                                        <span className={`nav__link ${isActiveLink('tarifas')}`}>
                                            <Icon className="nav__icon" name="file alternate" /> Tarifas
                                        </span>
                                    </a>
                                </Link>

                            </li>
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