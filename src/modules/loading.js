import { createAction, handleActions } from 'redux-actions';

const START_LOADING = 'loading/START_LOADING';
const FINISH_LOADING = 'loading/FINISH_LOADING';

export const startLoading = createAction(START_LOADING);
export const finishLoading = createAction(FINISH_LOADING);

const initialState = false;

const loading = handleActions(
  {
    [START_LOADING]: () => true,
    [FINISH_LOADING]: () => false,
  },
  initialState,
);

export default loading;
