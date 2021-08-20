import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { MoviesComponent } from './movies/movies.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path: '', component: MoviesComponent, pathMatch: 'full'},
  {path: 'profile', component: UserComponent},
  {path: 'auth', component: AuthComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
