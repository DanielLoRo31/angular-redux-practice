import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: "caluladora", loadChildren: () => import('./calculadora/calculadora.module').then((m) => m.CalculadoraModule)},
  { path: "**", redirectTo: "caluladora" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
