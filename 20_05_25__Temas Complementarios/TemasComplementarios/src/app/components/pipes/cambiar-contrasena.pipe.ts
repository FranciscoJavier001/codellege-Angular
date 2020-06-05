import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cambiarContrasena',
})
export class CambiarContrasenaPipe implements PipeTransform {
  transform(value: string, mostrar: boolean): string {
    
    console.log(mostrar);
    if (mostrar) {
      return value;
    } else {
      let contrasenaHidden = '';
      let numeroAsteriscos = value.length;
      for (let i = 0; i < numeroAsteriscos; i++) {
        contrasenaHidden += '*';
      }
      return contrasenaHidden;
    }
  }
}
