import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class ScclTableService {
    private _dataStream$ = new BehaviorSubject<any>([]);

    public getDataStream() {
        return this._dataStream$;
    }
}
