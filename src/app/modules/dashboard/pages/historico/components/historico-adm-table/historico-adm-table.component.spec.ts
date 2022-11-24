import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricoAdmTableComponent } from './historico-adm-table.component';

describe('HistoricoAdmTableComponent', () => {
  let component: HistoricoAdmTableComponent;
  let fixture: ComponentFixture<HistoricoAdmTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoricoAdmTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoricoAdmTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
