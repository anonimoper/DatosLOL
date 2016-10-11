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
var core_1 = require('@angular/core');
var lol_servicios_1 = require('../../Servicios/lol.servicios');
var Hero = (function () {
    function Hero(nombre) {
        this.name = nombre;
    }
    return Hero;
}());
exports.Hero = Hero;
var BusquedaComponent = (function () {
    function BusquedaComponent(_httplol) {
        var _this = this;
        //Estilo de logo
        this.ClasesIconoLiga = { "lado": true, "frente": true, "frente-oro": false };
        //Informacion de nuevo componente
        this.ImagenLiga = "";
        this.TipoRanked = "";
        this.LigaRanked = "";
        this.DivisionRanked = "";
        this.ImagenLiga = "";
        this.CargandoAjax = false;
        this.listaUsuarios = [];
        this._httplol = _httplol;
        this.model = new Hero("pedro");
        this.model.name = "cacadura 2";
        console.log("Replace ha funcionado" + this.model.name);
        _httplol.getDatosUsuario().subscribe(function (resultado) {
            _this.usuario = resultado["cacadura2"];
            _httplol.getEquiposUsuario(_this.usuario.id).
                subscribe(function (resultado) {
                _this.equipos = resultado[_this.usuario.id];
            });
        });
    }
    BusquedaComponent.prototype.buscarUsuario = function () {
        var _this = this;
        this.ErrorAjax = false;
        this.CargandoAjax = true;
        this.NombreUsuarioActual = this.model.name;
        this._httplol.actualizarNombreUsuario(this.model.name);
        this.usuario = null;
        this.equipos = null;
        this._httplol.getDatosUsuario().subscribe(function (usuario) {
            var sNombreUsuario = _this.model.name.replace(" ", "");
            _this.usuario = usuario[sNombreUsuario];
            var bExiste = false;
            for (var usuarioTemp in _this.listaUsuarios) {
                if (_this.listaUsuarios[usuarioTemp] == _this.model.name)
                    bExiste = true;
            }
            if (bExiste == false)
                _this.listaUsuarios.push(_this.model.name);
            console.log("Nombre usuario id: " + _this.usuario.id + _this.model.name);
            //Obtener información de ranked
            _this._httplol.getInformacionRanked(_this.usuario.id).subscribe(function (resultado) {
                console.log(resultado);
                var ObjetoDatos = resultado[_this.usuario.id];
                var DatosSoloQ = ObjetoDatos[0];
                _this.TipoRanked = DatosSoloQ.queue;
                _this.LigaRanked = DatosSoloQ.tier;
                _this.DivisionRanked = DatosSoloQ.entries[0].division;
                if (_this.LigaRanked == "GOLD") {
                    _this.ClasesIconoLiga["frente-oro"] = true;
                    _this.ClasesIconoLiga["frente"] = false;
                    _this.ImagenLiga = "App/Public/iconos_liga/gold.png";
                }
                if (_this.LigaRanked == "SILVER") {
                    _this.ClasesIconoLiga["frente-oro"] = false;
                    _this.ClasesIconoLiga["frente"] = true;
                    _this.ImagenLiga = "App/Public/iconos_liga/silver.png";
                }
            }, function (error) {
                console.log("Se ha producido un error");
                _this.ErrorAjax = true;
            });
            //Obtener los equipos que tiene el Usuario
            _this._httplol.getEquiposUsuario(_this.usuario.id).subscribe(function (equipos) { return _this.equipos = equipos[_this.usuario.id]; }, function (error) {
                _this.mensajeError = "El usuario " + _this.NombreUsuarioActual + " no esta unido a ningun equipo";
                _this.ErrorAjax = true;
            });
            _this.CargandoAjax = false;
        }, function (error) {
            _this.mensajeError = "El nombre de invocador no existe en el juego. Nombre: " + _this.NombreUsuarioActual;
            _this.CargandoAjax = false;
            _this.ErrorAjax = true;
        });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], BusquedaComponent.prototype, "Nombre", void 0);
    BusquedaComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "busqueda",
            templateUrl: "busqueda.component.html",
            providers: [lol_servicios_1.LOLServicios]
        }), 
        __metadata('design:paramtypes', [lol_servicios_1.LOLServicios])
    ], BusquedaComponent);
    return BusquedaComponent;
}());
exports.BusquedaComponent = BusquedaComponent;
//# sourceMappingURL=busqueda.component.js.map