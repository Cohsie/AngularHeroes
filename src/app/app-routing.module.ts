import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404PageComponent } from './shared/pages/error404-page/error404-page.component';


const routes: Routes = [
  {
    path: 'auth',//auth-routing.modules
    loadChildren: () => import('./auth/auth.module').then(m=>m.AuthModule)
  },
  {
    path: 'heroes',//heroes-routing.modules
    loadChildren: () => import('./heroes/heroes.module').then(m=>m.HeroesModule)
  },
  {
    path: '404',
    component: Error404PageComponent
  },
  {
    path: '**',
    redirectTo: '404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
