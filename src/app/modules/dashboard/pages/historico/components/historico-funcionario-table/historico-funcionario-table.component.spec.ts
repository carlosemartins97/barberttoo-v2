import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricoFuncionarioTableComponent } from './historico-funcionario-table.component';

describe('HistoricoFuncionarioTableComponent', () => {
  let component: HistoricoFuncionarioTableComponent;
  let fixture: ComponentFixture<HistoricoFuncionarioTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoricoFuncionarioTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoricoFuncionarioTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
