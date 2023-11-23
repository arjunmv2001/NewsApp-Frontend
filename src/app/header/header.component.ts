import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ApiService } from '../Services/api.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userEmail:String=''
  userNumber:any
  loginDate:any
  user:String='' //to hold currentuser name
  constructor(private api:ApiService, private logOutRouter:Router, private fb:FormBuilder){
    this.loginDate=new Date()
  }

  feedbackForm=this.fb.group({
    name:['',Validators.required],
    email:['',Validators.required],
    date:['',Validators.required],
    feedback:['',Validators.required]
  })
  addFeedback(){
    if(this.feedbackForm.valid){
      console.log(this.feedbackForm.value);
      let name = this.feedbackForm.value.name
      let email = this.feedbackForm.value.email
      let date = this.feedbackForm.value.date
      let feedback = this.feedbackForm.value.feedback
      console.log(name,email,date,feedback);
      this.api.feedback(name,email,date,feedback).subscribe((response:any)=>{
        console.log(response);
        alert(response.message)
        this.feedbackForm.reset()        
      })
    }
  }
  ngOnInit(): void {
    if(localStorage.getItem('currentUser')){
      this.user=localStorage.getItem('currentUser')||'';
    }
    if(localStorage.getItem('currentUserEmail')){
      this.userEmail=localStorage.getItem('currentUserEmail')||''
    }
  }

  logout(){
    this.logOutRouter.navigateByUrl('')
    localStorage.clear()
  }

  //delete user
  deleteUser(){
    this.api.deleteAccount(this.userEmail).subscribe((data:any)=>{
      console.log(data);
      alert(data.message)
      localStorage.clear() 
      this.logOutRouter.navigateByUrl('')     
    })
  }
  
  }
