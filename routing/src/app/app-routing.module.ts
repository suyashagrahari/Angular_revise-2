import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { UserComponent } from './user/user.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
   {
    path : 'about/:id',
    component : AboutComponent,
   },
   {
    path : 'user/:id',
    component : UserComponent
   },
   {
    path : '',
    component : HomeComponent,
   },
   {
    path : '**',
    component : ErrorComponent,
   }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
