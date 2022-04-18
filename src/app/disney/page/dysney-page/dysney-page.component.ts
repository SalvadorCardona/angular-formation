// src/app/disney/page/dysney-page/dysney-page.component.ts
import { Component, OnInit } from '@angular/core';
import { DisneyData, Personnage } from '../../model/dysney';

@Component({
  selector: 'app-dysney-page',
  templateUrl: './dysney-page.component.html',
  styleUrls: ['./dysney-page.component.scss'],
})
export class DysneyPageComponent implements OnInit {
  // stock les données de l'api
  disneyData: DisneyData | null = null;
  // stock vos personnage favoris
  personnagesFavoris: Personnage[] = [];

  constructor() {}

  ngOnInit(): void {
    // quand le composant s'affiche, nous éxécutons la  méthode getDisneyData
    this.getDisneyData();
  }

  // method pour récupérer les données en ligne
  getDisneyData(): void {
    fetch('https://api.disneyapi.dev/characters')
      .then((response) => {
        // les données récupérées son au format Json, cette ligne les convertie en variable
        return response.json();
      })
      .then((disneyData) => {
        // nous stockons les variables de l'api dans notre composant
        this.disneyData = disneyData;
      });
  }

  // Ajoute un personnage aux personnages favoris
  addPersonnage(personnage: Personnage): void {
    this.personnagesFavoris.push(personnage);
  }

  // Supprime un personnage aux personnages favoris
  supprimerPersonnage(personnage: Personnage): void {
    const index = this.personnagesFavoris.findIndex(
      (currentPersonnage) => currentPersonnage.id === personnage.id
    );

    this.personnagesFavoris.splice(index, 1);
  }

  // Regarde si un personnage
  isPersonnageFavoris(personnage: Personnage): boolean {
    const index = this.personnagesFavoris.findIndex(
      (currentPersonnage) => currentPersonnage.name === personnage.name
    );

    if (index > -1) {
      return true;
    }

    return false;
  }
}
