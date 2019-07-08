import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { FigureActions } from '@app/core/store';

@Component({
  selector: 'app-choose-a-figure',
  templateUrl: './choose-a-figure.component.html',
  styleUrls: ['./choose-a-figure.component.scss']
})
export class ChooseAFigureComponent{
  @Input() data;

  constructor(private store: Store<any>) {
  }

  figureSelected(event, s) {
    if (event.isUserInput) {
      this.store.dispatch(new FigureActions.FigureSelected(s));
    }
  }
}
