import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName:string="";
  password:string="";
  message:string="";

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  login()
  {if(this.userName  && this.password )
    {
   if (this.userName == "user" && this.password =="admin"){
     this.router.navigate(['/first']);
   }else{
     this.message="Invalid UserName or Password";
   }}
   else{
    this.message="please provide credentials";
   }
  }
}
