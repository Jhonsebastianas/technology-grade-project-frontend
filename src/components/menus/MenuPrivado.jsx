import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Grid } from 'semantic-ui-react'
import loginUtils from '@utils/login.utils'
import { useToasts } from 'react-toast-notifications';
import Image from 'next/image'

const MenuPrivado = () => {

    const [activeItem, setActiveItem] = useState();

    const router = useRouter();
    const { addToast } = useToasts();

    const handleItemClick = (event, { name }) => setActiveItem(name);

    const singOff = () => {
        loginUtils.SignOff();
        addToast('Sesión cerrada con éxito', { appearance: 'success', autoDismiss: true, });
        router.push("/");
    }

    const [actualizarMenuCelular, setMenuCelular] = useState(false);

    const menuCelular = () => {
        const formulario = (actualizarMenuCelular) ? false : true;
        setMenuCelular(formulario);
    }

    return (
        /*<Menu stackable id="menuPrivado">
            <Menu.Item>
                <Image
                    alt="logo app"
                    src="/logo-app-circular.png"
                    width="50px"
                    height="50px"
                />
            </Menu.Item>

            <Menu.Item
                name='home'
                active={activeItem === 'home'}
                onClick={handleItemClick}
            >
                <Link href="/home"><a>inicio</a></Link>
            </Menu.Item>
            
            <Menu.Item
                name='notificaciones'
                active={activeItem === 'notificaciones'}
                onClick={handleItemClick}
            >
                <Link href="/home"><a>notificaciones</a></Link>
            </Menu.Item>
            
            <Menu.Item
                name='perfil'
                active={activeItem === 'perfil'}
                onClick={handleItemClick}
            >
                <Link href="/home/perfil"><a>perfil</a></Link>
            </Menu.Item>

            <Menu.Item
                name='cerrar-sesion'
                active={activeItem === 'cerrar-sesion'}
                onClick={singOff}
            >
                cerrar sesión
            </Menu.Item>
    </Menu>*/
    <Grid>
            <div className={(actualizarMenuCelular) ? "navigation active" : "navigation"} onClick={menuCelular}>
                <div className={"ham-btn"}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className="links">
                    <div className="link">
                        <Link href="/home"><a>Inicio</a></Link>
                    </div>
                    <div className="link">
                        <Link href="/home/perfil"><a>Perfil</a></Link>
                    </div>
                    <div className="link">
                        <Link href="/home/notificaciones"><a>Notificaciones</a></Link>
                    </div>
                    <div className="link">
                        <Link href="/" ><a onClick={singOff}>Cerrar sesion</a></Link>
                    </div>
                </div>
            </div>
            <header className="menuPrivado">
                <a href="#" class="logo"></a>
                <ul>
                    <li><a href="/home">Inicio</a></li>
                    <li><a href="/home/notificaciones">Notificaciones</a></li>
                    <li><a href="/home/perfil">Perfil</a></li>
                    <li><a href="/" onClick={singOff}>Cerrar sesion</a></li>
                </ul>
            </header>
        </Grid>
        /**
         * 
         *     background-image: url(/images/contactanos/arcoAzulContactanosInverso.svg);
    background-position-x: right;
    background-position-y: bottom;
    background-repeat: no-repeat;
    background-size: 54%;
         */
    )
}

export default MenuPrivado;