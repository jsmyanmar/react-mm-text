/* eslint-disable */

const initialState = {
  font: 'unicode'
};

const showFont = (state = initialState, action) => {

  switch (action.type) {
    case 'SHOW_FONT_SELECT': {
      return {
        font: action.font
      }
      break;
    }
  }

  return state;

};

export default showFont;
