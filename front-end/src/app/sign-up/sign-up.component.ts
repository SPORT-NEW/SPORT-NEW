import { UserService } from './../_services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  form: any = {
    username: null,
    email: null,
    password: null,
  
  };
  signup = false;
  signupfailed = false;
  error = '';

  constructor(private userservice :UserService) {}

  ngOnInit(): void {}
  onSubmit(event:any){
    event.preventDefault();
    const { username, email, password,  } = this.form;
    console.log(username, email, password);
    
    this.userservice.signup(username, email, password).subscribe(  {
      next: (data) => {
        console.log(data);
        this.signup = true;
        this.signupfailed = false;
      },
      error: (err) => {
        this.error = err.error.message;
        this.signupfailed = true;
        this.signup = false;
      }
    });
  }
}
