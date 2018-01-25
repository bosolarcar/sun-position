"use strict";
exports.__esModule = true;
var AzimuthZenithAngle_1 = require("./AzimuthZenithAngle");
var GregorianCalendarFormat = require('gregorian-calendar-format');
var GregorianCalendar = require('gregorian-calendar');
var gregorianCalendar = new GregorianCalendar();
var Test_Grena3 = /** @class */ (function () {
    function Test_Grena3(azimuth, zenithAngle) {
        this.zenithAngle = zenithAngle;
        this.azimuth = azimuth;
    }
    Test_Grena3.prototype.calculateSolarPosition = function (date, latitude, longitude, deltaT, pressure, temperature) {
        var t = this.calcT(date);
        t = -16273.434594455084;
        console.log('calcT: ' + t);
        var tE = t + 1.1574e-5 * deltaT;
        var omegaAtE = 0.0172019715 * tE;
        var lambda = -1.388803 + 1.720279216e-2 * tE + 3.3366e-2 * Math.sin(omegaAtE - 0.06172)
            + 3.53e-4 * Math.sin(2.0 * omegaAtE - 0.1163);
        var epsilon = 4.089567e-1 - 6.19e-9 * tE;
        var sLambda = Math.sin(lambda);
        var cLambda = Math.cos(lambda);
        var sEpsilon = Math.sin(epsilon);
        var cEpsilon = Math.sqrt(1 - sEpsilon * sEpsilon);
        var alpha = Math.atan2(sLambda * cEpsilon, cLambda);
        if (alpha < 0) {
            alpha += 2 * Math.PI;
        }
        var delta = Math.asin(sLambda * sEpsilon);
        var H = 1.7528311 + 6.300388099 * t + this.deg2rad(longitude) - alpha;
        H = ((H + Math.PI) % (2 * Math.PI)) - Math.PI;
        if (H < -Math.PI) {
            H += 2 * Math.PI;
        }
        // end of "short procedure"
        var sPhi = Math.sin(this.deg2rad(latitude));
        var cPhi = Math.sqrt((1 - sPhi * sPhi));
        var sDelta = Math.sin(delta);
        var cDelta = Math.sqrt(1 - sDelta * sDelta);
        var sH = Math.sin(H);
        var cH = Math.cos(H);
        var sEpsilon0 = sPhi * sDelta + cPhi * cDelta * cH;
        var eP = Math.asin(sEpsilon0) - 4.26e-5 * Math.sqrt(1.0 - sEpsilon0 * sEpsilon0);
        var gamma = Math.atan2(sH, cH * sPhi - sDelta * cPhi / cDelta);
        // refraction correction (disabled for silly parameter values)
        var deltaRe = (temperature < -273 || temperature > 273 || pressure < 0 || pressure > 3000) ? 0.0 : (((eP > 0.0) ?
            (0.08422 * (pressure / 1000)) / ((273.0 + temperature) * Math.tan(eP + 0.003138 / (eP + 0.08919)))
            : 0.0));
        var z = Math.PI / 2 - eP - deltaRe;
        return new AzimuthZenithAngle_1.AzimuthZenithAngle2(this.rad2deg(gamma + Math.PI) % 360.0, this.rad2deg(z));
    };
    Test_Grena3.prototype.calcT = function (date) {
        var utc = new GregorianCalendar();
        utc = date;
        var monthf = new GregorianCalendarFormat('M');
        var yearf = new GregorianCalendarFormat('y');
        var dayf = new GregorianCalendarFormat('d');
        var hourf = new GregorianCalendarFormat('H');
        var minf = new GregorianCalendarFormat('m');
        var secf = new GregorianCalendarFormat('s');
        //GregorianCalendar utc = JulianDate.createUtcCalendar(date);
        var m = parseFloat(monthf.format(utc));
        var y = parseFloat(yearf.format(utc));
        var d = parseFloat(dayf.format(utc));
        var h = parseFloat(hourf.format(utc)) +
            parseFloat(minf.format(utc)) / 60 +
            parseFloat(secf.format(utc)) / (60 * 60);
        //console.log(h);
        if (m <= 2) {
            m += 12;
            y -= 1;
        }
        //Ergebnis weicht um -+2 ab von der Java Version
        return (365.25 * (y - 2000)) + (30.6001 * (m + 1))
            - (0.01 * y) + d + 0.0416667 * h - 21958;
    };
    //Umrechnung Grad zu Bogenmaß
    Test_Grena3.prototype.deg2rad = function (deg) {
        return (deg * Math.PI / 180.0);
    };
    //Umrechnung Bogenmaß zu Grad
    Test_Grena3.prototype.rad2deg = function (rad) {
        return (rad * 180.0 / Math.PI);
    };
    Test_Grena3.prototype.createUtcCalendar = function (fromCalendar) {
        var utcCalendar = new GregorianCalendar();
        utcCalendar.set(fromCalendar.getTimeInMillis, 'S');
        return utcCalendar;
    };
    return Test_Grena3;
}());
exports.Test_Grena3 = Test_Grena3;
//# sourceMappingURL=Test_Grena3.js.map