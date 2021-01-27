import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
// import { LoginForm } from './LoginForm';
// CSS
import styles from '@styles/modules/Login.module.css';
// Materialize
import { Row, Col, Card  } from 'react-materialize';

export default function Login() {

    const { parallaxContainer, cardLogin, parallax } = styles;

    return (
        <div className={`parallax-container ${parallaxContainer}`}>
            <Row>
                <Col s={3}></Col>
                <Col s={12} m={6} l={6}>
                    <Card className={cardLogin}>
                        <div className="card-content">
                            <h6>INICIO DE SESIÓN</h6>
                            {/* <LoginForm /> */}
                            <div className="center-align">
                            <Link href='registro/recuperar-cuenta'><a>¿Olvidaste tu contraseña?</a></Link>
                            </div>
                            <a href="/" className="">VOLVER</a>
                        </div>
                    </Card>
                </Col>
                <div className={`parallax ${parallax}`}>
                    <Image 
                        alt="Unsplashed background img 1"
                        src="/images/JP_0.webp"
                        height="100dv"
                        width="auto"
                    />
                </div>
            </Row>
            <div className="col s2"></div>
        </div>
    );
}