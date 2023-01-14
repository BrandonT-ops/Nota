import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Todo, TodoCategorie, User, UserEvent, UserNote } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private userService: AuthService) { }

  addInUser(key: string, value: any) {
    let user = this.getUser();

    switch (key) {
      case 'categorie':
        user.todoCategorie.push(value as TodoCategorie);
        break;
      case 'event':
        user.userEvents.push(value as UserEvent);
        break;
      case 'note':
        user.userNote.push(value as UserNote);
        break;

      default:
        break;
    }
    this.userService.update(user);
  }

  addToDoInUser(categorie: string, value: Todo) {
    let user = this.getUser();
    let table = user.todoCategorie.filter(x => x.title == categorie);
    if (table.length != 0) {
      table[0].todos.push(value)
    } else {
      user.todoCategorie.push({ title: categorie, todos: [value] });
    }
    this.userService.update(user);
  }

  getUser(): User {
    return User.fromJSON(localStorage.getItem('user'));
  }
}
