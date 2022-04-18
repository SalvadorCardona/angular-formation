import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompteurComponent } from './compteur/page/compteur/compteur.component';
import { RecetteComponent } from './recette/page/recette/recette.component';
// Nous importons notre page composant dans le routeur
import { TodoPageComponent } from './todo/page/todo-page/todo-page.component';

const routes: Routes = [
  // Affiche le composant TodoPageComponent quand l'url est todo
  { path: 'todo', component: TodoPageComponent },
  // Affiche le composant RecetteComponent quand l'url est recette
  { path: 'recette', component: RecetteComponent },
  // Affiche le composant CompteurComponent quand l'url est compteur
  { path: 'compteur', component: CompteurComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
