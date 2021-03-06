import { Component, OnInit, Input } from '@angular/core';
import { ClimaFiltrado } from 'src/app/interfaces/clima.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cards-weather',
  templateUrl: './cards-weather.component.html',
  styleUrls: ['./cards-weather.component.css'],
})
export class CardsWeatherComponent implements OnInit {
  @Input() climaFiltradoRecibido: ClimaFiltrado;
  @Input() mostrarBoton:boolean=false;

  public showboton:boolean=false;

  constructor(public router:Router) {}

  ngOnInit(): void {
    this.showboton=this.mostrarBoton;
    console.log(this.showboton);
  }

  AgregarCiudad(){
    const ArrayWeather = this.GetLocalStorage();
    ArrayWeather.push(this.climaFiltradoRecibido.NombreCiudad);
    localStorage.setItem('Climas', JSON.stringify(ArrayWeather));
  }

  public GetLocalStorage(){
    const ArrayWeather = JSON.parse(localStorage.getItem('Climas'));

    if (ArrayWeather == null){
      return [];
    } else {
      return ArrayWeather;
    }
  }

  public irDetalles(){
    if(!this.mostrarBoton){
      this.router.navigate(['details', 'qaz'])
    }
  }
}
