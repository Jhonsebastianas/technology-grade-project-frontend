import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Menu } from 'semantic-ui-react'
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

    return (
        <Menu stackable>
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
                notificaciones
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
        </Menu>
    )
}

export default MenuPrivado;