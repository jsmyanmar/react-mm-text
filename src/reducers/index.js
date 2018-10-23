import { combineReducers } from 'redux';

import convertLibrary from './convertLibrary';
import detectLibrary from './detectLibrary';
import showFont from './showFont';
import mainTextValue from './mainTextValue';

export default combineReducers({
  convertLibrary,
  detectLibrary,
  mainTextValue,
  showFont
});
