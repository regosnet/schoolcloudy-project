import {Pipe, PipeTransform} from '@angular/core';
import { scclLayoutPaths } from '../scclSharedModule/scclLayoutModule/scclLayout.constants';


@Pipe({name: 'scclPngExt'})
export class ScclPngExtPipe implements PipeTransform {

  transform(input: string, ext = 'png'): string {
    return scclLayoutPaths.images.root + input + '.' + ext;
  }
}

@Pipe({name: 'scclObjectPipe'})
export class ScclObjectPipe implements PipeTransform {

  transform(input: Array<Object>) {
      const convertedItems = [];
      input.forEach((data) => {
          if (typeof data === 'object') {
              for (const [key, value] of Object.entries(data)){
                 if (value !== null && typeof value === 'object') {
                     for (const [key2, value2] of Object.entries(value)){
                         data[key2] = value2;
                         delete(data[key]);
                     }
                 }
             }
              convertedItems.push(data);
          }
      });
      return convertedItems;
  }
}

@Pipe({name: 'scclItemKey'})
export class ScclItemKey implements PipeTransform {

  transform(keys: Array<Object>) {
      const dataKey = [];
      keys.forEach((key) => {
        dataKey.push(key['dataKey']);
      });
      return dataKey;
  }
}

