import { Component } from '@angular/core';
import { UserEvent } from 'src/app/shared/services/user';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-events-board',
  templateUrl: './events-board.component.html',
  styleUrls: ['./events-board.component.css']
})
export class EventsBoardComponent {

  events!: UserEvent[];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.events = this.userService.getUser().userEvents;
    console.log(this.events);
  }
}
