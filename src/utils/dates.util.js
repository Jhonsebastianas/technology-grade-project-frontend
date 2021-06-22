const { DateTime } = require('luxon');

const cpUtil = {
    getCurrentDate: function () {
        return DateTime.local().toISODate()
    },
    getCurrentDateTime: function () {
        return DateTime.local().toISO()
    },
    getCurrentDateWithFirstDayOfMounth: function () {
        return DateTime.fromObject({ day: 1, hour: 0, zone: 'local' }).toISODate()
    },
    getCurrentDateWithLastDayOfMounth: function () {
        return DateTime.fromObject({ day: 1, hour: 0, zone: 'local' }).plus({ month: 1 }).minus({ day: 1 }).toISODate()
    },
    // Notificaciones
    getDiaAndMes: function(date){
        const diaMes = DateTime.fromJSDate(date);
        return diaMes.toFormat("dd '/' MMMM");
    },
    getTiempo: function(date){
        const diaMes = DateTime.fromJSDate(date);
        return diaMes.toFormat("t a");
    },
    getMes: function () {
        return "0" + DateTime.local().get('month');
    },
    getDateWithFirstDayByMounth: function (month = getMes()) {
        return DateTime.fromObject({ day: 1, month: month, hour: 0, zone: 'local' }).toISODate()
    },
    getDateWithLastDayByMounth: function (month = getMes()) {
        return DateTime.fromObject({  month: month, hour: 23, minute: 40, second: 6, zone: 'local' }).endOf('month').minus({ day: 1 }).toISO()
    },
}


module.exports = cpUtil;