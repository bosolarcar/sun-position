Calculate the Sun-Position:
https://www.npmjs.com/package/sun-position_grena3

1-install the module: 
    npm i sun-position_grena3

2-import: 
    var tg = require('sun-position_grena3');

3-requires: 
    -moment.js (Date in UTC-Format)
        var mom = moment.utc("2018-02-07 14:00:00", "YYYY-MM-DD HH:mm:ss");
    -AzimuthZenithAngle (return value)
        var aza = tg.AzimuthZenithAngle2
    -Latitude/Longitude (number)
    -DeltaT (number)
    -Pressure (number)
    -Temperature (number)

4-calculate:
    aza = tg.calculateSolarPosition(moment, latitude, long, 69, 1000, 20);