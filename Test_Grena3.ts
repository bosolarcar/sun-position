import { AzimuthZenithAngle2 } from "./AzimuthZenithAngle";

var GregorianCalendarFormat = require('gregorian-calendar-format');
var GregorianCalendar = require('gregorian-calendar');
var gregorianCalendar = new GregorianCalendar();

export class Test_Grena3{
    azimuth: number;
    zenithAngle: number;


    constructor(azimuth: number, zenithAngle: number) {
        this.zenithAngle = zenithAngle;
        this.azimuth = azimuth;
    }




    public calculateSolarPosition(date:Date,latitude:number,longitude:number,deltaT:number,pressure:number,temperature:number):AzimuthZenithAngle2 {
        
        var t:number = this.calcT(date);
        t = -16273.434594455084;
        console.log('calcT: ' + t);

        var tE:number = t + 1.1574e-5 * deltaT;
        var omegaAtE:number = 0.0172019715 * tE;

        var lambda:number = -1.388803 + 1.720279216e-2 * tE + 3.3366e-2 * Math.sin(omegaAtE - 0.06172)
                + 3.53e-4 * Math.sin(2.0 * omegaAtE - 0.1163);

        var epsilon:number = 4.089567e-1 - 6.19e-9 * tE;

        var sLambda:number = Math.sin(lambda);
        var cLambda:number = Math.cos(lambda);
        var sEpsilon:number = Math.sin(epsilon);
        var cEpsilon:number = Math.sqrt(1 - sEpsilon * sEpsilon);

        var alpha:number = Math.atan2(sLambda * cEpsilon, cLambda);
        if (alpha < 0) {
            alpha += 2 * Math.PI;
        }

        var delta:number = Math.asin(sLambda * sEpsilon);

        var H:number = 1.7528311 + 6.300388099 * t + this.deg2rad(longitude) - alpha;
        H = ((H + Math.PI) % (2 * Math.PI)) - Math.PI;
        if (H < -Math.PI) {
            H += 2 * Math.PI;
        }

        // end of "short procedure"
        var sPhi:number = Math.sin(this.deg2rad(latitude));
        var cPhi:number = Math.sqrt((1 - sPhi * sPhi));
        var sDelta:number = Math.sin(delta);
        var cDelta:number = Math.sqrt(1 - sDelta * sDelta);
        var sH:number = Math.sin(H);
        var cH:number = Math.cos(H);

        var sEpsilon0:number = sPhi * sDelta + cPhi * cDelta * cH;
        var eP:number = Math.asin(sEpsilon0) - 4.26e-5 * Math.sqrt(1.0 - sEpsilon0 * sEpsilon0);
        var gamma:number = Math.atan2(sH, cH * sPhi - sDelta * cPhi / cDelta);

        // refraction correction (disabled for silly parameter values)
        var deltaRe:number =
                (temperature < -273 || temperature > 273 || pressure < 0 || pressure > 3000) ? 0.0 : (
                ((eP > 0.0) ?
                        (0.08422 * (pressure / 1000)) / ((273.0 + temperature) * Math.tan(eP + 0.003138 / (eP + 0.08919)))
                        : 0.0));

        var z:number = Math.PI / 2 - eP - deltaRe;



        return new AzimuthZenithAngle2(this.rad2deg(gamma + Math.PI) % 360.0, this.rad2deg(z));
    }





    public calcT(date):number {
        var utc = new GregorianCalendar();
        utc = date;
        var monthf = new GregorianCalendarFormat('M');
        var yearf = new GregorianCalendarFormat('y');
        var dayf = new GregorianCalendarFormat('d');
        var hourf = new GregorianCalendarFormat('H');
        var minf = new GregorianCalendarFormat('m');
        var secf = new GregorianCalendarFormat('s');

        //GregorianCalendar utc = JulianDate.createUtcCalendar(date);
        
                var m:number = parseFloat(monthf.format(utc));
                var y:number = parseFloat(yearf.format(utc));
                var d:number = parseFloat(dayf.format(utc));
                var h:number = parseFloat(hourf.format(utc)) +
                parseFloat(minf.format(utc)) / 60 +
                parseFloat(secf.format(utc)) / (60 * 60);
                //console.log(h);
        
                if (m <= 2) {
                    m += 12;
                    y -= 1;
                }
        
                //Ergebnis weicht um -+2 ab von der Java Version
                return  (365.25 * (y - 2000)) +  (30.6001 * (m + 1))
                        -  (0.01 * y) + d + 0.0416667 * h - 21958;
    }

    //Umrechnung Grad zu Bogenmaß
    public deg2rad(deg:number):number {
        return (deg * Math.PI / 180.0);
    }

    //Umrechnung Bogenmaß zu Grad
    public rad2deg(rad:number):number {
        return (rad * 180.0 / Math.PI);
    }



    public createUtcCalendar(fromCalendar) {
        var utcCalendar = new GregorianCalendar();
        utcCalendar.set(fromCalendar.getTimeInMillis,'S');
        return utcCalendar;
    }

}