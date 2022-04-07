import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Nous importons notre page composant dans le routeur
import { TodoPageComponent } from './todo/page/todo-page/todo-page.component';

const routes: Routes = [
  // Affiche le composant TodoPageComponent quand l'url est todo
  { path: 'todo', component: TodoPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
