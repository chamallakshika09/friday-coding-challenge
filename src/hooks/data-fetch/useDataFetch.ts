import { useCallback, useEffect, useReducer } from 'react';
import { vehicleDataApi } from '../../apis';
import { ActionType } from './action-types';
import { initialState } from './initialState';
import { DataReducer } from './reducers';

export const useDataFetch = (url: string) => {
  const [state, dispatch] = useReducer(DataReducer, initialState);

  const fetchData = useCallback(async () => {
    dispatch({ type: ActionType.FETCH_DATA_LOADING });
    try {
      const response = await vehicleDataApi.get(url);
      dispatch({ type: ActionType.FETCH_DATA_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: ActionType.FETCH_DATA_FAILURE, payload: error.message });
    }
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { state, fetchData };
};
