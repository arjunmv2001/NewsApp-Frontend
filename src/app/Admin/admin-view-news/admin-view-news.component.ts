import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/Services/api.service';

@Component({
  selector: 'app-admin-view-news',
  templateUrl: './admin-view-news.component.html',
  styleUrls: ['./admin-view-news.component.css']
})
export class AdminViewNewsComponent implements OnInit {
  allNews:any=[]

  constructor(private api:ApiService, private newsRouter:Router){}
  ngOnInit(): void {
    this.api.viewAdminNews().subscribe((result:any)=>{
      console.log(result.data);
      this.allNews=result.data
    })
  
}
deleting(id:any){
  this.api.deleteLocalNews(id).subscribe((data:any)=>{
    console.log(data);
    alert(data.message)
    this.newsRouter.navigateByUrl('admin-home') 
  },
  (data)=>{
    alert(data.error)
  }
  )
}
}
