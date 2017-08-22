import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'sccl-admin-academics',
    template: `
    
<h3 translate>{{'sccl.login.title'}}</h3>

    `
})
export class ScclAdminAcademicsComponent {
    
    constructor(private translate: TranslateService) {
	
    }
}
