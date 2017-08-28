import {Pipe, PipeTransform} from '@angular/core';
import { scclLayoutPaths } from '../scclSharedModule/scclLayoutModule/scclLayout.constants';


@Pipe({name: 'scclPngExt'})
export class ScclPngExtPipe implements PipeTransform {

  transform(input: string, ext = 'png'): string {
    return scclLayoutPaths.images.root + input + '.' + ext;
  }
}