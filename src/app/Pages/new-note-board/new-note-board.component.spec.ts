import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewNoteBoardComponent } from './new-note-board.component';

describe('NewNoteBoardComponent', () => {
  let component: NewNoteBoardComponent;
  let fixture: ComponentFixture<NewNoteBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewNoteBoardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewNoteBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
