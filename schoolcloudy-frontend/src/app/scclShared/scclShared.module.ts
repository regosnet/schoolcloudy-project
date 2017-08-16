import { NgModule } from '@angular/core';
import { ScclMenuService } from './scclSharedService/scclMenuService/scclMenuService';
import { ScclPreloaderService } from './scclSharedService/scclPreloaderService/scclPreloader';

const SCCL_SHARED_SERVICE = [
    ScclMenuService,
    ScclPreloaderService
];

@NgModule({
    imports:
        [

         ],
    declarations: [

    ],
    providers: [
        ...SCCL_SHARED_SERVICE
   ]
})
export class ScclSharedModule {

}
