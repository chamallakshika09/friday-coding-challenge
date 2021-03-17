import { Vehicle } from '../../utils';
import { ActionType } from './action-types';

interface FetchDataLoadingAction {
  type: ActionType.FETCH_DATA_LOADING;
}

interface FetchDataSuccessAction {
  type: ActionType.FETCH_DATA_SUCCESS;
  payload: Vehicle[] | string[];
}

interface FetchDataFailureAction {
  type: ActionType.FETCH_DATA_FAILURE;
  payload: string;
}

export type Action = FetchDataLoadingAction | FetchDataSuccessAction | FetchDataFailureAction;
