import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/Services/api.service';

@Component({
  selector: 'app-admin-read-news',
  templateUrl: './admin-read-news.component.html',
  styleUrls: ['./admin-read-news.component.css']
})
export class AdminReadNewsComponent implements OnInit {
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
