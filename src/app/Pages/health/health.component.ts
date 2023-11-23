import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/Services/api.service';

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.css']
})
export class HealthComponent implements OnInit {
  searchKey:string=''
  constructor(private services:ApiService){}
  healthnewsDisplay:any=[]
  ngOnInit(): void {
    this.services.healthnews().subscribe((result)=>{
      this.healthnewsDisplay=result.articles
    })
  }
  Search(event:any){
    console.log(event.target.value);
    this.searchKey=event.target.value
    
  }
}
