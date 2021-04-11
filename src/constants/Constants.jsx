const devConf = Object.freeze({
    // Información principal
    APP_NAME: 'Controlsep',
    // API
    API_ENDPOINT: 'http://localhost:3000/ha-backend/',
    //Tokens
    TOKEN_NAME: 'tkn_ha',
    //LocalStorage
    USER_NAME: 'user',
    // URL de la app desplegada:
    URL_APP: 'http://localhost:4200/'
})

const prodConf = Object.freeze({
    // Información principal
    APP_NAME: 'Controlsep',
    // API
    API_ENDPOINT: 'https://secops-backend.herokuapp.com/ha-backend/',
    //Tokens
    TOKEN_NAME: 'tkn_ha',
    //LocalStorage
    USER_NAME: 'user',
    // URL de la app desplegada:
    URL_APP: 'https://controlsep.com/'
});


module.exports = (process.env.NODE_ENV === 'development')? devConf: prodConf