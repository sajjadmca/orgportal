import { Component, OnInit } from '@angular/core';
import { DepartmentList, ProjectHead, Employee, ProjectAssign, CapgProject } from 'src/app/model/organisation.model';
import { OrganizationService } from 'src/app/shared/service/organization.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Location} from "@angular/common";

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {
  projectList: Employee[];
  capgProjectData: CapgProject[];
  id: number;
  projectId: number;
  p: number = 1;
  empId: string;
  projectFormHide = true;
  projectListHide = false;

  constructor(public organizationService: OrganizationService,
    private route: ActivatedRoute, private router: Router,
    private toastr: ToastrService, private formBuilder: FormBuilder,  private location: Location,
    ) { }

  addForm: FormGroup;
  ngOnInit() {
    this.getByEmployeeId();
    this.getAllProject();
  }

  getByEmployeeId() {
    this.id = this.route.snapshot.params['id'];
    this.organizationService.getByEmployeeId(this.id).subscribe(
      (data) => {
        this.projectList = data;
        this.empId = this.projectList[0].employeeId
      });
  }

  deleteProject(projectId: number) {
    console.log("project deleted idd", projectId)
    this.organizationService.deleteProjectById(projectId)
      .subscribe(
        data => {
          this.toastr.error('Project deleted successfully !', 'Done', {
            timeOut: 10000
          });
          setTimeout(() => { window.location.reload(); }, 2000)
        },
        error => console.log(error));
       
  }

  createProject(projectAssign: ProjectAssign) {
    this.projectFormHide = true;
    this.organizationService.assignProject(projectAssign).subscribe(
      (result: ProjectAssign) => {
        this.toastr.success('Project Assign successfully !', 'Done', {
          timeOut: 10000
        });
        setTimeout(() => { window.location.reload(); }, 2000)
        
      });
      
  }

  getAllProject() {
    this.organizationService.getAllProject().subscribe(
      (data) => {
        this.capgProjectData = data;
        console.log(this.capgProjectData);

      });
  }

  showProjectForm() {
    this.projectFormHide = false;
    this.projectListHide = true;
  }

  hideProjectForm() {
    this.projectFormHide = true;
    this.projectListHide = false;
  }

  backToEmploy() {
    this.router.navigate(['/head']);
  }

}
