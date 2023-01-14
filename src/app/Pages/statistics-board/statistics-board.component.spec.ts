import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticsBoardComponent } from './statistics-board.component';

describe('StatisticsBoardComponent', () => {
  let component: StatisticsBoardComponent;
  let fixture: ComponentFixture<StatisticsBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatisticsBoardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatisticsBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
