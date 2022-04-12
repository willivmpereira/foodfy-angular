import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReceitasComponent } from './pages/receitas/receitas.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'sobre', component: SobreComponent },
  {path: 'receitas', component: ReceitasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
