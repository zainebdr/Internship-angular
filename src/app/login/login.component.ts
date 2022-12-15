import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { stringify } from 'querystring';
import { AuthService } from '../core/service/auth.service';
import { TokenStorageService } from '../core/service/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: any = {
    username: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

public
  constructor(private authService: AuthService, private tokenStorage: TokenStorageService,private router: Router,) {}

  ngOnInit():void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }
  }
  onSubmit(): void {

    const { username, password } = this.form;
    this.authService.login(username, password).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
        console.log("this.roles.toString()")
        if (this.roles.toString() == 'ROLE_ADMIN') {
          console.log("this.roles.toString()")
          this.router.navigate(['/dashbAdm']);
        } else if (this.roles.toString() == 'ROLE_USER') {
          this.router.navigate(['/dashbEtudiant']);
        }

      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }
  reloadPage(): void {
    window.location.reload();
  }

}


