import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseAFigureComponent } from './choose-a-figure.component';

describe('ChooseAFigureComponent', () => {
  let component: ChooseAFigureComponent;
  let fixture: ComponentFixture<ChooseAFigureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChooseAFigureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseAFigureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
