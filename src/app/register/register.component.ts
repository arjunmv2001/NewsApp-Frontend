import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../Services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  RegisterError:String=''
  constructor(private fb:FormBuilder,private api:ApiService,private loginRouter:Router){}
  registerForm=this.fb.group({ //formGroup
    email:['',[Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]], //formArray
    pswd:['',[Validators.required, Validators.pattern('[a-zA-Z0-9]*')]],
    phnNum:['',[Validators.required, Validators.pattern('[((\\+91-?)|0)?[0-9]{10}$')]],
    fullName:['',[Validators.required, Validators.pattern('[a-zA-Z ]*')]]
  })
  //form Control passed to html
  register(){
    if(this.registerForm.valid){
      console.log(this.registerForm.value);
    let email=this.registerForm.value.email
    let pswd = this.registerForm.value.pswd
    let phnNum = this.registerForm.value.phnNum
    let fullName= this.registerForm.value.fullName
    console.log(email,pswd,phnNum,fullName);
    //api call to register
   this.api.register(email,pswd,phnNum,fullName).subscribe((result:any)=>{
    console.log(result);
    alert(result.message)
    //redirect to loginPage
    this.loginRouter.navigateByUrl('login')
    
   },
   (result:any)=>{
    this.RegisterError=result.error.message
    setTimeout(()=>{
      this.registerForm.reset()
      this.RegisterError=''
    },3000)
   }
   ) 
    }
    else{
      alert('Invalid Form')
    }
   
  }  
  }

