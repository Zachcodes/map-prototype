import { SET_USER } from '../actionTypes';

const initialState = {
  user: {
    business: {},
    loggedIn: false,
  },
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_USER: {
      return {
        user: action.payload,
      };
    }
    default:
      return state;
  }
}
