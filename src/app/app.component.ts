import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {FiguresActions} from '@app/core/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'figures-app';

  constructor(private store: Store<any>) {
  }

  onClick() {
    this.store.dispatch(new FiguresActions.LoadSuccess());
  }
}

