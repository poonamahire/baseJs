import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashComponent } from './dash/dash.component';
import { SigninComponent } from './signin/signin.component';

const routes: Routes = [
{path: '',component:DashComponent},
// {path: 'dash',component:DashComponent},
{path: 'signin',component:SigninComponent}


];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
export const routingComponents=[DashComponent,SigninComponent]
