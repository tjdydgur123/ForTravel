import {
  LOGIN_USER,
  REGISTER_USER,
  AUTH_USER,
  LOGOUT_USER,
  ADD_TO_CART,
} from "../_actions/types";

// eslint-disable-next-line
export default function (state = {}, action) {
  switch (action.type) {
    case REGISTER_USER:
      return { ...state, register: action.payload };
    case LOGIN_USER:
      return { ...state, loginSucces: action.payload };
    case AUTH_USER:
      return { ...state, userData: action.payload };
    case LOGOUT_USER:
      return { ...state };
    case ADD_TO_CART:
      return {
        // userData 에다가 cart 정보를 같이 넣기
        ...state,
        userData: {
          ...state.userData,
          cart: action.payload,
        },
      };
    default:
      return state;
  }
}
