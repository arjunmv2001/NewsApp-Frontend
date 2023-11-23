import { Component, OnInit } from '@angular/core';
import { ApiService } from '../Services/api.service';

@Component({
  selector: 'app-local-news',
  templateUrl: './local-news.component.html',
  styleUrls: ['./local-news.component.css']
})
export class LocalNewsComponent implements OnInit{
  searchKey:string=''
  allNews:any=[]
  constructor(private api:ApiService){}
  ngOnInit(): void {
    this.api.viewAdminNews().subscribe((result:any)=>{
      console.log(result.data);
      this.allNews=result.data
      
    })
  }
  Search(event:any){
    console.log(event.target.value);
    this.searchKey=event.target.value
    
  }

}
