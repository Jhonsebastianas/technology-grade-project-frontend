import React, { useState } from 'react';
import { Form, Input, Icon } from 'semantic-ui-react';

export function PasswordField(props) {

    const { validator, id, name, label, ...newProps } = props

    /**  Mostramos y no mostramos la clave */
    const [visiblePassword, setVisiblePassword] = useState('password');
    const showPassword = () => {
        const typeInput = (visiblePassword === 'password') ? 'text' : 'password';
        setVisiblePassword(typeInput);
    }

    return (
        <>
            <Form.Field>
                <label htmlFor={id}>Clave:</label>
                <Input type={visiblePassword} name={name} id={id} 
                    icon={<Icon name={(visiblePassword === 'password')? 'eye slash': 'eye'} circular link onClick={showPassword} />} iconPosition='left'
                    {...newProps}
                />
                {validator}
            </Form.Field>
        </>
    );
}