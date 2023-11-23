import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/Services/api.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent {
  constructor(private api:ApiService, private fb:FormBuilder, private addRouter:Router){}
  addnewsForm = this.fb.group({
    heading:['',Validators.required],
    Date:['',Validators.required],
    NewsContent:['',Validators.required],
    ImageURL:['',Validators.required],
    NewsCategories:['',Validators.required],
    id:['',Validators.required],
  })
  addingNews(){
    if(this.addnewsForm.valid){
      console.log(this.addnewsForm.value);
      let heading = this.addnewsForm.value.heading;
      let Date = this.addnewsForm.value.Date;
      let NewsContent = this.addnewsForm.value.NewsContent;
      let ImageURL = this.addnewsForm.value.ImageURL;
      let id = this.addnewsForm.value.id;
      let NewsCategories = this.addnewsForm.value.NewsCategories
      console.log(heading,Date,NewsContent,ImageURL,Date,NewsCategories,id);
      this.api.addNews(heading,Date,NewsContent,ImageURL,id,NewsCategories,).subscribe((response:any)=>{
        console.log(response);
        alert(response.message)
        this.addnewsForm.reset()
        this.addRouter.navigateByUrl('Admin-viewNews')
      },
      (response:any)=>{
        alert('News already exist')
      }
      )
      
    }
    else{
      alert('Invalid form')
    }

  }

}
