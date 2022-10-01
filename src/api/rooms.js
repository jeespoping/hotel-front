import { httpConToken, httpSinToken } from "../helpers/http";

export const getRooms = async (row) => {
  try {
    const { data } = await httpSinToken.get(`hotel/room/${row}`);
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const deleteRooms = async (row) => {
  try {
    const { data } = await httpConToken.delete(`habitacion/${row}`);
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
