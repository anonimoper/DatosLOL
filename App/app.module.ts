import {NgModule} from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';
import { AppComponent} from './app.component';
import {BusquedaComponent} from './Componentes/BusquedaUsuario/busqueda.component';
import {CabeceraComponent} from './Componentes/Cabecera/cabecera.component';
import {NombreEquipoComponent} from './Componentes/Equipo/nombreEquipo.component';
import {HistorialBusquedaComponent} from "./Componentes/HistorialBusqueda/historialBusqueda.component";
import {FormsModule} from "@angular/forms"
import {HttpModule} from "@angular/http"
import {DescripcionUsuarioHistorial} from "./Componentes/HistorialBusqueda/descripcionUsuarioHistorial.component"

@NgModule({
	imports: [BrowserModule, FormsModule, HttpModule],
	declarations: [AppComponent, BusquedaComponent, CabeceraComponent, NombreEquipoComponent,HistorialBusquedaComponent,DescripcionUsuarioHistorial],
	bootstrap: [AppComponent]
})

export class AppModule{}
