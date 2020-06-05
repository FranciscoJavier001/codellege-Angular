import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Products } from 'src/app/data/data';
import { take, mapTo, pluck, tap, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-cuadro-negro',
  templateUrl: './cuadro-negro.component.html',
  styleUrls: ['./cuadro-negro.component.css'],
})
export class CuadroNegroComponent implements OnInit {
  public FotosArray: Array<string> = [];
  constructor() {
    this.GetImage();
  }

  ngOnInit(): void { }

  public GetImage() {
    let valorElementoAnterior = 0;
    for (let index = 0; index < 2; index++) {
      let element = Math.floor(
        Math.random() * (Products.length - index - 1) + 1
      );

      if (valorElementoAnterior == element) {
        element++;
      }
      valorElementoAnterior = element;

      const temporal = Products[element];
      this.FotosArray.push(`./../../../../assets/${temporal.img}`);
    }
  }
}
