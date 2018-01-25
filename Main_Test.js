"use strict";
exports.__esModule = true;
var Test_Grena3_1 = require("./Test_Grena3");
//var GregorianCalendarFormat = require('gregorian-calendar-format');
var GregorianCalendar = require('gregorian-calendar');
var Startup = /** @class */ (function () {
    function Startup() {
    }
    Startup.main = function () {
        var test = new GregorianCalendar();
        test.set(2015, GregorianCalendar.JUNE, 12, 13, 34, 11);
        var tg3 = new Test_Grena3_1.Test_Grena3(null, null);
        console.log('____________start test');
        var result = tg3.calculateSolarPosition(test, -3.107, -60.025, 69, 1000, 20);
        console.log(result.getAzimuth()); //51.608    //Horizontalwinkel
        console.log(result.getZenithAngle()); //44.1425   //Winkel Zwischen Zenit und dem Zenter der Sonne
        console.log('____________end test');
    };
    return Startup;
}());
Startup.main();
//# sourceMappingURL=Main_Test.js.map