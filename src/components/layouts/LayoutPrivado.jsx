import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import Menu from '@components/menus/MenuPrivado'
import loginUtils from '@utils/login.utils'

const Layout = ({ children }) => {

    const router = useRouter();

    useEffect(() => {
        if(!loginUtils.verifyAuth()) {
            router.push('login');
        }
    }, [])

    return (
        <>
            <Menu />
            {children}
        </>
    )
}

export default Layout;