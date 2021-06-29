import React from 'react'

import { Segment, Dimmer, Loader } from 'semantic-ui-react';

const Loading = (props) => {

    return <>
        <Segment vertical id="carga">
            <Dimmer active inverted>
                <Loader size='large'>Cargando {props.pantalla}</Loader>
            </Dimmer>

        </Segment>
    </>
}

export default Loading