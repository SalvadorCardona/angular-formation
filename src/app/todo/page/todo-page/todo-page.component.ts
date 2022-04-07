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

  currentTodo: string = '';

  addTodo(content: string): void {
    this.todos.push({ content: content });
  }

  removeTodo(index: number): void {
    this.todos.splice(index, 1);
  }

  constructor() {}

  ngOnInit(): void {}
}
