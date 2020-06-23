import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DepartmentComponent } from './department/department.component';
import { ProjectComponent } from './project/project.component';
import { HeadComponent } from './head/head.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { OrganizationService } from './shared/service/organization.service';
import { ProjectFilterPipe } from './project-filter.pipe'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { LoginComponent } from './login/login.component';
import { NgxSpinnerModule} from "ngx-spinner";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DepartmentComponent,
    ProjectComponent,
    HeadComponent,
    AboutUsComponent,
    ProjectFilterPipe,
    LoginComponent,
    ProjectDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot() 
  ],
  providers: [OrganizationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
