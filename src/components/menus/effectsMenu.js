/** Change background header */
export const scrollHeaderChange = () => {
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
export function showMenu() {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.add('show-menu')
}

export function hiddenMenu() {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}

export const menuToggle = () => {
    const navToogle = document.getElementById('nav-toogle'),
        navClose = document.getElementById('nav-close')

    if (navToogle) {
        navToogle.addEventListener('click', showMenu)
    }

    if (navClose) {
        navClose.addEventListener('click', hiddenMenu)
    }

}

export const removeMobileMenu = () => {
    const navLink = document.querySelectorAll('.nav__link')

    navLink.forEach(links => links.addEventListener('click', hiddenMenu))
}

/** Night theme */
export const addNightTheme = () => {
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