import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InitialClienteComponent } from './initial-cliente.component';

describe('InitialClienteComponent', () => {
  let component: InitialClienteComponent;
  let fixture: ComponentFixture<InitialClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InitialClienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InitialClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
