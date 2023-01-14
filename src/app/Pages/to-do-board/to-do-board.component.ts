import { Component } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-to-do-board',
  templateUrl: './to-do-board.component.html',
  styleUrls: ['./to-do-board.component.css']
})
export class ToDoBoardComponent {

  todoList: { category: string, tasK: string, state: boolean }[] = [];

  constructor(private userService: UserService) { }

  ngOnInit() {
    let user = this.userService.getUser();
    user.todoCategorie.forEach(categorie => {
      categorie.todos.forEach(todo => {
        this.todoList.push({ category: categorie.title, tasK: todo.tasK, state: todo.state });
      });
    });
    console.log(this.todoList);
  }
}
