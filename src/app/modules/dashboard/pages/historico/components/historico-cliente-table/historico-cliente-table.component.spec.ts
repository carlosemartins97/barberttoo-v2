import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricoClienteTableComponent } from './historico-cliente-table.component';

describe('HistoricoClienteTableComponent', () => {
  let component: HistoricoClienteTableComponent;
  let fixture: ComponentFixture<HistoricoClienteTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoricoClienteTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoricoClienteTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
