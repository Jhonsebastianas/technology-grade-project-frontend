import React from 'react'

import { Segment, Dimmer, Loader } from 'semantic-ui-react';

const Loading = ({pantalla}) => {

    return <>
        <Segment vertical className="carga">
            <Dimmer active inverted>
                <Loader size='large' active inline='centered'>Cargando {pantalla}</Loader>
            </Dimmer>

        </Segment>
    </>
}

export default Loading