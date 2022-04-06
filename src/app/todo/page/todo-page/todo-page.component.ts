import { Component, OnInit } from '@angular/core';
import { Todo } from '../../model/todo';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.scss'],
})
export class TodoPageComponent implements OnInit {
  todos: Todo[] = [
    { content: 'Tache 1' },
    { content: 'Tache 2' },
    { content: 'Tache 3' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
