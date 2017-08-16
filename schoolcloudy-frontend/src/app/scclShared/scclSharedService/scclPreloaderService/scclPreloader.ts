import {Injectable} from '@angular/core';

@Injectable()
export class ScclPreloaderService {
    private static _loaders: Array<Promise<any>> = [];
    private _selector = 'preloader';
    private _element: HTMLElement;

    public static registerLoader(method: Promise<any>): void {
        ScclPreloaderService._loaders.push(method);
      }

      public static clear(): void {
        ScclPreloaderService._loaders = [];
      }

      public static load(): Promise<any> {
        return new Promise((resolve, reject) => {
          ScclPreloaderService._executeAll(resolve);
        });
      }

      private static _executeAll(done: Function): void {
        setTimeout(() => {
          Promise.all(ScclPreloaderService._loaders).then((values) => {
            done.call(null, values);

          }).catch((error) => {
            console.error(error);
          });
        });
      }

    constructor() {
        this._element = document.getElementById(this._selector);
    }

    public show(): void {
        this._element.style['display'] = 'block';
    }

    public hide(delay: number = 0): void {
        setTimeout(() => {
            this._element.style['display'] = 'none';
        }, delay);
    }
}
