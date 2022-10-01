import React, { useEffect, useState } from "react";
import { Button, Icon } from "semantic-ui-react";
import Swal from "sweetalert2";
import { deleteRooms, getRooms } from "../../../api/rooms";
import TableBasic from "../../Table/TableBasic";

import "./ViewHotel.scss";

export default function ViewHotel({ rowId, setShowModal }) {
  const [rooms, setRooms] = useState(null);
  const [loadingDelete, setLoadingDelete] = useState(false);

  const onDelete = (id) => {
    Swal.fire({
      title: "Estás seguro de que quieres eliminar este registro?",
      showDenyButton: true,
      confirmButtonText: "Eliminar",
      denyButtonText: `No`,
    }).then(async (result) => {
      if (result.isConfirmed) {
        setLoadingDelete(false);
        const response = await deleteRooms(id);
        if (response.res) {
          setShowModal(false);
        } else {
          Swal.fire("Error", "Error al eliminar el cuarto", "error");
        }
        setLoadingDelete(true);
      } else if (result.isDenied) {
        Swal.fire("Muchas gracias", "", "info");
      }
    });
  };

  const columns = [
    {
      name: "Tipo",
      selector: (row) => row.type,
      sortable: true,
    },
    {
      name: "Acomodacion",
      selector: (row) => row.accommodation,
      sortable: true,
    },
    {
      name: "Cantidad",
      selector: (row) => row.amount,
      sortable: true,
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
    (async () => {
      const response = await getRooms(rowId.id);
      setRooms(response);
    })();
  }, []);

  if (!rooms) return null;

  return <TableBasic forFilter="type" columns={columns} data={rooms} />;
}
