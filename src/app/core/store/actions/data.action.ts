import {Action} from '@ngrx/store';

export enum ActionTypes {
  LoadSuccess = '[Data] Load Success',
  StartLoading = '[Data] Start Loading',
  LoadFailure = '[Data] Load Failure',
}



export class StartLoading implements Action {
  readonly type = ActionTypes.StartLoading;

}

export class LoadSuccess implements Action {
  readonly type = ActionTypes.LoadSuccess;
  constructor(public payload: any) {
  }
}

export class LoadFailure implements Action {
  readonly type = ActionTypes.LoadFailure;
  constructor(public payload: any) {
  }
}

export type Actions = StartLoading| LoadSuccess | LoadFailure;
