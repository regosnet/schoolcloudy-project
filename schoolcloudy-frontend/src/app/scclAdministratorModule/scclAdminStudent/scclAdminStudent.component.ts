import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'sccl-admin-student',
    template: `
    
<h3 translate>{{'sccl.menu.left_side_bar.students'}}</h3>

    `
})
export class ScclAdminStudentComponent {
    
    constructor(private translate: TranslateService) {
	
    }
}
