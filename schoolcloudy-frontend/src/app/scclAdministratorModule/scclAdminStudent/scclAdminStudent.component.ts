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
        this.tableSchema = this._scclTableService.setTableColumnLayout(this.getColumnConfigurations());
            if (this._scclTableService.getTableLoacalStorage().length === 0) {
                this._administratorService.getStudents().subscribe((data) => {
                    this._scclTableService.getTableStream().next(data.json());
                });
            }
            this.translate.use('lv');
    }

    getColumnConfigurations() {
        return [
                {title: 'ID', field: 'externalId', width: 120},
                {title: 'Name', field: 'name',  mutator: (cell, d) => d.firstName + ' ' + d.lastName, width: 150},
                {title: 'Department', field: 'department', width: 165},
                {title: 'Faculty', field: 'faculty', width: 209},
                {title: 'Username', field: 'credential', formatter: (d) => d.getValue().username, width: 135},
                {title: 'Address', field: 'contact', responsive: 1, width: 200,
                    formatter: (d) => d.getValue().houseNumber + ' ' + d.getValue().street + ' ' + d.getValue().city},
                {title: 'Email', field: 'contact', formatter: (d) => d.getValue().email, width: 200},
                {title: 'Enrolment Date', field: 'dateOfBirth', width: 170, sorter: 'date',
                 sorterParams: {format: 'MMM-dd-yyyy'},
                 formatter: (cell) => this.datePipe.transform(cell.getValue(), 'MMM dd, yyyy')},
                 {title: 'Status', field: 'status', responsive: 3, width: 90}
          ];
    }

    private addNewStudentToTable(ev) {
        this._administratorService.getStudents().subscribe((data) => {
            const d: Array<Object> = data.json();
        d.forEach((dd) => {
            Object.values(dd).forEach((dy) => {
                if (dy.toString().includes('Al')) {
                    
                }
            });
        });
        
       const uu =  d.map((t) => Object.values(t)).filter((x) => x);
       //console.log(uu);
            const u = d.filter((x) => {
                return x['firstName'] === ev || x['lastName'] === ev;
            });
            this._scclTableService._$newDataStream.next(u);
        });
    }
}
