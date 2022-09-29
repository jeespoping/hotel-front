import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { startHotels } from "../../actions/hotel";

import "./Home.scss";

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startHotels());
  }, [dispatch]);

  return <div>Home</div>;
}
