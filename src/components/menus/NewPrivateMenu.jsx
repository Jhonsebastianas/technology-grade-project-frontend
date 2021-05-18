import React, { useEffect, useState } from 'react'
import { APP_NAME } from '@constants/Constants'
import Link from 'next/link'
import { Icon } from 'semantic-ui-react'
import StyledComponents from 'styled-components'
import LoginUtils from '@utils/login.utils'
import { useToasts } from 'react-toast-notifications'
import { useRouter } from 'next/router'

const StyledHeader = StyledComponents.header`
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: var(--z-fixed);
    background-color: var(--body-color);
    border-bottom: 2px solid var(--first-color);


    .container-menu-nav {
        max-width: 768px;
        margin-left: var(--mb-1-5);
        margin-right: var(--mb-1-5);
    }

    .grid-menu-nav {
        display: grid;
        gap: 1.5rem;
    }

    .show-menu {
        bottom: 0;
    }

    .active-link {
        color: var(--first-color);
    }

    // Change background header
    .scroll-header {
        box-shadow: 0 -1px 4px rgba(0, 0, 0, .15);
    }

    /*========== Button Dark/Light ==========*/

    .nav__btns {
        display: flex;
        align-items: center;
    }

    .change-theme {
        font-size: 1.25rem;
        color: var(--title-color);
        margin-right: var(--mb-1);
        cursor: pointer;
    }

    .change-theme:hover {
        color: var(--first-color);
    }

    /* For small devices */
    @media screen and (max-width: 350px) {
        /** MENÚ */
        .nav__menu {
            padding: 2rem .25rem 4rem !important;
        }
        .nav__list {
            column-gap: 0 !important;
        }
    }

    /* For medium devices */
    @media screen and (min-width: 768px) {
        top: 0 !important;
        bottom: initial !important;
        padding: 0 1rem;
        
        .nav__icon, .nav__close, .nav__toggle {
            display: none;
        }

        .nav__list {
            display: flex;
            column-gap: 2rem;
        }
        .nav__menu {
            margin-left: auto;
        }
        .change-theme {
            margin: 0px !important;
        }
    }

    // /* For large devices */
    // @media screen and (min-width: 1024px) {
    //     padding: 0;
    // }
`

const StyledNav = StyledComponents.nav`
    max-width: 968px !important;
    height: var(--header-height);
    display: flex;
    justify-content: space-between;
    align-items: center;

    .nav__logo, 
    .nav__toggle {
        color: var(--title-color);
        font-weight: var(--font-semi-bold);
    }

    .nav__logo {
        font-size: 1.1rem;
        &:hover {
            color: var(--first-color);
        }
    }

    .nav__toggle {
        font-size: 1.1rem;
        cursor: pointer;

        &:hover {
            color: var(--first-color);
        }
    }

    /* For medium devices */
    @media screen and (min-width: 768px) {
        height: calc(var(--header-height) + 1.5rem) !important;
        column-gap: 1rem !important;
    }
`

const StyledNavMenu = StyledComponents.div`

    .nav__list {
        list-style-type: none;
        grid-template-columns: repeat(3, 1fr);
        gap: 2rem;
    }

    .nav__link {
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: var(--normal-font-size);
        color: var(--title-color);
        font-weight: var(--font-medium);

        &:hover {
            color: var(--first-color);
        }
    }

    .nav__icon {
        font-size: 1.2rem;
    }

    .nav__close {
        position: absolute;
        right: 1.3rem;
        bottom: .5rem;
        font-size: 1.5rem;
        cursor: pointer;
        color: var(--first-color);

        &:hover {
            color: var(--first-color-alt);
        }
    }

    /** For small devices */
    // @media screen and (max-width: 350px) {
    //     padding: 2rem .25rem 4rem !important;
    // }

    // Responsive
    @media screen and (max-width: 767px) {
        position: fixed;
        bottom: -100%;
        left: 0;
        width: 100%;
        background-color: var(--body-color);
        padding: 2rem 1.5rem 4rem;
        box-shadow: 0 -1px 4px rgba(0, 0, 0, .15);
        border-radius: 1.5rem 1.5rem 0 0;

        transition: .3s;
    }
`

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
        // if the validation is fulfilled, we ask what the issue was to know if we activated or deactivate the dark theme
        document.body.classList[(selectedTheme === 'dark') ? 'add' : 'remove'](darkTheme)
        themeButton.classList[(selectedIcon === 'moon outline') ? 'add' : 'remove'](iconTheme)
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

    useEffect(() => {
        let mounted = true;
        if (mounted) {
            menuToggle()
            removeMobileMenu()
            scrollHeaderChange()
            addNightTheme()
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
        <StyledHeader className="header" id="header">
            <StyledNav className="nav container-menu-nav">
                <a href="#" className="nav__logo">{APP_NAME}</a>
                <StyledNavMenu className="nav__menu" id="nav-menu">
                    <ul className="nav__list grid-menu-nav">
                        <li className="nav__item">
                            <Link href="/home">
                                <a className={`nav__link ${isActiveLink('home')}`}>
                                    <Icon className="nav__icon" name="home" /> Hogares
                                </a>
                            </Link>
                        </li>
                        <li className="nav__item">
                            <Link href="/home/perfil">
                                <a className={`nav__link ${isActiveLink('perfil')}`}>
                                    <Icon className="nav__icon" name="user" /> Perfil
                                </a>
                            </Link>
                        </li>
                        <li className="nav__item">
                            <Link href="/home/notificaciones">
                                <a className={`nav__link ${isActiveLink('notificaciones')}`}>
                                    <Icon className="nav__icon" name="alarm" /> Notifiaciones
                                </a>
                            </Link>
                        </li>
                        <li className="nav__item">
                            <Link href="/home/tarifas">
                                <a className={`nav__link ${isActiveLink('tarifas')}`}>
                                    <Icon className="nav__icon" name="file alternate" /> Tarifas
                                </a>
                            </Link>

                        </li>
                        <li className="nav__item">
                            <Link href="/">
                                <a className="nav__link" onClick={singOff}>
                                    <Icon className="nav__icon" name="log out" /> Cerrar sesión
                                </a>
                            </Link>
                        </li>
                    </ul>
                    {/* <i className="uil uil-times nav__close" id="nav-close"></i> */}
                    <Icon className="nav__close" name="delete" id="nav-close" />
                </StyledNavMenu>

                <div className="nav__btns">
                    {/* Theme change button */}
                    {/* <i className="uil uil-moon change-theme" id="theme-button"></i> */}
                    <Icon className="change-theme" name="moon outline" id="theme-button" />

                    <div className="nav__toggle" id="nav-toogle">
                        {/* <i className="uil uil-apps"></i> */}
                        <Icon name="bars" />
                    </div>
                </div>
            </StyledNav>
        </StyledHeader>
    )
}

export default Header