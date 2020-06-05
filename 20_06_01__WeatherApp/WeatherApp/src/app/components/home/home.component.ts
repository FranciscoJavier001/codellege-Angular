import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { concatMap, map } from 'rxjs/operators';
import { Clima, ClimaFiltrado } from 'src/app/interfaces/clima.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private url = `https://api.openweathermap.org/data/2.5/weather?q=`;
  private apikey = `&appid=f5e7bd8a3f0de94bbf786a046ee48af5`;

  public ArrayClimaFiltrado: Array<ClimaFiltrado> = [];
  public loading:boolean=true;

  constructor(private router:Router,
    private http:HttpClient) {
      this.getLocalStorage();
    }

  ngOnInit(): void {
  }
  IrAgregar(){
    this.router.navigate(['/add']);
  }

  getLocalStorage(){
    const climas = JSON.parse(localStorage.getItem('Climas'));

    if (climas !== null) {
      this.getWeather(climas);
    }
  }

  getWeather(climas: Array<string>){
    from(climas).pipe(
      // Concat Map
      concatMap((nombreClima) =>
      this.http.get(`${this.url}${nombreClima}${this.apikey}`).pipe(
        // Map
        map((Clima: Clima) => {
          console.log(Clima)
          const climaFiltrado: ClimaFiltrado = {
            NombreCiudad: Clima.name,
            ClimaActual: Clima.weather[0].main,
            TemperaturaActual: Clima.main.temp,
          TemperaturaMaxima: Clima.main.temp_max,
          TemperaturaMinima: Clima.main.temp_min,
          Imagen: Clima.weather[0].icon,
        };
        return climaFiltrado;
        })
        // Map
      )
    )
    // Concat Map
    ).subscribe(
      (climaFiltrado:ClimaFiltrado)=>{
        this.ArrayClimaFiltrado.push(climaFiltrado);
        if(this.ArrayClimaFiltrado.length == climas.length){
          this.loading = false;
        }
      });
  }
}
