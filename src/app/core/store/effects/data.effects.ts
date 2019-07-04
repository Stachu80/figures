import { Injectable } from '@angular/core';
import { Action, Store } from '@ngrx/store';
import { Observable, of, throwError } from 'rxjs';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { DataActions } from '@app/core/store/actions';
import { catchError, delay, first, map, switchMapTo, tap } from 'rxjs/internal/operators';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class DataEffect {
  constructor(private action$: Actions, private http: HttpClient, private store: Store<any>) {
  }

  @Effect()
  getData$: Observable<any> = this.action$.pipe(
    ofType(DataActions.ActionTypes.StartLoading),
    switchMapTo(this.http.get('./assets/data.json').pipe(
      delay(3000),
      map(data => {
        const isValid = validateData(data);
        if (isValid) {
          return new DataActions.LoadSuccess(data);
        } else {
          throw new Error('Error validating data');
        }
      }),
      catchError(error => of(new DataActions.LoadFailure(error)))
      )
    ),
  );
}

function validateData(data): boolean {
  return true;
}
