import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { DataActions } from '@app/core/store';
import { DataSelector } from './core/store/selectors';
import { tap } from 'rxjs/internal/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'figures-app';
  loadingStatus$ = this.store.pipe(
    select(DataSelector.getLoadingStatus),
    tap(v => console.log(v))
  );
  constructor(private store: Store<any>) {}

  ngOnInit() {
    console.log('get Data');
    this.store.dispatch(new DataActions.StartLoading());
  }
}
