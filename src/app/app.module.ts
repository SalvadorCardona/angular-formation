import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisneyModule } from './disney/disney.module';
import { ProduitModule } from './produit/produit.module';

import { RecetteModule } from './recette/recette.module';
import { TodoModule } from './todo/todo.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TodoModule,
    RecetteModule,
    DisneyModule,
    ProduitModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
