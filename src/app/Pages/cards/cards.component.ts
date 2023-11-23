import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/Services/api.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit{

  searchKey:string=''
 
  
  constructor(private services:ApiService,){}

  //display data
  topHeadingDisplay:any=[]
  ngOnInit(): void {


    this.services.topHeading().subscribe((result)=>{
      console.log(result);
      this.topHeadingDisplay = result.articles
      
    })

   
  }
  Search(event:any){
    console.log(event.target.value);
    this.searchKey=event.target.value
    
  }

}

