import { Component, OnInit } from '@angular/core';
import { DepartmentList, ProjectHead, Employee, ProjectAssign } from 'src/app/model/organisation.model';
import { OrganizationService } from 'src/app/shared/service/organization.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit {
  employeeData: Employee[];
  p: number = 1;

  constructor(private organizationService: OrganizationService, private _router: Router) { }

  ngOnInit() {
    this.getAllEmploy();
  }

  getAllEmploy() {
    this.organizationService.getAllEmployee().subscribe(
      (data) => {
        this.employeeData = data;
        console.log(this.employeeData);

      });
  }

  employeeDetails(employeeId: number) {
    this._router.navigate(['details', employeeId]);
  }

  logout() {
    this.organizationService.logout();
    this._router.navigate(['/home']);
  }
}
