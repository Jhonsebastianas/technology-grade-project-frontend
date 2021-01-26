import React, { useState } from 'react';
import { TextInput, Icon } from 'react-materialize';

const styles = {
    showPasswordDiv: {
        // right: '0px',
        cursor: 'pointer',
        zIndex: '9999',
        WebkitUserSelect: 'none',
        MozUserSelect: 'none',
        MsUserSelect: 'none',
        UserSelect: 'none',
    },
    showPasswordIcon: {
        cursor: 'pointer',
        zIndex: '9999',
    }
};

export function PasswordField(props) {

    const { showPasswordDiv, showPasswordIcon } = styles;

    // let visiblePassword = 'password';
    // let setVisiblePassword = (visiblePassword) => {
    //     this.visiblePassword = visiblePassword;
    // }

    /**  Mostramos y no mostramos la clave */
    const [visiblePassword, setVisiblePassword] = useState('password');
    const showPassword = () => {
        const typeInput = (visiblePassword === 'password') ? 'text' : 'password';
        setVisiblePassword(typeInput);
    }

    return (
        <TextInput type={visiblePassword}
            icon={<div style={showPasswordDiv} onClick={showPassword}><Icon style={showPasswordIcon}>visibility</Icon></div>}
            {...props}
        />
    );
}