import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AddManModule } from './add-man/add-man.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisneyModule } from './disney/disney.module';
import { GameModule } from './game/game.module';

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
    AddManModule,
    GameModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
