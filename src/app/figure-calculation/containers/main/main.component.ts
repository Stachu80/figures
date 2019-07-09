import { Component, OnInit } from '@angular/core';
import { DataSelector, FigureSelector } from '@app/core/store/selectors';
import { select, Store } from '@ngrx/store';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  data$ = this.store.pipe(select(DataSelector.getData));

  calculation$ = this.store.pipe(
    select(FigureSelector.getCalculationType)
  );

  figure$ = this.store.pipe(select(FigureSelector.getFigure));

  constructor(private store: Store<any>) {
  }

  ngOnInit() {
  }
}
