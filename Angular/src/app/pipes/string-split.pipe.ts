import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringSplit'
})
export class StringSplitPipe implements PipeTransform {

  transform(genre: string): string {
    let pos = genre.indexOf('/');
    if(pos == 0) {
      return genre;
    } 
    let counter = 0;
    let first: boolean = false;
    for(let i = 0; i < genre.length; i++) {
      if(genre[i] === '/') {
        counter++;
        if(!first) {
          first = true;
        } else {
          genre = genre.substring(0,i);
          break;
        }
      }
    }
    return genre;
  }

}
