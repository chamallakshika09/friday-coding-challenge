import { Vehicle } from '../../utils';
import { Action } from './actions';
import { ActionType } from './action-types';
import { initialState } from './initialState';

interface DataState {
  loading: boolean;
  error: string | null;
  data: string[] | Vehicle[];
}

export const DataReducer = (state: DataState = initialState, action: Action): DataState => {
  switch (action.type) {
    case ActionType.FETCH_DATA_LOADING:
      return { loading: true, error: null, data: [] };
    case ActionType.FETCH_DATA_SUCCESS:
      return {
        loading: false,
        error: null,
        data: action.payload,
      };
    case ActionType.FETCH_DATA_FAILURE:
      return {
        loading: false,
        error: action.payload,
        data: [],
      };
    default:
      return state;
  }
};
