import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { pluck, switchMap, concatMap } from 'rxjs/operators';
import { from } from 'rxjs';

@Component({
  selector: 'app-grid-cards',
  templateUrl: './grid-cards.component.html',
  styleUrls: ['./grid-cards.component.css'],
})
export class GridCardsComponent {
public ArraysPokemon: Array<any> =[]
public loading: boolean = false;
private urlApiPokemon = `https://pokeapi.com/api/v2/pokemon`;
public indicePaginacion = 1;
  constructor(private http: HttpClient) {
    this.getPokemons(this.urlApiPokemon);
  }

  public getPokemons(ulApi: string) {
    this.ArraysPokemon = [];
    this.loading = true;
    this.http
      .get(urlApi)
      .pipe(
        pluck('results'),
        switchMap((PokemonsArray: any) =>
          from(PokemonsArray).pipe(
            pluck('url'),
            concatMap((url: string) => this.http.get(url))
          )
        )
      )
      .subscribe((pokemon) =>{
        this.ArraysPokemon.push(pokemon);

        if(this.ArraysPokemon.length==20){
          this.loading = false;
        }
        console.log(this.loading);
      });
  }

  public paginationRight(){
    const offset = this.indicePaginacion * 20;
    this.indicePaginacion++;
    const urlActualizado = `${this.urlApiPokemon}?offset=${offset}&limit=20`;

    console.log(urlActualizado);
    
  }
}

