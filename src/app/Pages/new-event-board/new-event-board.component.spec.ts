import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewEventBoardComponent } from './new-event-board.component';

describe('NewEventBoardComponent', () => {
  let component: NewEventBoardComponent;
  let fixture: ComponentFixture<NewEventBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewEventBoardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewEventBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
