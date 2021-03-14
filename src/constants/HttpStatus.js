/**
 * DOCUMENTATION: https://httpstatuses.com/
 */
 const httpStatus = {
    OK: 200, // La solicitud se ha realizado correctamente.
    NO_CONTENT: 204, // El servidor ha cumplido con éxito la solicitud y no hay contenido adicional para enviar en el cuerpo de la carga útil de respuesta.
    BAD_REQUEST: 400, // El servidor no puede o no procesará la solicitud debido a algo que se percibe como un error del cliente (por ejemplo, sintaxis de solicitud mal formada, encuadre de mensaje de solicitud no válido o enrutamiento de solicitud engañoso).
    UNAUTHORIZED: 401, // La solicitud no se ha aplicado porque carece de credenciales de autenticación válidas para el recurso de destino.
    FORBIDDEN: 403, // El servidor entendió la solicitud pero se niega a autorizarla.
    CONFLICT: 409, // La solicitud no se pudo completar debido a un conflicto con el estado actual del recurso de destino. Este código se utiliza en situaciones en las que el usuario podría resolver el conflicto y volver a enviar la solicitud.
    PRECONDITION_FAILED: 412, // Este código de respuesta permite al cliente colocar condiciones previas en el estado actual del recurso (sus representaciones y metadatos actuales) y, por lo tanto, evitar que se aplique el método de solicitud si el recurso de destino se encuentra en un estado inesperado.
    UNPROCESSABLE_ENTITY: 422, // Por ejemplo, esta condición de error puede ocurrir si el cuerpo de una solicitud XML contiene instrucciones XML bien formadas (es decir, sintácticamente correctas), pero semánticamente erróneas.
    INTERNAL_SERVER_ERROR: 500, // El servidor encontró una condición inesperada que le impidió cumplir con la solicitud.
};

export default httpStatus