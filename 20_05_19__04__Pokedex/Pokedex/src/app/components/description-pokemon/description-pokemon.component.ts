import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { pluck, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-description-pokemon',
  templateUrl: './description-pokemon.component.html',
  styleUrls: ['./description-pokemon.component.css'],
})
export class DescriptionPokemonComponent implements OnInit {

  public pokemonRecibido:any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient
  ) {
    this.activatedRoute.params
    .pipe(
      pluck('id'),
      switchMap((id) => this.getPokemon(id))
    )
    .subscribe((pokemon) => {
      this.pokemonRecibido= pokemon
      console.log(this.pokemonRecibido);
  }

  ngOnInit(): void {}

  public getPokemon(id: string): Observable<any> {
    return this.http.get(`https://pokeapi.com/api/v2/pokemon/${id}`);
  }
}