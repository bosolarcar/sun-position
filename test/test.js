//Test the Package
const Test_Grena3_1 = require("../dist/Test_Grena3.js");
var aza = Test_Grena3_1.AzimuthZenithAngle2;
const calcSunPos = new Test_Grena3_1(0, 0);
var moment = require('moment-timezone');

class Startup {
  static main() {

    var mom = moment.utc("2015-06-12 15:34:11 GMT+0200 (CEST)", "YYYY-MM-DD HH:mm:ss ZZ");
    //var mom = moment.utc("2018-02-07 14:00:00", "YYYY-MM-DD HH:mm:ss");
    var lat = -3.107;
    var long = -60.025;

    console.log('____________start test');
    console.log('Date(UTC): ' + mom.format("YYYY-MM-DD HH:mm:ss"));
    console.log('lat: ' + lat);
    console.log('long: ' + long);
    aza = calcSunPos.calculateSolarPosition(mom, lat, long, 69, 1000, 20);
    console.log("Expect Azimuth: (" + aza.getAzimuth()+") ToBeCloseTo: (51.608, 0.01)");
    console.log("Expect ZenithAngle: (" + aza.getZenithAngle()+") ToBeCloseTo: (44.1425, 0.01)");
    //expect(result.getAzimuth()*100).toBeCloseTo(51.608 * 100,0);
    //expect(result.getZenithAngle()*100).toBeCloseTo(44.1425 * 100,0);
    console.log('____________end test');
    
  }
}
Startup.main();

