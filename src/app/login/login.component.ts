import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../Services/api.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  loginError:string=''
  constructor(private fb:FormBuilder,private api:ApiService,private loginRouter:Router){}
  ngOnInit(): void {
  }

  loginForm=this.fb.group({
    email:['',[Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
    pswd:['',[Validators.required, Validators.pattern('[a-zA-Z0-9]*')]],
    fullName:['',[Validators.required, Validators.pattern('[a-zA-Z ]*')]]
  })
  login(){
    if(this.loginForm.valid){
    console.log(this.loginForm.value);
    let email=this.loginForm.value.email
    let pswd=this.loginForm.value.pswd
    let fullName=this.loginForm.value.fullName
    this.api.login(email,pswd,fullName).subscribe(
      {next:(detail:any)=>{
      localStorage.setItem('currentUser',detail.currentUser)
      localStorage.setItem('currentUserEmail',detail.currentUserEmail)


      // localStorage.setItem('currentUserNumber',detail.currentUserNumber)
      Swal.fire("Logged in","You have successfully logged in","success").then((result)=>this.loginRouter.navigateByUrl('homepage'))
      // setting username to localstorage
    },error:(error:any)=>{
      Swal.fire("ERROR","Something went wrong","error");
    }
  }
    )}
}}
