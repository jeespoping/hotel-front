import { types } from "../types/types";

const initilState = {
  checking: true,
};

export const authReducer = (state = initilState, action) => {
  switch (action.type) {
    case types.authLogin:
      return {
        ...state,
        ...action.payload,
        checking: false,
      };
    case types.authCheckingFinish:
      return {
        ...state,
        checking: false,
      };
    case types.authLogout:
      return {
        checking: false,
      };

    default:
      return state;
  }
};
