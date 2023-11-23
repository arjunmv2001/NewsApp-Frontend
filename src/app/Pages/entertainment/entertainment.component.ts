import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/Services/api.service';

@Component({
  selector: 'app-entertainment',
  templateUrl: './entertainment.component.html',
  styleUrls: ['./entertainment.component.css']
})
export class EntertainmentComponent implements OnInit {
  searchKey:string=''
  constructor(private services:ApiService){}
  entertainmentnewsDisplay:any=[]
  ngOnInit(): void {
    this.services.entertainmentnews().subscribe((result)=>{
      this.entertainmentnewsDisplay=result.articles
    })
  }
  Search(event:any){
    console.log(event.target.value);
    this.searchKey=event.target.value
    
  }
}
