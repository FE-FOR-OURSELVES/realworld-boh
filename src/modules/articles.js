import { handleActions } from 'redux-actions';
import { startLoading, finishLoading } from './loading';
import axios from '../lib/api';

const GET_ARTICLES = 'article/GET_ARTICLES';
const GET_ARTICLES_SUCCESS = 'article/GET_ARTICLES_SUCCESS';
const GET_ARTICLES_FAILURE = 'article/GET_ARTICLES_FAILURE';

export const getArticles = id => async dispatch => {
  dispatch({ type: GET_ARTICLES });
  dispatch(startLoading());

  try {
    const response = await axios.get('/articles');

    dispatch({
      type: GET_ARTICLES_SUCCESS,
      payload: response.data,
    });
    dispatch(finishLoading());
  } catch (e) {
    dispatch({
      type: GET_ARTICLES_FAILURE,
      payload: e,
      error: true,
    });
    dispatch(finishLoading());

    throw e;
  }
};

const initialState = [];

const articles = handleActions(
  {
    [GET_ARTICLES]: state => [...state],
    [GET_ARTICLES_SUCCESS]: (state, action) => action.payload.articles,
    [GET_ARTICLES_FAILURE]: state => state,
  },
  initialState,
);

export default articles;
