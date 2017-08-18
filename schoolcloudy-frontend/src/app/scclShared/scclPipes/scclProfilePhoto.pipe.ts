import {Pipe, PipeTransform} from '@angular/core';
import { scclLayoutPaths } from '../scclSharedModule/scclLayoutModule/scclLayout.constants';


@Pipe({name: 'scclProfilePhoto'})
export class ScclProfilePhotoPipe implements PipeTransform {

  transform(input: string, ext = 'png'): string {
    return scclLayoutPaths.images.profile + input + '.' + ext;
  }
}
