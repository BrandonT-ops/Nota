import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserEvent } from 'src/app/shared/services/user';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-new-event-board',
  templateUrl: './new-event-board.component.html',
  styleUrls: ['./new-event-board.component.css']
})
export class NewEventBoardComponent implements OnInit {
  @ViewChild('.repeat-options label') repeat_options!: any;

  eventForm!: FormGroup;
  event!: UserEvent;
  repeat!: string;

  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) { }

  ngOnInit(): void {

    this.eventForm = this.formBuilder.group({
      title: [null, [Validators.required]],
      description: [null, [Validators.required]],
      date: [null, [Validators.required]],
      time: [null, [Validators.required]]
    });

    this.eventForm.valueChanges.subscribe(val => console.log(val));

    function selected() {
      // repeat_options.nativeElement.add
    }
  }

  onSubmit(): void {
    if (this.eventForm.valid) {
      this.event = {
        title: this.eventForm.value.title,
        description: this.eventForm.value.description,
        date: this.eventForm.value.date,
        time: this.eventForm.value.time,
        repeat: this.repeat
      };
      switch (this.repeat) {
        case 'Once':
          this.userService.addInUser('event', this.event);
          break;

        default:
          this.userService.addInUser('event', this.event);
          break;
      }
      this.router.navigateByUrl('/events');
    }
  }

  onRepeat(frequency: string) {
    this.repeat = frequency;
    console.log(frequency);
  }


}
