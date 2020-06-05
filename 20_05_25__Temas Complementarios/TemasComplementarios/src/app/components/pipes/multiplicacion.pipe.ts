import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multiplicacion',
})
export class MultiplicacionPipe implements PipeTransform {
  transform() {
    let multipliacion=  6;
    return multipliacion;
  }
}