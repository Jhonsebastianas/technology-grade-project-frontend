// import '../global.css'
import dynamic from "next/dynamic";
import Head from 'next/head'
import { APP_NAME } from '@constants/Constants'
import 'semantic-ui-css/semantic.min.css'
/** Estilos propios */
import '@styles/RegistroUsuario.css'

import { ToastProvider } from 'react-toast-notifications';

/**
 * Método que genera metricas importantes del proyecto
 * @param {*} metric 
 */
export function reportWebVitals (metric) {
  console.log(metric);
}

const MyApp = ({ Component, pageProps }) => {
  // Aditional props
  // Aditional layout
  // Manejar errores - componentDidCatch
  return (
    <>
      <ToastProvider>
        <Head>
          <title>{APP_NAME}</title>
        </Head>
        <Component {...pageProps} />
      </ToastProvider>
    </>
  )
}

export default MyApp