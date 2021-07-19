import React from 'react'

import { Form, Icon } from 'semantic-ui-react';

const Enlace  = ({ onChange, onRemove, nombre_pagina, url}) =>{
    return (
        < Form.Group unstackable widths='equal' className='enlace-container'>
            <Form.Input 
                label='Nombre de la página'
                type="text" 
                name = 'nombre_pagina' 
                value={nombre_pagina}
                id='nombre_pagina' 
                placeholder="Página"  
                onChange={e => onChange("nombre_pagina", e.target.value)} 
            />
            <Form.Input 
                label='Url página' 
                type="text"  
                id='url' 
                name = 'url' 
                value={url}
                placeholder="Url"
                onChange={e => onChange("url", e.target.value)}
            />
            <Icon name='delete' aria-label = 'Eliminar enlace' onClick={onRemove} className='crearDato-deleteEnlace'/>
        </ Form.Group>
       
    );
} 

export default Enlace