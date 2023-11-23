import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  constructor(private http: HttpClient) { }

  //register api function
  register(email: any, pswd: any, phnNum: any, fullName: any) {
    const body = {
      email,
      pswd,
      phnNum,
      fullName
    }
    return this.http.post('http://localhost:5000/register', body)
  }

  //login api function
  login(email: any, pswd: any, fullName: any) {
    const body = {
      email,
      pswd,
      fullName
    }
    return this.http.post('http://localhost:5000/login', body)
  }

  //newsApi url
  newsApiUrl = "https://newsapi.org/v2/everything?domains=wsj.com&apiKey=8b649e9542dc4861bd0d2df5b9949531"

  //technews url
  techApiUrl = "https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=8b649e9542dc4861bd0d2df5b9949531"

  //business
  businessUrl = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=8b649e9542dc4861bd0d2df5b9949531"

  //sports
  sportsUrl = "https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=8b649e9542dc4861bd0d2df5b9949531"

  //Politics
  politicsUrl = "https://newsapi.org/v2/top-headlines?country=in&category=politics&apiKey=8b649e9542dc4861bd0d2df5b9949531"

  //health
  healthUrl = "https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=8b649e9542dc4861bd0d2df5b9949531"

  //science
  scienceUrl = "https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=8b649e9542dc4861bd0d2df5b9949531"

  //Entertainment
  EntertainmentUrl = "https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=8b649e9542dc4861bd0d2df5b9949531"


  //home
  topHeading(): Observable<any> {
    return this.http.get(this.newsApiUrl)
  }

  //tech
  techNews(): Observable<any> {
    return this.http.get(this.techApiUrl)
  }

  //business
  businessNews(): Observable<any> {
    return this.http.get(this.businessUrl)
  }
  //sports
  sportsNews(): Observable<any> {
    return this.http.get(this.sportsUrl)
  }
  //politics
  politicsNews(): Observable<any> {
    return this.http.get(this.politicsUrl)
  }
  //health
  healthnews(): Observable<any> {
    return this.http.get(this.healthUrl)
  }
  //science
  sciencenews(): Observable<any> {
    return this.http.get(this.scienceUrl)
  }
  // Entertainment
  entertainmentnews(): Observable<any> {
    return this.http.get(this.EntertainmentUrl)
  }

  //view
  viewAdminNews() {
    return this.http.get('http://localhost:5000/view-news')
  }
  //  admin login
  //login api function
  adminlogin(email: any, password: any) {
    const body = {
      email,
      password
    }
    return this.http.post('http://localhost:5000/adminlogin', body)
  }

  //admin add news
  addNews(heading:any,Date:any,NewsContent:any,ImageURL:any,id:any,NewsCategories:any) {
    const body = {
      heading,
      Date,
      NewsContent,
      ImageURL,
      id,
      NewsCategories
    }
    return this.http.post('http://localhost:5000/Add-news', body)
  }
  //get user _id
  getuserId(_id:any){
    return this.http.get(`http://localhost:5000/userId/${_id}`)
  }

  getParticularLocalNews(id:any){
    return this.http.get(`http://localhost:5000/view-localnews/${id}`)
  }

  deleteLocalNews(id:any){
    return this.http.delete(`http://localhost:5000/deleteLocalNews/${id}`)
  }

  deleteAccount(userId:any) {
  return this.http.delete(`http://localhost:5000/deleteAccount/${userId}`);
  }

  //feedback
  feedback(name:any,email:any,date:any,feedback:any){
    const body = {
      email,
      name,
      date,
      feedback
    }
    return this.http.post('http://localhost:5000/feedbacks',body)

  }
  // view feedback
  viewFeedback(){
    return this.http.get('http://localhost:5000/view-feedback')
  }

}

