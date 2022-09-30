import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Icon } from "semantic-ui-react";
import Swal from "sweetalert2";
import { startDeleteHotel, startHotels } from "../../actions/hotel";
import TableBasic from "../../components/Table/TableBasic";

import "./Home.scss";

export default function Home() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.hotel);

  const [loadingDelete, setLoadingDelete] = useState(false);

  const onDelete = (id) => {
    Swal.fire({
      title: "Estás seguro de que quieres eliminar este registro?",
      showDenyButton: true,
      confirmButtonText: "Eliminar",
      denyButtonText: `No`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        dispatch(startDeleteHotel(id, setLoadingDelete));
      } else if (result.isDenied) {
        Swal.fire("Muchas gracias", "", "info");
      }
    });
  };

  const columns = [
    {
      name: "Descripcion",
      selector: (row) => row.description,
      sortable: true,
    },
    {
      name: "Publicado",
      selector: (row) => row.published,
      sortable: true,
    },
    {
      name: "Nombre",
      selector: (row) => row.fileName,
      sortable: true,
    },
    {
      name: "Precio",
      selector: (row) => row.price,
      sortable: true,
    },
  ];

  useEffect(() => {
    dispatch(startHotels());
  }, [dispatch]);

  return (
    <div>
      <TableBasic columns={columns} data={data} />
    </div>
  );
}
