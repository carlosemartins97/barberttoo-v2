import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAgendamentoDashboardComponent } from './card-agendamento-dashboard.component';

describe('CardAgendamentoDashboardComponent', () => {
  let component: CardAgendamentoDashboardComponent;
  let fixture: ComponentFixture<CardAgendamentoDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardAgendamentoDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardAgendamentoDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
