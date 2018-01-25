"use strict";
exports.__esModule = true;
var AzimuthZenithAngle2 = /** @class */ (function () {
    function AzimuthZenithAngle2(azimuth, zenithAngle) {
        var _this = this;
        this.toString = function () {
            return "azimuth " + _this.azimuth + ", zenith angle " + _this.zenithAngle;
        };
        this.zenithAngle = zenithAngle;
        this.azimuth = azimuth;
    }
    AzimuthZenithAngle2.prototype.getZenithAngle = function () {
        return this.zenithAngle;
    };
    AzimuthZenithAngle2.prototype.getAzimuth = function () {
        return this.azimuth;
    };
    return AzimuthZenithAngle2;
}());
exports.AzimuthZenithAngle2 = AzimuthZenithAngle2;
//# sourceMappingURL=AzimuthZenithAngle.js.map