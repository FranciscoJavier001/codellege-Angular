import { Component, OnInit } from '@angular/core';
import { ProductsInterface } from '../interfaces/ecomerce.interfaces';
import { from, Observable } from 'rxjs';
import { Products } from '../data/data';
import { filter, map, pluck, switchMap, tap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details-products',
  templateUrl: './details-products.component.html',
  styleUrls: ['./details-products.component.css'],
})
export class DetailsProductsComponent implements OnInit {
  public mostrar = false;
  public product: ProductsInterface;

  constructor(private AR: ActivatedRoute) {
    window.scrollTo(0, 0);
    this.AR.params
      .pipe(
        pluck('id'),
        switchMap((id) => this.GetProduct(id))
      )
      .subscribe((valor) => (this.product = valor));


  }

  ngOnInit(): void { }

  public GetProduct(id: number) {
    return from(Products).pipe(
      filter((producto) => producto.id == id),
      map((producto) => ({
        ...producto,
        img: `./../../assets/${producto.img}`,
      }))
    );
  }
}
