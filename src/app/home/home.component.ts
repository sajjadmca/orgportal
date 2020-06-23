import { Component, OnInit } from '@angular/core';
import { DepartmentList, ProjectHead } from 'src/app/model/organisation.model';
import { OrganizationService } from 'src/app/shared/service/organization.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  departmentList: DepartmentList[];
  p: number = 1;
  constructor(private organizationService: OrganizationService,
    private spinner: NgxSpinnerService) { }

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
        this.departmentList = data;
        console.log(this.departmentList);

      });
  }

}
