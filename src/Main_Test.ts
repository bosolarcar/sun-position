import { Test_Grena3 } from "./Test_Grena3";
import { AzimuthZenithAngle2 } from "./AzimuthZenithAngle";

var moment = require('moment-timezone');

class Startup {
    public static main(){
        //var mom = moment.utc("2015-06-12 15:34:11 GMT+0200 (CEST)", "YYYY-MM-DD HH:mm:ss ZZ");
        var mom = moment.utc("2018-02-07 14:00:00", "YYYY-MM-DD HH:mm:ss");
        var lat = 51.47625;
        var long = 7.24274;

        var tg3 = new Test_Grena3(0,0);
        
        console.log('____________start test');
        console.log('Date(UTC): '+mom.format("YYYY-MM-DD HH:mm:ss"));
        console.log('lat: '+lat);
        console.log('long: '+long);

        var result:AzimuthZenithAngle2 = tg3.calculateSolarPosition(mom, lat, long, 69, 1000, 20);


        
        console.log("Azimuth: " + result.getAzimuth());       //51.608    //Horizontalwinkel
        console.log("ZenithAngle: " +result.getZenithAngle());   //44.1425   //Winkel Zwischen Zenit und dem Zenter der Sonne
        console.log('____________end test');
    }


    
}

Startup.main();