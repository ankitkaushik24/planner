import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, merge, startWith, switchMap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TodoService {
  addTodo$$ = new Subject<string>();
  updateTodo$$ = new Subject<{
    _id: string;
    description?: string;
    completed?: boolean;
  }>();
  deleteTodo$$ = new Subject<string>();

  constructor(private http: HttpClient) {}

  private todosAdded$ = this.addTodo$$.pipe(
    switchMap((description) => this.createTodo(description))
  );
  private todosUpdated$ = this.updateTodo$$.pipe(
    switchMap((todo) => this.updateTodo(todo._id, todo))
  );
  private todosDeleted$ = this.deleteTodo$$.pipe(
    switchMap((_id) => this.deleteTodo(_id))
  );

  private fetchTodos$ = this.http.get<any[]>('todos');

  todos$ = merge(this.todosAdded$, this.todosUpdated$, this.todosDeleted$).pipe(
    startWith(null),
    switchMap(() => this.fetchTodos$)
  );

  private createTodo(description: string) {
    return this.http.post('todos', { description, completed: false });
  }

  private updateTodo(_id: string, updatedTodo: any) {
    return this.http.put(`todos/${_id}`, updatedTodo);
  }

  private deleteTodo(_id: string) {
    return this.http.delete(`todos/${_id}`);
  }
}
