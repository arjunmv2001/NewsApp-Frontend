import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/Services/api.service';

@Component({
  selector: 'app-technews',
  templateUrl: './technews.component.html',
  styleUrls: ['./technews.component.css']
})
export class TechnewsComponent implements OnInit {
  searchKey:string=''
  constructor(private services:ApiService){}
  technewsDisplay:any = []
  ngOnInit(): void {
    this.services.techNews().subscribe((result)=>{
      this.technewsDisplay = result.articles
    })
  }
  Search(event:any){
    console.log(event.target.value);
    this.searchKey=event.target.value
    
  }
}
