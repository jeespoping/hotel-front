import React from "react";
import { map } from "lodash";
import { useSelector } from "react-redux";
import {
  breakpointUpSm,
  breakpointUpMd,
  breakpointUpLg,
} from "../../utils/breakpoints";

import { Grid, Image } from "semantic-ui-react";
import "./ListHotels.scss";
import ImageNoFound from "../../assets/jpg/hotel2.jpg";
import { Link } from "react-router-dom";
import useWindowSize from "../../hooks/useWindowSize";

export default function ListHotels() {
  const { data } = useSelector((state) => state.hotel);
  const { width } = useWindowSize();

  const getColumnsRender = () => {
    switch (true) {
      case width > breakpointUpLg:
        return 5;
      case width > breakpointUpMd:
        return 3;
      case width > breakpointUpSm:
        return 2;
      default:
        return 1;
    }
  };

  return (
    <div className="list-hotels">
      <Grid>
        <Grid.Row columns={getColumnsRender()}>
          {map(data, (hotel, index) => (
            <Hotel key={index} hotel={hotel} />
          ))}
        </Grid.Row>
      </Grid>
    </div>
  );
}

function Hotel({ hotel }) {
  return (
    <Grid.Column className="list-hotels__hotel">
      <div className="list-hotels__hotel-poster">
        <Link to={`/${hotel.id}`}>
          <Image src={ImageNoFound} alt={hotel.name} />
        </Link>
        <div className="list-hotels__hotel-poster-info">
          <span className="price">{hotel.room} Cuartos</span>
        </div>
      </div>
      <h2>{hotel.name}</h2>
    </Grid.Column>
  );
}
