import {Component,EventEmitter, Input, Output } from "@angular/core";

@Component({
	moduleId:	module.id,
	selector:	"descripcionUsuarioHistorial",
	templateUrl: "descripcionUsuarioHistorial.component.html"
})

export class DescripcionUsuarioHistorial {
		@Output() onEliminar	= new  EventEmitter<any>();
		@Input() usuario:any;

		constructor(){

		}

		eliminar(){
			this.onEliminar.emit(this.usuario);
		}
}