import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InitialDashComponent } from './initial-dash.component';

describe('InitialDashComponent', () => {
  let component: InitialDashComponent;
  let fixture: ComponentFixture<InitialDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InitialDashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InitialDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
