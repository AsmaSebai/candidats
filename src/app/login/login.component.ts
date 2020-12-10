import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  userName
  password
  mouseoverLogin
  loginInvalid= false
constructor(private authenService: AuthService, private router:Router){}

login(formValues){
  this.authenService.loginUser(formValues.userName,formValues.password )
  if(!this.authenService.currentUser){
    this.loginInvalid= true
        }
        else {
            this.router.navigate(['candidat'])
        }

console.log("userName"+formValues.userName, "password"+formValues.password);

}




cancel(){
  
this.authenService.logout();
}

}