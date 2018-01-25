class AzimuthZenithAngle2 {
    azimuth: number;
    zenithAngle: number;


    constructor(azimuth: number, zenithAngle: number) {
        this.zenithAngle = zenithAngle;
        this.azimuth = azimuth;
    }


    public getZenithAngle():number {
        return this.zenithAngle;
    }

    public getAzimuth():number {
        return this.azimuth;
    }

    public toString = () : string => {
        
                return "azimuth "+this.azimuth+", zenith angle "+this.zenithAngle;
    }

}
export { AzimuthZenithAngle2 };