import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page404Component } from './404/page/page404/page404.component';
import { CompteurComponent } from './compteur/page/compteur/compteur.component';
import { DysneyPageComponent } from './disney/page/dysney-page/dysney-page.component';
import { ProduitComponent } from './produit/pages/produit/produit.component';

import { RecetteComponent } from './recette/page/recette/recette.component';
// Nous importons notre page composant dans le routeur
import { TodoPageComponent } from './todo/page/todo-page/todo-page.component';

const routes: Routes = [
  // Affiche le composant TodoPageComponent quand l'url est todo
  { path: '', component: TodoPageComponent },
  { path: 'todo', component: TodoPageComponent },
  // Affiche le composant RecetteComponent quand l'url est recette
  { path: 'recette', component: RecetteComponent },
  // Affiche le composant CompteurComponent quand l'url est compteur
  { path: 'compteur', component: CompteurComponent },
  { path: 'dysney', component: DysneyPageComponent },
  { path: 'produit', component: ProduitComponent },
  //Permet de définir une home page
  { path: '', component: TodoPageComponent },
  // Permet de définir la page 404
  { path: '**', pathMatch: 'full', component: Page404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
