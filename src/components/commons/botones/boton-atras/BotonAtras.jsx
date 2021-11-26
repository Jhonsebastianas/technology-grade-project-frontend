import React from "react";
import { useRouter } from 'next/router';
import { Button } from "semantic-ui-react";
import Styled, { css } from 'styled-components';

const StyledContenedorAtras = Styled.div`
    ${props => props.isPublic && css`
        top: 10px;
    `}

    padding-left: 20px;
    position: absolute;
    z-index: 99;
    
    .btn-atras {
        background-color: var(--first-color);
        color: white;

        &:hover {
            background-color: var(--primary-color-dark);
            color: white;
        }

        &:focus {
            background-color: var(--primary-color-dark);
            color: white;
        }
    }
`;

const BotonAtras = (props) => {
    const router = useRouter();

    const volver = () => {
        if(props?.isPublic) {
            router.push("/"); 
        } else {
            router.back();
        }
    }

    console.log(props)

    return (
        <StyledContenedorAtras isPublic={props?.isPublic}>
            <Button className="btn-atras" size="large" floated='left' circular icon='arrow left' onClick={volver}></Button>
        </StyledContenedorAtras>
    )
}

export default BotonAtras;