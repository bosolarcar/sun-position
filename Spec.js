var Test_Grena3_1 = require("./Test_Grena3");
var moment = require('moment-timezone');


//To run this shit: "npm test Spec.js"
describe("Grena3-Test", function() {
  it("test near Equator", function() {

    var mom = moment.utc("2015-06-12 15:34:11 GMT+0200 (CEST)", "YYYY-MM-DD HH:mm:ss ZZ");
    //var mom = moment.utc("2018-02-07 14:00:00", "YYYY-MM-DD HH:mm:ss");
    var lat = -3.107;
    var long = -60.025;
    var tg3 = new Test_Grena3_1.Test_Grena3(null, null);

    console.log('____________start test');
    console.log('Date(UTC): ' + mom.format("YYYY-MM-DD HH:mm:ss"));
    console.log('lat: ' + lat);
    console.log('long: ' + long);
    var result = tg3.calculateSolarPosition(mom, lat, long, 69, 1000, 20);
    console.log("Expect Azimuth: (" + result.getAzimuth()+") ToBeCloseTo: (51.608, 0.01)");
    console.log("Expect ZenithAngle: (" + result.getZenithAngle()+") ToBeCloseTo: (44.1425, 0.01)");
    expect(result.getAzimuth()*100).toBeCloseTo(51.608 * 100,0);
    expect(result.getZenithAngle()*100).toBeCloseTo(44.1425 * 100,0);
    console.log('____________end test');
    
  });
});

