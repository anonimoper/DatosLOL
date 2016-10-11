"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require('rxjs/add/operator/map');
var LOLServicios = (function () {
    function LOLServicios(_http) {
        this.nombreUsuario = "cacadura 2";
        this.apiKey = '?api_key=RGAPI-ED3975FB-D31A-4C33-88C6-9DA07603F4DB';
        this.apiKey2 = '?api_key=RGAPI-A8C70BDC-447E-419B-9FE6-952562A0F755';
        this._http = _http;
    }
    LOLServicios.prototype.actualizarNombreUsuario = function (nombreUsuario) {
        this.nombreUsuario = nombreUsuario;
    };
    LOLServicios.prototype.getDatosUsuario = function () {
        return this._http.get("https://euw.api.pvp.net/api/lol/euw/v1.4/summoner/by-name/" + this.nombreUsuario + this.apiKey)
            .map(function (resultado) { return resultado.json(); });
    };
    LOLServicios.prototype.getEquiposUsuario = function (idUsuario) {
        return this._http.get("https://euw.api.pvp.net/api/lol/euw/v2.4/team/by-summoner/" + idUsuario + this.apiKey2).map(function (resultado) { return resultado.json(); });
    };
    LOLServicios.prototype.getInformacionRanked = function (idUsuario) {
        return this._http.get("https://euw.api.pvp.net/api/lol/euw/v2.5/league/by-summoner/" + idUsuario + "/entry" + this.apiKey).map(function (resultado) { return resultado.json(); });
    };
    LOLServicios = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], LOLServicios);
    return LOLServicios;
}());
exports.LOLServicios = LOLServicios;
//# sourceMappingURL=lol.servicios.js.map