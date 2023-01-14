import { Component } from '@angular/core';
import { UserNote } from 'src/app/shared/services/user';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-notes-board',
  templateUrl: './notes-board.component.html',
  styleUrls: ['./notes-board.component.css']
})


export class NotesBoardComponent {

  notes!: UserNote[];

  constructor(private userService: UserService) { }

  ngOnInit() {
    console.log(localStorage);
    this.notes = this.userService.getUser().userNote;
    console.log(this.notes);
  }
}
