import { Test_Grena3 } from "./Test_Grena3";
import { AzimuthZenithAngle2 } from "./AzimuthZenithAngle";

//var GregorianCalendarFormat = require('gregorian-calendar-format');
var GregorianCalendar = require('gregorian-calendar');


class Startup {
    public static main(){
        var test = new GregorianCalendar();
        test.set(2015, GregorianCalendar.JUNE, 12, 13, 34, 11);
        var tg3 = new Test_Grena3(null,null);
        
        console.log('____________start test');

        var result:AzimuthZenithAngle2 = tg3.calculateSolarPosition(test, -3.107, -60.025, 69, 1000, 20);


        
        console.log(result.getAzimuth());       //51.608    //Horizontalwinkel
        console.log(result.getZenithAngle());   //44.1425   //Winkel Zwischen Zenit und dem Zenter der Sonne
        console.log('____________end test');
    }
}

Startup.main();