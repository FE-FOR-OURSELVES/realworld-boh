import API from 'lib/api';

export const GET_ARTICLES_REQUEST = 'articles/GET_ARTICLES_REQUEST';
export const GET_ARTICLES_SUCCESS = 'articles/GET_ARTICLES_SUCCESS';
export const GET_ARTICLES_FAILURE = 'articles/GET_ARTICLES_FAILURE';

export const getArticlesRequest = () => ({
  type: GET_ARTICLES_REQUEST,
});

export const getArticlesSuccess = (payload) => ({
  type: GET_ARTICLES_SUCCESS,
  payload,
});

export const getArticlesFailure = () => ({
  type: GET_ARTICLES_FAILURE,
});

export const getArticles = () => async (disaptch) => {
  try {
    disaptch(getArticlesRequest());

    const { data } = await API.get('/articles');

    disaptch(getArticlesSuccess(data));
  } catch (error) {
    disaptch(getArticlesFailure());
  }
};

const initialState = {
  articles: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ARTICLES_REQUEST:
      return state;
    case GET_ARTICLES_SUCCESS:
      return { ...state, articles: action.payload.articles };
    case GET_ARTICLES_FAILURE:
      return state;
    default:
      return state;
  }
};

export default reducer;
