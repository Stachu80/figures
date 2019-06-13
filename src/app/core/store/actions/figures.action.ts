import {Action} from '@ngrx/store';

export enum ActionTypes {
  LoadSuccess = '[Figures] Load Success',
  LoadFailure = '[Figures] Load Failure',
}

export class LoadSuccess implements Action {
  readonly type = ActionTypes.LoadSuccess;

}

export class LoadFailure implements Action {
  readonly type = ActionTypes.LoadFailure;
  constructor(public payload: any) {
  }
}

export type Actions = LoadSuccess | LoadFailure;
