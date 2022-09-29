import Swal from "sweetalert2";
import { httpConToken, httpSinToken } from "../helpers/http";
import { types } from "../types/types";

export const startHotels = () => {
  return async (dispatch) => {
    try {
      const { data } = await httpSinToken.get("/hotel");
      dispatch(hotelStart(data));
    } catch (error) {
      console.log(error);
      return null;
    }
  };
};

export const startAddHotel = (formData, setIsLoading, setShowModal) => {
  return async (dispatch) => {
    setIsLoading(true);
    try {
      const { data } = await httpConToken.post("/hotel", formData);
      if (data?.res) {
        dispatch(hotelAddNew(data));
        setShowModal(false);
      } else {
        Swal.fire("Error", "Error al crear el hotel", "error");
      }
    } catch (error) {
      console.log(error);
      Swal.fire("Error", "Error al crear el hotel", "error");
      return null;
    }
    setIsLoading(false);
  };
};

const hotelStart = (data) => ({
  type: types.hotelStart,
  payload: data,
});

const hotelAddNew = (data) => ({
  type: types.hotelAddNew,
  payload: data,
});
