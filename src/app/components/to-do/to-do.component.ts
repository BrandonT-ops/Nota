import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent {
  @Input() to_do!: { category: string, tasK: string, state: boolean };

}
