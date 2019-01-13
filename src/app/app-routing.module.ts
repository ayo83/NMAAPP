import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { MainComponent } from './components/home/main/main.component';
import { MoviesComponent } from './components/movies/movies.component';
import { UpcomingMoviesComponent } from './components/upcoming-movies/upcoming-movies.component';
import { ShowTimeComponent } from './components/show-time/show-time.component';
import { MoviesInfoComponent } from './components/movies-info/movies-info.component';


const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'movies', component: MoviesComponent},
  {path: 'movies/showtime', component: ShowTimeComponent},
  {path: 'movies/upcoming', component: UpcomingMoviesComponent},
  {path: 'movies/info', component: MoviesInfoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
