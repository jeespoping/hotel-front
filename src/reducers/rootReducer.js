import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { hotelReducer } from "./hotelReducer";

export const rootReducer = combineReducers({
  auth: authReducer,
  hotel: hotelReducer,
});
