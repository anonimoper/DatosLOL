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
var HistorialBusquedaComponent = (function () {
    function HistorialBusquedaComponent() {
        this.listaUsuarios = [];
    }
    HistorialBusquedaComponent.prototype.HayHistorial = function () {
        if (this.listaUsuarios.length > 0)
            return true;
        return false;
    };
    HistorialBusquedaComponent.prototype.eliminarUsuarioHistorial = function (usuario) {
        for (var usuarioId in this.listaUsuarios) {
            if (this.listaUsuarios[usuarioId] == usuario) {
                this.listaUsuarios.splice(Number(usuarioId), 1);
            }
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], HistorialBusquedaComponent.prototype, "listaUsuarios", void 0);
    HistorialBusquedaComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "historialBusqueda",
            templateUrl: "historialBusqueda.component.html"
        }), 
        __metadata('design:paramtypes', [])
    ], HistorialBusquedaComponent);
    return HistorialBusquedaComponent;
}());
exports.HistorialBusquedaComponent = HistorialBusquedaComponent;
//# sourceMappingURL=historialBusqueda.component.js.map