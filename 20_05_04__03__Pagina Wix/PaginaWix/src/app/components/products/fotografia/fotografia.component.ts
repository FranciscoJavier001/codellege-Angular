import { Component, OnInit } from '@angular/core';
import { ProductsInterface } from 'src/app/interfaces/ecomerce.interfaces';
import { Departments, Products } from 'src/app/data/data';
import { from } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-fotografia',
  templateUrl: './fotografia.component.html',
  styleUrls: ['./fotografia.component.css']
})
export class FotografiaComponent implements OnInit {
  public productsShow: Array<ProductsInterface> = [];

  constructor() {

    this.GetProducts();
  }

  ngOnInit(): void {
  }

  public GetProducts() {
    let Departamento = Departments.find(
      (departamento) => departamento.department === 'Fotografía'
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