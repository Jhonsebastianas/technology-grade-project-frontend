/**
 * DOCUMENTACIÓN BY GOOGLE: 
 * https://developers.google.com/web/fundamentals/primers/service-workers/registration?hl=es
 * Fazt: https://www.youtube.com/watch?v=B3O__1IiVIY
 */

import { PUBLIC_VAPID_KEY, API_ENDPOINT } from "@constants/Constants";

export default class ServicesWorkers {
    static configServicesWorkers() {
        window.addEventListener("load", cargarServicesWorkers);
    }
};

/**
 * Functión que permite registrar los service worker
 */
function cargarServicesWorkers() {
    navigator.serviceWorker.register("/sw.default.js").then(registradoSwExitoso, registroSwFallido);
    // Push notification
    navigator.serviceWorker.register("/sw/sw.push-notificacion.js", { scope: "/sw/" }).then(subscribe, registroSwFallido);
}

/**
 * Push notification
 * https://stackoverflow.com/questions/39624676/uncaught-in-promise-domexception-subscription-failed-no-active-service-work/39673915
 */
function subscribe(registration) {
    // Validamos en que esta se encuentra el service worker
    const serviceWorker = registration.installing || registration.waiting || registration.active;
    if (serviceWorker) {
        console.log("sw current state", serviceWorker.state);
        if (serviceWorker.state == "activated") {
            //If push subscription wasnt done yet have to do here
            console.log("sw already activated - Do watever needed here");
        }
        serviceWorker.addEventListener("statechange", function (event) {
            console.log("sw statechange : ", event.target.state);
            if (event.target.state == "activated") {
                // use pushManger for subscribing here.
                console.log("Just now activated. now we can subscribe for push notification");
                registration.pushManager.subscribe({
                    "userVisibleOnly": true,
                    "applicationServerKey": urlBase64ToUint8Array(PUBLIC_VAPID_KEY),
                }).then(function (subscription) {
                    const ruta = API_ENDPOINT + "notificaciones/subscribe-push-notification";
                    fetch(ruta, {
                        method: 'POST',
                        body: JSON.stringify(subscription),
                        headers: {
                            "Content-Type": "application/json",
                        }
                    })
                    // ServiciosNotificaciones.subscribePushNotification(subscription, function(data) {
                    //     console.log('Push notification data:', data);
                    // }, function (error) {
                    //     console.log(error);
                    // });
                })
            }
        });
    }
}

// Web-Push
// Public base64 to Uint
function urlBase64ToUint8Array(base64String) {
    var padding = '='.repeat((4 - base64String.length % 4) % 4);
    var base64 = (base64String + padding)
        .replace(/\-/g, '+')
        .replace(/_/g, '/');

    var rawData = window.atob(base64);
    var outputArray = new Uint8Array(rawData.length);

    for (var i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
}

/**
 * ELIMINAR SERVICES WORKERS MANUAL.
    navigator.serviceWorker.getRegistrations().then(function(registrations) {
    for(let registration of registrations) {
    registration.unregister()
    } })
 */


/**
 * Other services workers
 */
function registradoSwExitoso(registration) {
    console.log("Service Worker registration successful with scope: ", registration.scope);
}

function registroSwFallido(err) {
    console.log("Service Worker registration failed: ", err);
}