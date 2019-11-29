import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(listUsers: any[], text: string): any[] {
    if (text === '') {
      return listUsers;
    }
    return listUsers.filter(item => {
      return item.name.includes(text);
    });
  }

}
