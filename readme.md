Calculate the Sun-Position:
https://www.npmjs.com/package/sun-position_grena3

1-install the Module with your Terminal: 
    npm i sun-position_grena3

2-import into your JavaScript Project: 
    //for Date and Time in UTC-Format
    var moment = require('moment-timezone');    
    
    //the calculation Class
    const Test_Grena3 = require("sun-position_grena3"); 

3-Parameters you will need: 
    -Date in UTC-Format:
        var mom = moment.utc("2018-02-07 14:00:00", "YYYY-MM-DD HH:mm:ss");
    -AzimuthZenithAngle (return value)
        var aza = Test_Grena3.AzimuthZenithAngle2;
    -Latitude/Longitude (number)
        var lat = 51.47625;
        var long = 7.24274;
    -DeltaT (number)    //the time difference between UT and TT; e.g.: 69
    -Pressure (number)  //e.g.: 1000
    -Temperature (number)   //in Celsius, e.g.: 20

4-calculate:
    aza = calcSunPos.calculateSolarPosition(mom, lat, long, 69, 1000, 20);

5-full Example to use in JavaScript:
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
