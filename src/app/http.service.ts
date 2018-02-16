import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {

  constructor(private _http: HttpClient) {
      this.getPokemon();
      this.getPokemons();
  }
  getPokemon() {
      let bulbasaur = this._http.get('https://pokeapi.co/api/v2/pokemon/1/');
      bulbasaur.subscribe(data => console.log("Got pokemon!", data));
      bulbasaur.subscribe(data => console.log("Bulbasaur's abilities are",
                data.abilities[0].ability.name, "and", data.abilities[1].ability.name ));

  }
  getPokemons() {
    let pokemons = this._http.get('https://pokeapi.co/api/v2/ability/34/'); // data.abilities[0].ability.url
    pokemons.subscribe(data => console.log(data.pokemon.length, `Pokemon have the chlorophyll ability`));
  }

}
