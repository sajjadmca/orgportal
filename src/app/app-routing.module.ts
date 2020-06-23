import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DepartmentComponent } from './department/department.component';
import { ProjectComponent } from './project/project.component';
import { HeadComponent } from './head/head.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './shared/service/auth-guard.service'; 
import { ProjectDetailComponent } from './project-detail/project-detail.component'

const routes: Routes = [
  {path:  "", pathMatch:  "full", redirectTo:  "home"},
  {path: "home", component: HomeComponent},
  {path: "department", component: DepartmentComponent},
  {path: "project", component: ProjectComponent},
  {path: "head", component: HeadComponent, canActivate: [AuthGuard]},
  {path: "about", component: AboutUsComponent}, 
  { path: "details/:id", component: ProjectDetailComponent },
  {path: "login", component: LoginComponent}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
