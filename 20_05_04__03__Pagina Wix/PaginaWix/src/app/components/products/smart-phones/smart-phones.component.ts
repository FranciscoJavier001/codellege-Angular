import { Component, OnInit } from '@angular/core';
import { ProductsInterface } from 'src/app/interfaces/ecomerce.interfaces';
import { Products, Departments } from 'src/app/data/data';
import { from } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-smart-phones',
  templateUrl: './smart-phones.component.html',
  styleUrls: ['./smart-phones.component.css'],
})
export class SmartPhonesComponent implements OnInit {
  public productsShow: Array<ProductsInterface> = [];

  constructor(private router: Router) {
    this.GetProducts();
  }

  ngOnInit(): void { }

  public GetProducts() {
    let Departamento = Departments.find(
      (departamento) => departamento.department === 'SmartPhones'
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

  public GetIdToChangeScreen(id: number) {
    this.router.navigate(['detail-products', id]);
  }
}