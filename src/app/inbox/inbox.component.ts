import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IonInput, IonicModule } from '@ionic/angular';
import { TodoService } from '../core/todo.service';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule],
})
export default class InboxComponent {
  constructor(protected todoService: TodoService) {}

  items$ = this.todoService.todos$;

  markAsComplete(event: any, todo: any) {
    this.todoService.updateTodo$$.next({
      ...todo,
      completed: event.detail.checked,
    });
  }

  addTodo(ionInput: IonInput) {
    ionInput.getInputElement().then((inputEl) => {
      this.todoService.addTodo$$.next(inputEl.value);
      inputEl.value = '';
    });
  }

  deleteTodo(todo: any) {
    this.todoService.deleteTodo$$.next(todo._id);
  }
}
