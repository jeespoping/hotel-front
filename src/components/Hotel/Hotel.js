import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { getHotel } from "../../api/hotel";
import { map, size } from "lodash";

import "./Hotel.scss";

function Hotel({ match }) {
  const [hotel, setHotel] = useState(null);
  const [rooms, setRooms] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await getHotel(match?.params?.hotel);
      setHotel(response.hotel);
      setRooms(response.rooms);
    })();
  }, [match]);

  if (!hotel) {
    return null;
  }

  console.log(rooms);

  return (
    <>
      <div className="header-hotel">
        <div className="header-hotel__title">{hotel.data.name}</div>
        <div className="header-hotel__delivery">
          <p>Dirección</p> {hotel.data.address}
        </div>
        <div className="header-hotel__delivery">
          <p>Ciudad</p> {hotel.data.city}
        </div>
        <div className="header-hotel__delivery">
          <p>Numero de cuartos</p> {hotel.data.room}
        </div>
        <div className="header-hotel__delivery">
          <p>Nit</p> {hotel.data.nit}
        </div>
        {size(rooms) > 0 && (
          <>
            <div className="header-hotel__title">Cuartos</div>
            {map(rooms, (room, index) => (
              <div key={index} className="header-hotel__rooms">
                <div className="header-hotel__rooms-info">
                  <p>Tipo:</p> {room.type}
                </div>
                <div className="header-hotel__rooms-info">
                  <p>Acomodacion:</p> {room.accommodation}
                </div>
                <div className="header-hotel__rooms-info">
                  <p>Numero de cuartos:</p> {room.amount}
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </>
  );
}

export default withRouter(Hotel);
