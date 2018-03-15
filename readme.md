TEST
Calculate the Sun-Position:
https://www.npmjs.com/package/sun-position_grena3

1-install the module: 
    npm i sun-position_grena3

2-import: 
    var moment = require('moment-timezone');    //for Date and Time in UTC-Format
    const Test_Grena3 = require("sun-position_grena3"); //the calculation Class

3-Parameters: 
    -Date in UTC-Format:
        var mom = moment.utc("2018-02-07 14:00:00", "YYYY-MM-DD HH:mm:ss");
    -AzimuthZenithAngle (return value)
        var aza = Test_Grena3.AzimuthZenithAngle2;
    -Latitude/Longitude (number)
        var lat = 51.47625;
        var long = 7.24274;
    -DeltaT (number)    //for example: 69
    -Pressure (number)  //for example: 1000
    -Temperature (number)   //in Celsius, example: 20

4-calculate:
var moment = require('moment-timezone');
const Test_Grena3 = require("sun-position_grena3");
var aza = Test_Grena3.AzimuthZenithAngle2;
const calcSunPos = new Test_Grena3(0,0);

var mom = moment.utc("2018-02-07 14:00:00", "YYYY-MM-DD HH:mm:ss");
var lat = 51.47625;
var long = 7.24274;

aza = calcSunPos.calculateSolarPosition(mom, lat, long, 69, 1000, 20);
console.log("Azimuth: " + aza.getAzimuth());
console.log("ZenithAngle: " +aza.getZenithAngle()); 



    aza = tg.calculateSolarPosition(moment, latitude, long, 69, 1000, 20);
