import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MainNewsComponent } from './main-news/main-news.component';
import { HomepageComponent } from './Pages/homepage/homepage.component';
import { TechnewsComponent } from './Pages/technews/technews.component';
import { BusinessnewsComponent } from './Pages/businessnews/businessnews.component';
import { SportsComponent } from './Pages/sports/sports.component';
import { PoliticsComponent } from './Pages/politics/politics.component';
import { HealthComponent } from './Pages/health/health.component';
import { ScienceComponent } from './Pages/science/science.component';
import { EntertainmentComponent } from './Pages/entertainment/entertainment.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AdminloginComponent } from './Admin/adminlogin/adminlogin.component';
import { LocalNewsComponent } from './local-news/local-news.component';
import { AdminHomeComponent } from './Admin/admin-home/admin-home.component';
import { ViewLocalNewsComponent } from './view-local-news/view-local-news.component';
import { AdminViewNewsComponent } from './Admin/admin-view-news/admin-view-news.component';
import { AdminReadNewsComponent } from './Admin/admin-read-news/admin-read-news.component';
import { FeedbackComponent } from './Admin/feedback/feedback.component';

const routes: Routes = [
 
  {
    path:'', component:MainNewsComponent
  },
  {
    path:'login', component:LoginComponent
  },
  {
    path:'register', component:RegisterComponent
  },
  {
    path:'homepage', component:HomepageComponent
  },
  {
    path:'Technews', component:TechnewsComponent
  },
  {
    path:'Businessnews', component:BusinessnewsComponent
  },
  {
    path:'Sportsnews', component:SportsComponent
  },
  {
    path:'Politicsnews', component:PoliticsComponent
  },
  {
    path:'Healthnews', component:HealthComponent
  },
  {
    path:'Sciencenews', component:ScienceComponent
  },
  {
    path:'Entertainmentnews', component:EntertainmentComponent
  },
  {
    path:'Admin-login', component:AdminloginComponent
  },
  {
    path:'local-news', component:LocalNewsComponent
  },
  {
    path:'admin-home', component:AdminHomeComponent
  },
  {
    path:'view-localNews/:id' , component:ViewLocalNewsComponent
  },
  {
    path:'Admin-viewNews' , component:AdminViewNewsComponent
  },
  {
    path:'Admin-view-news/:id' , component:AdminReadNewsComponent
  },
  {
    path:'Feedback' , component:FeedbackComponent
  },
  {
    path:'**', component:PagenotfoundComponent
  }
  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
