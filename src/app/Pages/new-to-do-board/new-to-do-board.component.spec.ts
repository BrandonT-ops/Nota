import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewToDoBoardComponent } from './new-to-do-board.component';

describe('NewToDoBoardComponent', () => {
  let component: NewToDoBoardComponent;
  let fixture: ComponentFixture<NewToDoBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewToDoBoardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewToDoBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
