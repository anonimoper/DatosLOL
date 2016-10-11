import {Component, Input} from "@angular/core";

@Component({
    moduleId: module.id,
    selector: "NombreEquipo",
    templateUrl: "nombreEquipo.component.html"
})

export class NombreEquipoComponent {
    @Input()
    public equipo:any

    constructor(){
        
    }

    mostrar(){
        console.log(this.equipo)
    }
}