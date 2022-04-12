import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecetteComponent } from './recette/page/recette/recette.component';
// Nous importons notre page composant dans le routeur
import { TodoPageComponent } from './todo/page/todo-page/todo-page.component';

const routes: Routes = [
  // Affiche le composant TodoPageComponent quand l'url est todo
  { path: 'todo', component: TodoPageComponent },
  { path: 'recette', component: RecetteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
