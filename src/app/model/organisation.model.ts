export interface DepartmentList {
    departmentId: string;
    departmentName: string;
    projectHead: ProjectHead[];
}

export interface ProjectHead {
    projectHeadId: string;
    projectHeadName: string;
    employee: Employee[];
    project: Project[];
}

export interface Project {
    projectName: string;
}

export interface Employee {
    id: number;
    employeeId: string;
    employeeName: string;
    projectAssign: ProjectAssign[];
}

export class ProjectAssign {
    id: number;
    projectName: string;
    employeeId: number;
}

export interface CapgProject {
    capgProjectName: string;
}
