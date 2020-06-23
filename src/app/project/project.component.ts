import { Component, OnInit } from '@angular/core';
import { DepartmentList, ProjectHead, Employee, Project, CapgProject } from 'src/app/model/organisation.model';
import { OrganizationService } from 'src/app/shared/service/organization.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  departmentData: DepartmentList[];
  searchWord: string;
  constructor(private organizationService: OrganizationService) { }

  ngOnInit() {
    this.getAllDepartment();
  }

  getAllDepartment() {
    this.organizationService.getAllDepartment().subscribe(
      (data) => {
        this.departmentData = data;
        console.log(this.departmentData);

      });
  }
}
