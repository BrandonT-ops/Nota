import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-new-event-board',
  templateUrl: './new-event-board.component.html',
  styleUrls: ['./new-event-board.component.css']
})
export class NewEventBoardComponent implements OnInit {
  @ViewChild('.repeat-options label') repeat_options!: any;
  ngOnInit(): void {
    throw new Error('Method not implemented.');

    function selected() {
      // repeat_options.nativeElement.add
    }
  }
  

}
