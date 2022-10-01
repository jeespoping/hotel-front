import { httpSinToken } from "../helpers/http";

export const getHotel = async (id) => {
  try {
    const { data: rooms } = await httpSinToken.get(`hotel/room/${id}`);
    const { data: hotel } = await httpSinToken.get(`hotel/${id}`);
    return {
      rooms,
      hotel,
    };
  } catch (error) {
    console.log(error);
    return null;
  }
};
