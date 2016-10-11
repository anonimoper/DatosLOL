import {Injectable} from "@angular/core";
import {Http, Headers} from "@angular/http";
import 'rxjs/add/operator/map'

@Injectable()
export class LOLServicios{
	nombreUsuario : string ="cacadura 2";

	apiKey = '?api_key=RGAPI-ED3975FB-D31A-4C33-88C6-9DA07603F4DB';
	apiKey2 = '?api_key=RGAPI-A8C70BDC-447E-419B-9FE6-952562A0F755';
	_http: Http;
	constructor(_http: Http){
		this._http = _http;

	}

	actualizarNombreUsuario( nombreUsuario : string){
		this.nombreUsuario = nombreUsuario;
	}

	getDatosUsuario(){
		return this._http.get("https://euw.api.pvp.net/api/lol/euw/v1.4/summoner/by-name/"+this.nombreUsuario+this.apiKey)
		.map(resultado => { return resultado.json()});
	}

	getEquiposUsuario(idUsuario: number){
		
		return this._http.get("https://euw.api.pvp.net/api/lol/euw/v2.4/team/by-summoner/"+idUsuario+this.apiKey2).map(resultado=>resultado.json());
	}

	getInformacionRanked(idUsuario: number){
		return this._http.get("https://euw.api.pvp.net/api/lol/euw/v2.5/league/by-summoner/"+idUsuario+"/entry"+this.apiKey).map(resultado => resultado.json());
	}
}