import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsAgendamentoComponent } from './details-agendamento.component';

describe('DetailsAgendamentoComponent', () => {
  let component: DetailsAgendamentoComponent;
  let fixture: ComponentFixture<DetailsAgendamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsAgendamentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsAgendamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
