import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAdminFuncionariosComponent } from './card-admin-funcionarios.component';

describe('CardAdminFuncionariosComponent', () => {
  let component: CardAdminFuncionariosComponent;
  let fixture: ComponentFixture<CardAdminFuncionariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardAdminFuncionariosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardAdminFuncionariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
