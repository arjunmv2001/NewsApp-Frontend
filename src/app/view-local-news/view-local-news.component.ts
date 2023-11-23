import { Component, OnInit } from '@angular/core';
import { ApiService } from '../Services/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-local-news',
  templateUrl: './view-local-news.component.html',
  styleUrls: ['./view-local-news.component.css']
})
export class ViewLocalNewsComponent implements OnInit{
  allLocalNews:any={}
  newsId:string=''
  constructor(private api:ApiService, private activatedroute:ActivatedRoute){}
  ngOnInit(): void {
    this.activatedroute.params.subscribe((data:any)=>{
      console.log(data);
      this.newsId=data.id
      console.log(this.newsId);  
    })
    this.api.getParticularLocalNews(this.newsId).subscribe((result:any)=>{
      this.allLocalNews=result.data
      console.log(this.allLocalNews);      
    })
  }

}
