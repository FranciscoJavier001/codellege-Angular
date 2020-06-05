import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styles: [],
})
export class PipesComponent implements OnInit {
  public valor: number = 123456;
  public fecha: Date = new Date();
  public valorPi: number = 0;
  public texto = 'FrAncIscO JaVieR MartINEZ DuraN';
  public porcentaje = 0.12345;
  public arregloNumerico: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  public contrasenaBienDificil: string = '123456Carlos';
  public show: boolean = false;
  public urlImage = "./../../../assets/carro1.jpeg"
  public numero: number = 2;

  constructor() {
    this.valorPi = Math.PI;
  }

  ngOnInit(): void {}

  MostrarContrasena() {
    this.show = !this.show;
  }
}
