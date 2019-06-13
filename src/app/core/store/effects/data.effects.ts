import {Injectable} from '@angular/core';
import {Action} from '@ngrx/store';
import {Observable} from 'rxjs';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {FiguresActions} from '@app/core/store/actions';
import {first, switchMapTo, tap} from 'rxjs/internal/operators';
import {HttpClient} from '@angular/common/http';


@Injectable()
export class DataEffect {
  constructor(private action$: Actions, private http: HttpClient) {
  }

  @Effect({ dispatch: false })
  getData$: Observable<any> = this.action$.pipe(
    ofType(FiguresActions.ActionTypes.LoadSuccess),
    switchMapTo(this.http.get('./assets/data.json').pipe(first())),
    tap(ex => console.log(ex))
  );
}
