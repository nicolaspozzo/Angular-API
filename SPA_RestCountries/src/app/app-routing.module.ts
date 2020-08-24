import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ObjetosComponent } from './components/objetos/objetos.component';
import { AboutComponent } from './components/about/about.component';
import { ObjetoComponent } from './components/objeto/objeto.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'objetos', component: ObjetosComponent },
  { path: 'about', component: AboutComponent },
  { path: 'objeto/:code', component: ObjetoComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
