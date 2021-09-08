import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
// import Menu from '@components/menus/MenuPrivado'
import MenuNew from '@components/menus/NewPrivateMenu';
import loginUtils from '@utils/login.utils';
import ServicesWorkers from "src/tools/services.workers";

const Layout = ({ children }) => {

    const router = useRouter();

    useEffect(() => {
        if (!loginUtils.verifyAuth()) {
            router.push('/login');
        }
        if ("serviceWorker" in navigator) {
            ServicesWorkers.configServicesWorkers();
          }
    }, [])

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