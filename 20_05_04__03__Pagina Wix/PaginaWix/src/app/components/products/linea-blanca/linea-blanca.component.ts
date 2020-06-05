import { Component, OnInit } from '@angular/core';
import { Departments, Products } from 'src/app/data/data';
import { from } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';
import { ProductsInterface } from 'src/app/interfaces/ecomerce.interfaces';

@Component({
  selector: 'app-linea-blanca',
  templateUrl: './linea-blanca.component.html',
  styleUrls: ['./linea-blanca.component.css']
})
export class LineaBlancaComponent implements OnInit {
  public productsShow: Array<ProductsInterface> = [];

  constructor() {
    this.GetProducts()
  }

  ngOnInit(): void {
  }

  public GetProducts() {
    let Departamento = Departments.find(
      (departamento) => departamento.department === 'Línea Blanca'
    );

    from(Products)
      .pipe(
        filter((producto) => producto.department === Departamento.id),

        map((producto) => {
          let direccionImg = `./../../../../assets/${producto.img} `;
          return {
            ...producto,
            img: direccionImg,
          };
        }),

        tap((productoActualizado) =>
          this.productsShow.push(productoActualizado)
        )
      )
      .subscribe();
  }

}
