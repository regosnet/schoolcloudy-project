import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ScclGlobalState } from '../../scclGlobalState';
import { Administrator } from '../../scclShared/scclModels/administrator/administrator';
import { ScclAdmininstratorService } from '../scclAdministrator.service';
import { ScclTableService } from '../../scclShared/scclSharedModule/scclTableModule/scclTable.service';
import { DatePipe } from '@angular/common';

@Component({
    selector: 'sccl-admin-student',
    templateUrl: './scclAdminStudent.html',
    styleUrls: ['./scclAdminStudent.scss']
})
export class ScclAdminStudentComponent implements OnInit {

    private tableTitle = 'sccl.menu.left_side_bar.students';
    private tableSchema;

    constructor(private translate: TranslateService,
            private _scclGlobalState: ScclGlobalState,
            private _administratorService: ScclAdmininstratorService,
            private _scclTableService: ScclTableService, private datePipe: DatePipe) {
    }

    ngOnInit(): void {
            if (this._scclTableService.getDataSource().length === 0) {
                this.tableSchema = this.getColumnConfigurations();
                this._administratorService.getStudents().subscribe((data) => {
                    this._scclTableService.getTableStream().next([{data: data.json()}, {tableSchema: this.tableSchema}]);
                });
            }
            this.translate.use('lv');
    }

    getColumnConfigurations() {
        return [
                {title: 'ID', field: 'externalId', width: 85},
                {title: 'Name', field: 'name',  mutator: (cell, d) => d.firstName + ' ' + d.lastName, width: 135},
                {title: 'Department', field: 'department', width: 165},
                {title: 'Faculty', field: 'faculty', width: 129},
                {title: 'Username', field: 'credential', formatter: (d) => d.getValue().username, width: 135},
                {title: 'Address', field: 'contact', responsive: 1, width: 180,
                    formatter: (d) => d.getValue().houseNumber + ' ' + d.getValue().street + ' ' + d.getValue().city},
                {title: 'Email', field: 'contact', formatter: (d) => d.getValue().email, width: 135},
                {title: 'Enrolment Date', field: 'dateOfBirth', width: 135, sorter: 'date',
                 sorterParams: {format: 'MMM-dd-yyyy'},
                 formatter: (cell) => this.datePipe.transform(cell.getValue(), 'MMM dd, yyyy')},
                 {title: 'Status', field: 'status', responsive: 3, width: 65}
          ];
    }
}
