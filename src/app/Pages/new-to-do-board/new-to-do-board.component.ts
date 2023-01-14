import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Todo } from 'src/app/shared/services/user';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-new-to-do-board',
  templateUrl: './new-to-do-board.component.html',
  styleUrls: ['./new-to-do-board.component.css']
})

export class NewToDoBoardComponent {

  todoForm!: FormGroup;
  todo!: Todo;

  constructor(private formBuilder: FormBuilder, private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.todoForm = this.formBuilder.group({
      category: [null, [Validators.required]],
      task: [null, [Validators.required]]
    });
  }

  onSubmit(): void {
    if (this.todoForm.valid) {
      this.todo = {
        tasK: this.todoForm.value.task,
        state: false
      };
      this.userService.addToDoInUser(this.todoForm.value.category, this.todo);
      this.router.navigateByUrl("/to-dos");
    }
  }
}
