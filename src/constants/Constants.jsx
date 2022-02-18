const devConf = Object.freeze({
    // Información principal
    APP_NAME: 'Controlsep',
    // API
    API_ENDPOINT: 'http://localhost:3000/ha-backend/',
    //Tokens
    TOKEN_NAME: 'tkn_controlsep',
    //LocalStorage
    USER_NAME: 'user',
    // URL de la app desplegada:
    URL_APP: 'http://localhost:4200/',
    //LocalStogare contrato hogar
    HOGAR: 'hogar',
    // Push notification
    PUBLIC_VAPID_KEY: "BDaLUJ1Jl9iVIeLF-zZik0qDgsS_rbzNnFcFMorD0PtfRnoRWQkhOsKqV-EQRCxexzc1fb7TF8Up_hRsk3Hc8fs",

    // URL MANUAL
    PATH_MANUAL: 'resources/documents/manual_de_usuario_controlsep.pdf'
})

const prodConf = Object.freeze({
    // Información principal
    APP_NAME: 'Controlsep',
    // API
    API_ENDPOINT: 'https://secops-backend.herokuapp.com/ha-backend/',
    //Tokens
    TOKEN_NAME: 'tkn_controlsep',
    //LocalStorage
    USER_NAME: 'user',
    // URL de la app desplegada:
    URL_APP: 'https://controlsep.com/',
    //LocalStogare contrato hogar
    HOGAR: 'hogar',
    // Push notification
    PUBLIC_VAPID_KEY: "BDaLUJ1Jl9iVIeLF-zZik0qDgsS_rbzNnFcFMorD0PtfRnoRWQkhOsKqV-EQRCxexzc1fb7TF8Up_hRsk3Hc8fs",

    // URL MANUAL
    PATH_MANUAL: 'resources/documents/manual_de_usuario_controlsep.pdf'
});


module.exports = (process.env.NODE_ENV === 'development') ? devConf : prodConf