/* eslint-disable */

const initialState = {
  library: 'myanmar-tools'
};

const detectLibrary = (state = initialState, action) => {

  switch (action.type) {
    case 'DETECT_LIBRARY_SELECT': {
      return {
        library: action.library
      }
      break;
    }
  }

  return state;

};

export default detectLibrary;
