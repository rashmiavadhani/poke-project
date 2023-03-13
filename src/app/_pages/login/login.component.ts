import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit { 

  loginDate: any = {}

  constructor(private router: Router) {}

  ngOnInit(){
    this.loginDate.userName = 'admin';
    this.loginDate.password = 'password';    
  }

  loginSubmit(){ 
    if(this.loginDate.userName === 'admin' && this.loginDate.password === 'password'){
      this.router.navigate(['./pokemondashboard'])
    }
  }

}
