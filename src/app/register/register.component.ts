import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../core/service/auth.service';
import { TokenStorageService } from '../core/service/token-storage.service';
import { UserModel } from '../core/model/User';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registryForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(4)]),
    email: new FormControl('', [Validators.required, Validators.minLength(5),]),
    password: new FormControl('', [Validators.required, Validators.minLength(9),]),
  });
  constructor(private authService: AuthService,private tokenStorageService: TokenStorageService,private router: Router) { }

  ngOnInit(): void {
  }
  onSubmit(): void {
    let user = new UserModel()
    user=this.registryForm.value

    this.authService.register(user.username, user.email, user.password).subscribe(
      data => {
        console.log(data);
      },
      err => {

      }
    );
  }
  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
  get uf(){
    return this.registryForm.controls;
  }
  resetForm() {
    this.registryForm.reset();
  }



}






