import { Component, OnInit } from '@angular/core';
import { Man } from '../../model/man';
import { ManService } from '../../service/man.service';

@Component({
  selector: 'app-add-man',
  templateUrl: './add-man.component.html',
  styleUrls: ['./add-man.component.scss'],
})
export class AddManComponent implements OnInit {
  constructor(private addManService: ManService) {}
  manList: Man[] = [
    {
      icon: '👨',
    },
    {
      icon: '👩',
    },
    {
      icon: '👵',
    },
    {
      icon: '👨‍🦳',
    },
  ];
  mans: Man[] = this.addManService.restorer();

  addMan(newMan: Man): void {
    this.mans.push(newMan);
    this.addManService.sauvegarder(this.mans);
  }
  removeMan(index: number): void {
    this.mans.splice(index, 1);
    this.addManService.sauvegarder(this.mans);
  }

  ngOnInit(): void {}
}
