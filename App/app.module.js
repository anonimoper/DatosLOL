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
var platform_browser_1 = require('@angular/platform-browser');
var app_component_1 = require('./app.component');
var busqueda_component_1 = require('./Componentes/BusquedaUsuario/busqueda.component');
var cabecera_component_1 = require('./Componentes/Cabecera/cabecera.component');
var nombreEquipo_component_1 = require('./Componentes/Equipo/nombreEquipo.component');
var historialBusqueda_component_1 = require("./Componentes/HistorialBusqueda/historialBusqueda.component");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var descripcionUsuarioHistorial_component_1 = require("./Componentes/HistorialBusqueda/descripcionUsuarioHistorial.component");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule],
            declarations: [app_component_1.AppComponent, busqueda_component_1.BusquedaComponent, cabecera_component_1.CabeceraComponent, nombreEquipo_component_1.NombreEquipoComponent, historialBusqueda_component_1.HistorialBusquedaComponent, descripcionUsuarioHistorial_component_1.DescripcionUsuarioHistorial],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map