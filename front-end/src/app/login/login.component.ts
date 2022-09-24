import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private userservice: UserService, private path: Router) {}

  ngOnInit(): void {}
  onSubmit(user: any) {
    console.log(user.value);
    this.userservice.login(user.value).subscribe(() => {
      if (user) {
        this.path.navigate(['home']);
      } else 
        alert('wrong password or username');
      
      // this.path.navigate(['user/signin']);
    });
  }
}
