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
var DescripcionUsuarioHistorial = (function () {
    function DescripcionUsuarioHistorial() {
        this.onEliminar = new core_1.EventEmitter();
    }
    DescripcionUsuarioHistorial.prototype.eliminar = function () {
        this.onEliminar.emit(this.usuario);
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], DescripcionUsuarioHistorial.prototype, "onEliminar", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DescripcionUsuarioHistorial.prototype, "usuario", void 0);
    DescripcionUsuarioHistorial = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "descripcionUsuarioHistorial",
            templateUrl: "descripcionUsuarioHistorial.component.html"
        }), 
        __metadata('design:paramtypes', [])
    ], DescripcionUsuarioHistorial);
    return DescripcionUsuarioHistorial;
}());
exports.DescripcionUsuarioHistorial = DescripcionUsuarioHistorial;
//# sourceMappingURL=descripcionUsuarioHistorial.component.js.map