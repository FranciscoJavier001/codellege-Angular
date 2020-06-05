import { Component, OnInit, Input } from '@angular/core';
import { Routes } from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  @Input() pokemonInput:any;

  constructor(private routes:Routes ) {}

  ngOnInit(): void {
    console.log(this.pokemonInput);
  }

  GoToDescription(id: number){
    this.router.navigate(['description', id]) 
  }
}
