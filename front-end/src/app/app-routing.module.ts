import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AddnewsComponent } from './addnews/addnews.component';
import { AsUserComponent } from './as-user/as-user.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"signup",component:SignUpComponent},
  {path:"",component:LoginComponent},
  {path:"about",component:AboutComponent},
  {path:"add",component:AddnewsComponent},
  {path:"as",component:AsUserComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
