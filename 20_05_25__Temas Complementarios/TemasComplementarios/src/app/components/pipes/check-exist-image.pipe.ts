import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'checkExistImage'
})
export class CheckExistImagePipe implements PipeTransform {
  transform(value: string): string {
    console.log(value);
    return null;
  }
}
