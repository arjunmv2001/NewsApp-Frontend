import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/Services/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent {
  adminloginError: string = ''
  constructor(private api: ApiService, private fb: FormBuilder, private adminloginRouter:Router) { }

  adminloginForm = this.fb.group({
    email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
    password: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]],
  })
  adminlogin() {
    if (this.adminloginForm.valid) {
      // let Number = this.adminLoginForm.value.Number
      let email = this.adminloginForm.value.email
      let password = this.adminloginForm.value.password
      //success
      this.api.adminlogin(email,password).subscribe((response: any) => {

        Swal.fire("Admin logged In", "You have successfully logged In", "success").then((result) => {

          setTimeout(() => {
            this.adminloginRouter.navigateByUrl('admin-home')
          }, 1000);

        })

      },
        (response: any) => {
          Swal.fire("Error", "Invalid Email or Password", "error")
          this.adminloginError = response.error.message
          setTimeout(() => {
            this.adminloginForm.reset()
            this.adminloginError = ''
          }, 1000);
        })

    }
    else {
      alert('Invalid Login')
    }

  }
  }



