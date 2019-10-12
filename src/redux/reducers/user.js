import { SET_USER } from '../actionTypes';

const initialState = {
  user: {
    business: {},
  },
};

export default function(state = initialState, action) {
  console.log(action);
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
