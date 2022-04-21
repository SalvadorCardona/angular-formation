import { Injectable } from '@angular/core';
import { Man } from '../model/man';

@Injectable({
  providedIn: 'root',
})
export class ManService {
  constructor() {}

  // le nom de la todolist dans la database du navigateur
  private key: string = 'todo';

  public sauvegarder(mans: Man[]): void {
    // Conversion de notre variable en JSON
    const mansConverties = JSON.stringify(mans);

    // Sauvegarde de nos données dans le navigateur
    localStorage.setItem(this.key, mansConverties);
  }

  public restorer(): Man[] {
    // Récupération des données dans le navigateur au format JSON
    const mansConverties = localStorage.getItem(this.key);

    // on teste si des données sont bien présente
    if (mansConverties) {
      // Conversion de nos données JSON en variable
      const mansDeConverties = JSON.parse(mansConverties);

      // On retourne nos todolist et on indique que c'est bien une list de Todo
      return mansDeConverties as Man[];
    }

    // Si aucune donnée n'est présente dans le navigateur on lui retourne une TodoList Vide
    return [];
  }
}
