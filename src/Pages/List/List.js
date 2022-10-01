import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startHotels } from "../../actions/hotel";
import { size } from "lodash";
import BasicLayout from "../../layouts/BasicLayout";
import ListHotels from "../../components/ListHotels";

import "./List.scss";

export default function List() {
  const dispatch = useDispatch();
  const { data, checking } = useSelector((state) => state.hotel);

  useEffect(() => {
    dispatch(startHotels());
  }, [dispatch]);

  if (checking) return null;

  return (
    <BasicLayout className="list">
      {data && size(data) === 0 && (
        <div>
          <h3>No hay hoteles</h3>
        </div>
      )}
      {size(data) > 0 && <ListHotels />}
    </BasicLayout>
  );
}
