import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TopSliderComponent } from './components/home/top-slider/top-slider.component';
import { MiddleBoxComponent } from './components/home/middle-box/middle-box.component';
import { CommentComponent } from './components/home/comment/comment.component';
import { BlogComponent } from './components/home/blog/blog.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { SidebarComponent } from './components/admin/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { MainComponent } from './components/home/main/main.component';
import { MoviesComponent } from './components/movies/movies.component';
import { UpcomingMoviesComponent } from './components/upcoming-movies/upcoming-movies.component';
import { ShowTimeComponent } from './components/show-time/show-time.component';
import { MoviesInfoComponent } from './components/movies-info/movies-info.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TopSliderComponent,
    MiddleBoxComponent,
    CommentComponent,
    BlogComponent,
    DashboardComponent,
    SidebarComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    MainComponent,
    MoviesComponent,
    UpcomingMoviesComponent,
    ShowTimeComponent,
    MoviesInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
