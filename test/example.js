//To run this example:
//run terminal where this file is
//type "node example.js"

"use strict";
var moment = require('moment-timezone');
//var tg = require('sun-position_grena3');
const Test_Grena3 = require("sun-position_grena3");
var aza = Test_Grena3.AzimuthZenithAngle2;
const calcSunPos = new Test_Grena3(0, 0);
class Startup {
    static main() {
        //var mom = moment.utc("2015-06-12 15:34:11 GMT+0200 (CEST)", "YYYY-MM-DD HH:mm:ss ZZ");
        var mom = moment.utc("2018-02-07 14:00:00", "YYYY-MM-DD HH:mm:ss");
        var lat = 51.47625;
        var long = 7.24274;
        console.log('____________start test');
        console.log('Date(UTC): ' + mom.format("YYYY-MM-DD HH:mm:ss"));
        console.log('lat: ' + lat);
        console.log('long: ' + long);
        //aza = tg.calculateSolarPosition(mom, lat, long, 69, 1000, 20);
        //aza = tg.calcSunPos(mom, lat, long, 69, 1000, 20);
        aza = calcSunPos.calculateSolarPosition(mom, lat, long, 69, 1000, 20);
        console.log("Azimuth: " + aza.getAzimuth()); //51.608    //Horizontalwinkel
        console.log("ZenithAngle: " + aza.getZenithAngle()); //44.1425   //Winkel Zwischen Zenit und dem Zenter der Sonne
        console.log('____________end test');
    }
}
Startup.main();