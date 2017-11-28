import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';

const defaultState = {
  photos: [],
  page: 1,
  photoStatus: 'PHOTO_IS_NOT_LOADED'
};

const store = createStore(rootReducer, defaultState, applyMiddleware(thunk));

export default store;