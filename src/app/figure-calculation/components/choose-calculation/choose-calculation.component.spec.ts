import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseCalculationComponent } from './choose-calculation.component';

describe('ChooseCalculationComponent', () => {
  let component: ChooseCalculationComponent;
  let fixture: ComponentFixture<ChooseCalculationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChooseCalculationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseCalculationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
