import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserNote } from 'src/app/shared/services/user';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-new-note-board',
  templateUrl: './new-note-board.component.html',
  styleUrls: ['./new-note-board.component.css']
})
export class NewNoteBoardComponent {
  noteForm!: FormGroup;
  note!: UserNote;

  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.noteForm = this.formBuilder.group({
      title: [null, [Validators.required]],
      notes: [null, [Validators.required]]
    });

    this.noteForm.valueChanges.pipe(
    ).subscribe(val => console.log(val))
  }

  onSubmit(): void {
    if (this.noteForm.valid) {
      this.note = {
        title: this.noteForm.value.title,
        notes: this.noteForm.value.notes,
        createAt: new Date()
      }
      this.userService.addInUser('note', this.note);
      this.router.navigateByUrl('/note');
    } else {
      console.log('invalid');
    }
  }

}
