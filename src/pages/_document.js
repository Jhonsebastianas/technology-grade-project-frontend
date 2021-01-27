import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="es">
        <Head>
          {/** FavIcon */}
          <link rel="icon" href="/favicon.ico"/>
          {/** WebFont */}
          {/** stylesheets */}
          {/*manifest.json provides metadata used when your web app is installed on a
             user's mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/ */}
          <link rel="manifest" href="/manifest.json" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"></link>
          {/** scripts */}
        </Head>
        <body className="my-body-class">
          <Main />
          <NextScript />
          {/* <!-- Materialize --> */}
          <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
        </body>
      </Html>
    )
  }
}

export default MyDocument