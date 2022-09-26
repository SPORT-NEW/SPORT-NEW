import { UserService } from './../_services/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {


  constructor(private userservice :UserService,private path: Router) {}

  ngOnInit(): void {}
  onSubmit(user:any){
    
  
    
    
    this.userservice.signup(user.value).subscribe(  ()=>this.path.navigate(['/'])
    );
  }
}
