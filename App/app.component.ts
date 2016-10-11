import {Component} from '@angular/core';



@Component({
	moduleId: module.id,
	selector: 'Danny',
	templateUrl: 'app.component.html'
})

export class AppComponent{

	public nombre : string;
	constructor(){
		this.nombre = "Prueba cambio de Danny";
	}
	onSubmit(formulario : any){
		console.log("Formulario ",formulario);
	}
}
