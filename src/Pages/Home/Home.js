import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Icon } from "semantic-ui-react";
import Swal from "sweetalert2";
import { startDeleteHotel, startHotels } from "../../actions/hotel";
import TableBasic from "../../components/Table/TableBasic";

import "./Home.scss";

export default function Home() {
  const dispatch = useDispatch();
  const { data, checking } = useSelector((state) => state.hotel);

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
      name: "Nombre",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Direccion",
      selector: (row) => row.address,
      sortable: true,
    },
    {
      name: "Ciudad",
      selector: (row) => row.city,
      sortable: true,
    },
    {
      name: "Nit",
      selector: (row) => row.nit,
      sortable: true,
    },
    {
      name: "# Cuartos",
      selector: (row) => row.room,
      sortable: true,
    },
    {
      name: "ver",
      cell: (row) => (
        <Button inverted color="teal">
          <Icon name="eye" />
        </Button>
      ),
      width: "90px",
    },
    {
      name: "editar",
      cell: (row) => (
        <>
          <Button inverted color="green">
            <Icon name="edit outline" />
          </Button>
        </>
      ),
      width: "90px",
    },
    {
      name: "Eliminar",
      cell: (row) => (
        <Button
          onClick={() => onDelete(row.id)}
          loading={loadingDelete}
          inverted
          color="red"
        >
          <Icon name="delete" />
        </Button>
      ),
      width: "90px",
    },
  ];

  useEffect(() => {
    dispatch(startHotels());
  }, [dispatch]);

  if (checking) return null;

  return (
    <div>
      <TableBasic columns={columns} data={data} />
    </div>
  );
}
