import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/Services/api.service';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit {
  searchKey:string=''
  constructor(private services:ApiService){}
  sportsnewsDisplay:any=[]
  ngOnInit(): void {
     this.services.sportsNews().subscribe((result)=>{
      this.sportsnewsDisplay=result.articles
    })
  }
  Search(event:any){
    console.log(event.target.value);
    this.searchKey=event.target.value
    
  }
}
