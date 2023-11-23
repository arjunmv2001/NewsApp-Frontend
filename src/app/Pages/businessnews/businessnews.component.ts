import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/Services/api.service';

@Component({
  selector: 'app-businessnews',
  templateUrl: './businessnews.component.html',
  styleUrls: ['./businessnews.component.css']
})
export class BusinessnewsComponent implements OnInit {
  searchKey:string=''
  constructor(private services:ApiService){}
  businesssnewsDisplay:any=[]
  ngOnInit(): void {
    this.services.businessNews().subscribe((result)=>{
      this.businesssnewsDisplay=result.articles
    })
  }
  Search(event:any){
    console.log(event.target.value);
    this.searchKey=event.target.value
    
  }

}
