import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/Services/api.service';

@Component({
  selector: 'app-science',
  templateUrl: './science.component.html',
  styleUrls: ['./science.component.css']
})
export class ScienceComponent implements OnInit {
  searchKey:string=''
  constructor(private services:ApiService){}
  sciencenewsDisplay:any=[]
  ngOnInit(): void {
    this.services.sciencenews().subscribe((result)=>{
      this.sciencenewsDisplay=result.articles
    })
  }
  Search(event:any){
    console.log(event.target.value);
    this.searchKey=event.target.value
    
  }
}
