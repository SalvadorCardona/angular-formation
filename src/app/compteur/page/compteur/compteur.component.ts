import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-compteur',
  template: `
    <p>Nombre de click :</p>
    <span> {{ nombreDeclick }} </span>
    <hr />
    <button (click)="ajouterUnClick()">+</button>
    <button (click)="supprimerUnClick()">-</button>
  `,
  styles: [],
})
export class CompteurComponent implements OnInit {
  // une propriété qui comptient le nombre de click
  nombreDeclick: number = 0;

  // method qui ajoute 1 au nombre de clicj
  ajouterUnClick() {
    this.nombreDeclick = this.nombreDeclick + 1;
  }

  // method qui ajoute 1 au nombre de clicj
  supprimerUnClick() {
    this.nombreDeclick = this.nombreDeclick - 1;
  }

  constructor() {}

  ngOnInit(): void {}
}
