import {Component, Input} from "@angular/core";

@Component({
	moduleId:	module.id,
	selector:	"historialBusqueda",
	templateUrl: "historialBusqueda.component.html"
})

export class HistorialBusquedaComponent{
	@Input()
	public listaUsuarios	: string[];
	constructor(){
		this.listaUsuarios = [];
	}

	HayHistorial(){
		if (this.listaUsuarios.length  > 0)
			return true;
		return false;
	}

	eliminarUsuarioHistorial(usuario : string){
		for(var usuarioId in this.listaUsuarios){
			if (this.listaUsuarios[usuarioId] == usuario){
    			this.listaUsuarios.splice(Number(usuarioId), 1);
			}
		}
	}
}