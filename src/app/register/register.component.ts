import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/service/auth.service';
import { TokenStorageService } from '../core/service/token-storage.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form: any = {
    username: null,
    email: null,
    password: null
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService,private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
  }
  onSubmit(): void {
    console.log("hedhy data");
    const { username, email, password } = this.form;

    this.authService.register(username, email, password).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }
  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
}
