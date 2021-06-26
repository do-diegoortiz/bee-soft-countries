import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { BlogComponent } from './blog/blog.component';
import { CountryComponent } from './country/country.component';
import { HomeComponent } from './home/home.component';
import { MoviesCompComponent } from './movies-comp/movies-comp.component';
import { CartoonsComponent } from './cartoons/cartoons.component';
import { SongsComponent } from './songs/songs.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'countries', canActivate: [AuthGuard], component: CountryComponent },
  { path: 'posts', component: BlogComponent },
  { path: 'moviesComp', component: MoviesCompComponent },
  { path: 'cartoons', component: CartoonsComponent },
  { path: 'song', component: SongsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
