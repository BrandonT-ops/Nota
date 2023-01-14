import { Component, Input, OnInit } from '@angular/core';
import { UserEvent } from './../../shared/services/user';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  ngOnInit(): void {

  }
  @Input() event!: UserEvent;

}
