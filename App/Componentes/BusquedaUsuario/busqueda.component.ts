import {Component, Input} from '@angular/core';
import {LOLServicios} from '../../Servicios/lol.servicios';

export class Hero {
	name : string;
	constructor(nombre: string){
		this.name = nombre;
	}
}

@Component({
	moduleId: module.id,
	selector: "busqueda",
	templateUrl: "busqueda.component.html",
	providers: [LOLServicios]
})

export class BusquedaComponent{

	//Estilo de logo
	ClasesIconoLiga = {"lado":true, "frente":true, "frente-oro":false};
	//Informacion de nuevo componente
	ImagenLiga: string = "";
	TipoRanked : string = "";
	LigaRanked : string = "";
	DivisionRanked : string = "";

	//información general
	public model : Hero;
	usuario : any;
	equipos : any[];
	_httplol : LOLServicios;
	mensajeError: string;
	NombreUsuarioActual : string;
	listaUsuarios	: string[];
	CargandoAjax : boolean;
	ErrorAjax :	boolean;
	@Input() Nombre:string;

	constructor(_httplol: LOLServicios){
		this.ImagenLiga = "";
		this.CargandoAjax = false;
		this.listaUsuarios = [];
		this._httplol = _httplol;
		this.model = new Hero("pedro");
		this.model.name = "cacadura 2";

		console.log("Replace ha funcionado" + this.model.name);
		_httplol.getDatosUsuario().subscribe(
			resultado => {
			this.usuario = resultado["cacadura2"];
			_httplol.getEquiposUsuario(this.usuario.id).
			subscribe(resultado => {
				this.equipos = resultado[this.usuario.id];
			});
		});
	}

	buscarUsuario(){
		this.ErrorAjax = false;
		this.CargandoAjax = true;
		this.NombreUsuarioActual = this.model.name;
		this._httplol.actualizarNombreUsuario(this.model.name)
		this.usuario = null;
		this.equipos = null;
		this._httplol.getDatosUsuario().subscribe(
			usuario => {
				var sNombreUsuario = this.model.name.replace(" ","");
				this.usuario = usuario[sNombreUsuario];
				var bExiste = false;
				for(var usuarioTemp in this.listaUsuarios){
					if (this.listaUsuarios[usuarioTemp] == this.model.name)
						bExiste = true;
				}
				if (bExiste == false)
					this.listaUsuarios.push(this.model.name);
				console.log("Nombre usuario id: "+this.usuario.id+ this.model.name);

				//Obtener información de ranked
				this._httplol.getInformacionRanked(this.usuario.id).subscribe(
					resultado => {
						console.log(resultado);
						let ObjetoDatos 	= resultado[this.usuario.id];
						let DatosSoloQ		= ObjetoDatos[0];
						this.TipoRanked 	= DatosSoloQ.queue;
						this.LigaRanked 	= DatosSoloQ.tier;
						this.DivisionRanked	= DatosSoloQ.entries[0].division;
						if (this.LigaRanked == "GOLD"){
							this.ClasesIconoLiga["frente-oro"] = true;
							this.ClasesIconoLiga["frente"] = false;
							this.ImagenLiga = "App/Public/iconos_liga/gold.png"
						}
						if (this.LigaRanked == "SILVER"){
							this.ClasesIconoLiga["frente-oro"] = false;
							this.ClasesIconoLiga["frente"] = true;
							this.ImagenLiga = "App/Public/iconos_liga/silver.png"
						}
					},
					(error: any) => {
						console.log("Se ha producido un error");
						this.ErrorAjax = true;
					}

				);

				//Obtener los equipos que tiene el Usuario
				this._httplol.getEquiposUsuario(this.usuario.id).subscribe(
					equipos => this.equipos = equipos[this.usuario.id],
					(error:any)=> {
						this.mensajeError = "El usuario "+this.NombreUsuarioActual+" no esta unido a ningun equipo";
						this.ErrorAjax = true;				
					}
				)
				this.CargandoAjax = false;
			},
			(error:any) => {
				this.mensajeError = "El nombre de invocador no existe en el juego. Nombre: "+ this.NombreUsuarioActual;
				this.CargandoAjax = false;
				this.ErrorAjax = true;
			}
		);
	}

}