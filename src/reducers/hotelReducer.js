import { types } from "../types/types";

const initilState = {
  checking: true,
};

export const hotelReducer = (state = initilState, action) => {
  switch (action.type) {
    case types.hotelSetActive:
      return {
        ...state,
        activeHotel: action.payload,
        checking: false,
      };
    case types.hotelStart:
      return {
        ...state,
        ...action.payload,
        checking: false,
      };
    case types.hotelAddNew:
      return {
        ...state,
        data: [...state.data, action.payload.data],
        checking: false,
      };
    case types.hotelDeleted:
      return {
        ...state,
        data: state.data.filter((e) => e.id !== action.payload),
        checking: false,
      };

    default:
      return state;
  }
};
