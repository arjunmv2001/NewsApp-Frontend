import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MainNewsComponent } from './main-news/main-news.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { HomepageComponent } from './Pages/homepage/homepage.component';
import { CardsComponent } from './Pages/cards/cards.component'
import { ApiService } from './Services/api.service';
import { TechnewsComponent } from './Pages/technews/technews.component';
import { BusinessnewsComponent } from './Pages/businessnews/businessnews.component';
import { SportsComponent } from './Pages/sports/sports.component';
import { PoliticsComponent } from './Pages/politics/politics.component';
import { HealthComponent } from './Pages/health/health.component';
import { ScienceComponent } from './Pages/science/science.component';
import { EntertainmentComponent } from './Pages/entertainment/entertainment.component';
import { StickComponent } from './stick/stick.component';
import { FilterPipe } from './pipes/filter.pipe';
// for HttpClient import:
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AdminloginComponent } from './Admin/adminlogin/adminlogin.component';
import { LocalNewsComponent } from './local-news/local-news.component';
import { AdminHomeComponent } from './Admin/admin-home/admin-home.component';
import { DeleteAccountComponent } from './delete-account/delete-account.component';
import { NgxPayPalModule } from 'ngx-paypal';
import { ViewLocalNewsComponent } from './view-local-news/view-local-news.component';
import { AdminViewNewsComponent } from './Admin/admin-view-news/admin-view-news.component';
import { AdminReadNewsComponent } from './Admin/admin-read-news/admin-read-news.component';
import { FeedbackComponent } from './Admin/feedback/feedback.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    MainNewsComponent,
    HomepageComponent,
    CardsComponent,
    TechnewsComponent,
    BusinessnewsComponent,
    SportsComponent,
    PoliticsComponent,
    HealthComponent,
    ScienceComponent,
    EntertainmentComponent,
    StickComponent,
    FilterPipe,
    PagenotfoundComponent,
    AdminloginComponent,
    LocalNewsComponent,
    AdminHomeComponent,
    DeleteAccountComponent,
    ViewLocalNewsComponent,
    AdminViewNewsComponent,
    AdminReadNewsComponent,
    FeedbackComponent,
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    LoadingBarHttpClientModule,
    NgxPayPalModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
