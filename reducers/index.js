import { combineReducers } from 'redux';

import photos from './photos';
import photoStatus from './photoStatus';
import page from './page';
import nav from './nav';

export default combineReducers({
  page,
  photos,
  photoStatus,
  nav
});
