import React, { useState } from "react";
import { Menu, Icon } from "semantic-ui-react";
import AddHotelForm from "../Hotel/AddHotelForm";
import AddRoomForm from "../Hotel/AddRoomForm/AddRoomForm";
import BasicModal from "../Modal/BasicModal";

import "./MenuLeft.scss";

export default function MenuLeft() {
  const [showModal, setShowModal] = useState(false);
  const [titleModal, setTitleModal] = useState(null);
  const [contentModal, setContentModal] = useState(null);

  const handlerModal = (type) => {
    switch (type) {
      case "hotel":
        setTitleModal("Nuevo hotel");
        setContentModal(<AddHotelForm setShowModal={setShowModal} />);
        setShowModal(true);
        break;
      case "habitacion":
        setTitleModal("Crear habitaciones");
        setContentModal(<AddRoomForm setShowModal={setShowModal} />);
        setShowModal(true);
        break;

      default:
        setTitleModal(null);
        setContentModal(null);
        setShowModal(false);
        break;
    }
  };

  return (
    <>
      <Menu className="menu-left" vertical>
        <div className="top">
          <Menu.Item active={true}>
            <Icon name="home" /> Inicio
          </Menu.Item>
        </div>
      </Menu>
      <BasicModal show={showModal} setShow={setShowModal} title={titleModal}>
        {contentModal}
      </BasicModal>
    </>
  );
}
