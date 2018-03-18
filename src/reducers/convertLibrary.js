
const initialState = {
  library: 'rabbit'
};

const convertLibrary = (state = initialState, action) => {

  switch (action.type) {
    case 'CONVERT_LIBRARY_SELECT': {
      return {
        library: action.library
      }
      break;
    }
  }

  return state;

};

export default convertLibrary;
