import React from 'react'
import Menu from '@components/menus/PublicMenu'
import Footer from '@components/footers/FooterPublico'

const Layout = ({ children }) => {
    return (
        <>
            <Menu />
                {children}
            <Footer />
        </>
    )
}

export default Layout;