import { Component, OnInit } from '@angular/core';
import { DepartmentList, ProjectHead } from 'src/app/model/organisation.model';
import { OrganizationService } from 'src/app/shared/service/organization.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  departmentData: DepartmentList[];
  filterDepartmentData: DepartmentList[];
  constructor(private organizationService: OrganizationService, private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.spinner.show();

    setTimeout(() => {
      this.spinner.hide();
    }, 2000);
    this.getAlDepartment();
  }
  getAlDepartment() {
    this.organizationService.getAllDepartment().subscribe(
      (data) => {
        this.departmentData = data;
        this.filterDepartmentData = data;
        console.log(this.filterDepartmentData);

      });
  }

  filterDepartment(filterVal: any) {
    if (filterVal == "0")
      this.departmentData = this.filterDepartmentData;
    else
      this.departmentData = this.filterDepartmentData.filter((item) => item.departmentName == filterVal);
  }
}
