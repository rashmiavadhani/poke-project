import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './_pages/login/login.component';
import { PokemondashboardComponent } from './_pages/pokemondashboard/pokemondashboard.component';

const routes: Routes = [
  {path : '', redirectTo: '/login', pathMatch: 'full'},
  {path : 'login', component: LoginComponent},
  {path : 'pokemondashboard', component: PokemondashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
