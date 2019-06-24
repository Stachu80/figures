import {Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {FiguresSelector} from '@app/core/store/selectors';
import {tap} from 'rxjs/internal/operators';

@Component({
  selector: 'app-selection-page',
  templateUrl: './selection-page.component.html',
  styleUrls: ['./selection-page.component.scss']
})
export class SelectionPageComponent implements OnInit {

  constructor(private store: Store<any>) {
  }

  ngOnInit() {
    console.log('Select');
    let selectedSectionItem$ = this.store.pipe(
      select(FiguresSelector.getFigureData),
    );


    selectedSectionItem$.subscribe(val => console.log('val', val));
  }

}
