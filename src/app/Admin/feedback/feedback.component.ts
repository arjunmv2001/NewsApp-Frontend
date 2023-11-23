import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'src/app/Services/api.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  feedbackDetails:any=[]
  constructor(private api:ApiService){}
  ngOnInit(): void {
    this.api.viewFeedback().subscribe((result:any)=>{
      console.log(result.data);
      this.feedbackDetails=result.data
    })
  }


}
