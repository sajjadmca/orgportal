import { Component, OnInit } from '@angular/core';
import { OrganizationService } from 'src/app/shared/service/organization.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  constructor(private organizationService: OrganizationService, private _router: Router,
    private toastr: ToastrService) { }

  ngOnInit() {
  }

  login(): void {
    if (this.username != '' && this.password != '') {
      if (this.organizationService.login(this.username, this.password)) {
        this._router.navigate(['/head']);
      }
      else
        this.toastr.error('Wrong username or password !', 'Error', {
          timeOut: 5000
        });
    }
  }
}
