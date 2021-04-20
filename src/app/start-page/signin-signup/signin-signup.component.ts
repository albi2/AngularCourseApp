import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthService } from '../../auth.service';
import { HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signin-signup',
  templateUrl: './signin-signup.component.html',
  styleUrls: ['./signin-signup.component.css']
})
export class SigninSignupComponent implements OnInit {
  @Input() signupMode: boolean;
  type = "student";
  signInGroup = this.fb.group({
    email: [''],
    password: ['']
  });

  signUpGroup = this.fb.group({
    username: [''],
    email: [''],
    password: ['']
  })

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) { 
  }

  ngOnInit() {
  }

 onLoginClicked() {
   const email = this.signInGroup.get('email').value;
   const password = this.signInGroup.get('password').value;
   this.auth.login(email, password).subscribe((response: HttpResponse<any>) => {
     if(response.status === 200) {
      this.router.navigate(['/user']);
     }
     console.log(response);
   });
 }

}
