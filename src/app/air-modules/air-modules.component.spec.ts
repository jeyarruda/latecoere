import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AirModulesComponent } from './air-modules.component';

describe('AirModulesComponent', () => {
  let component: AirModulesComponent;
  let fixture: ComponentFixture<AirModulesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AirModulesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AirModulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
