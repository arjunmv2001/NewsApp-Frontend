import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/Services/api.service';

@Component({
  selector: 'app-politics',
  templateUrl: './politics.component.html',
  styleUrls: ['./politics.component.css']
})
export class PoliticsComponent implements OnInit {
  searchKey:string=''
  constructor(private services:ApiService){}
  politicsnewsDisplay:any=[]
  ngOnInit(): void {
    this.services.politicsNews().subscribe((result)=>{
      console.log(result);
      
      this.politicsnewsDisplay=result.articles
    })
  }
  Search(event:any){
    console.log(event.target.value);
    this.searchKey=event.target.value
    
  }
}
