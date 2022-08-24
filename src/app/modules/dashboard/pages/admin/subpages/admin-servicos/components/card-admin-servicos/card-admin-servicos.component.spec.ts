import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAdminServicosComponent } from './card-admin-servicos.component';

describe('CardAdminServicosComponent', () => {
  let component: CardAdminServicosComponent;
  let fixture: ComponentFixture<CardAdminServicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardAdminServicosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardAdminServicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
