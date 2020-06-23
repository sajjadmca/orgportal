import { Injectable } from '@angular/core';
import { DepartmentList, ProjectHead, Project, CapgProject, Employee, ProjectAssign } from 'src/app/model/organisation.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const headerOption = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class OrganizationService {

  orgUrl: string = 'http://localhost:3000/departmentList';
  empUrl: string = ' http://localhost:3000';

  projectAssign: ProjectAssign[];

  currentProject: ProjectAssign = {
    id: null,
    projectName: '',
    employeeId: null
  }

  constructor(private http: HttpClient) { }

  getAllDepartment(): Observable<DepartmentList[]> {
    return this.http.get<DepartmentList[]>(this.orgUrl, headerOption);
  }

  getAllEmployee(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.empUrl + '/employee', headerOption);
  }

  getByEmployeeId(id: number): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.empUrl}/employee/${id}/projectAssign`);
  }

  deleteProjectById(id: number): Observable<ProjectAssign[]> {
    return this.http.delete<ProjectAssign[]>(this.empUrl + '/projectAssign/' + id);
  }

  assignProject(projectAssign: ProjectAssign): Observable<ProjectAssign> {
    return this.http.post<ProjectAssign>(this.empUrl + '/projectAssign/', projectAssign, headerOption);
  }

  getAllProject(): Observable<CapgProject[]> {
    return this.http.get<CapgProject[]>(this.empUrl + '/capgProject', headerOption);
  }

  login(username: string, password: string) {
    if (username == "admin" && password == "admin") {
      localStorage.setItem('username', "admin");
      return true;
    }
    else {
      return false;
    }
  }

  logout() {
    localStorage.removeItem('username');
  }
}
