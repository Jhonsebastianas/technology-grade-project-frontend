import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
// import Menu from '@components/menus/MenuPrivado'
import MenuNew from '@components/menus/NewPrivateMenu'
import loginUtils from '@utils/login.utils'
import { serviciosLogin } from '@services/serviciosLogin'

const Layout = (props) => {

    const { children } = props

    const router = useRouter();

    useEffect(() => {
        if (!loginUtils.verifyAuth()) {
            router.push('/login');
        }
        const params = {};
        serviciosLogin.verificarAdmin(params, success, error);
    }, [])

    function success({ data }) {
        console.log(data)
        if (!data?.isAdmin) {
            router.push('/home');
        }
    }
    function error(error) {
        console.log(error);
    }

    return (
        <>
            <MenuNew />
            <div className="main">
                {children}
            </div>
        </>
    )
}

export default Layout;