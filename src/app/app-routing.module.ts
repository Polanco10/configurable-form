import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServerResolver } from './services/server-resolver.service';
import { UserComponent } from './components/user/user.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  {path:'users/:id',component:UserComponent,resolve:{server:ServerResolver}},
  {path:'persons/:id',component:UserComponent,resolve:{server:ServerResolver}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
