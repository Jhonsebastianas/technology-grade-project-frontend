// import '../global.css'
import dynamic from "next/dynamic";
import Head from 'next/head'
import { APP_NAME } from '@constants/Constants'
import 'semantic-ui-css/semantic.min.css'

/** Generales */
import '@styles/variables.css'
import '@styles/dark-theme.css'

/** Home public */
import '@styles/css/first-page.css'
import '@styles/css/footer-public.css'
import '@styles/agradecimientos.css'
import '@styles/contactanos.css'
import '@styles/nosotros.css'
import '@styles/menuPublico.css'

/** Home private */
import '@styles/css/registro-hogar.css'
import '@styles/editarCuenta.css'
import '@styles/graficas.css'
import '@styles/informeConsumo.css'
import '@styles/ListaHogares.css'
import '@styles/menuPrivado.css'
import '@styles/modalEditarCuenta.css'
import '@styles/tarifas.css'
import '@styles/RegistroUsuario.css'
import '@styles/datosimportantes.css'
import '@styles/paginacion.css'





import { ToastProvider } from 'react-toast-notifications';

/**
 * Método que genera metricas importantes del proyecto
 * @param {*} metric 
 */
export function reportWebVitals(metric) {
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
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="theme-color" content="#000000" />
          <meta
            name="description"
            content="Una forma moderna e interactiva de administrar tu consumo en servicios públicos del agua y energía."
          />
          <meta name="keywords" content="servicios públicos, consumo de agua, consumo de energía, sensores" />
          <meta name="author" content={APP_NAME} />
          <meta name="copyright" content={APP_NAME} />
          <title>{APP_NAME}</title>

          {/*** Meta tags for social media ***/}
          {/* Essential META Tags */}
          <meta property="og:title" content="Controlsep: Administra tu consumo en servicios públicos del agua y energía." />
          <meta property="og:description" content="Controlsep es un proyecto creado por jóvenes apasionados por el desarrollo de software, para incentivar y permitir a las personas, medir el consumo del agua y energía en sus hogares, de forma automática por medio de sensores, o manual, digitando los registros del contador público." />
          <meta property="og:image" itemprop="image" content="https://controlsep.com/images/controlsep_presentation.png" />
          <meta property="og:url" content="https://controlsep.com/" />
          <meta property="og:type" content="website" />
          <meta name="twitter:card" content="summary_large_image"></meta>
          {/* Non-Essential, But Recommended */}
          <meta property="og:site_name" content="Controlsep."></meta>
          <meta name="twitter:image:alt" content="Preview website image"></meta>
        </Head>
        <Component {...pageProps} />
      </ToastProvider>
    </>
  )
}

export default MyApp