import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { keyBy, keys, remove } from "lodash";
import { Form, Input, Button } from "semantic-ui-react";
import { useDispatch, useSelector } from "react-redux";
import { startAddHotel, startUpdateHotel } from "../../../actions/hotel";
import "./AddHotelForm.scss";

export default function AddHotelForm({ setShowModal, rowId }) {
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();
  const { checking, data } = useSelector((state) => state.hotel);

  const formik = useFormik({
    initialValues: initialValues(rowId),
    validationSchema: Yup.object({
      name: Yup.string()
        .required()
        .notOneOf(
          !rowId
            ? keys(keyBy(data, "name"))
            : remove(keys(keyBy(data, "name")), (n) => n !== rowId.name)
        ),
      city: Yup.string().required(),
      room: Yup.number().required(),
      // keys(keyBy(data, "nit")) esta logia la cree para que no se repitan los nit
      nit: Yup.string()
        .required()
        .notOneOf(
          !rowId
            ? keys(keyBy(data, "nit"))
            : remove(keys(keyBy(data, "nit")), (n) => n !== rowId.nit)
        ),
      address: Yup.string().required(),
    }),
    onSubmit: (formValues) => {
      if (!rowId) {
        dispatch(startAddHotel(formValues, setIsLoading, setShowModal));
      } else {
        dispatch(
          startUpdateHotel(rowId.id, formValues, setIsLoading, setShowModal)
        );
      }
    },
  });

  if (checking) {
    return null;
  }

  return (
    <Form onSubmit={formik.handleSubmit} className="add-hotel-form">
      <Form.Group>
        <Form.Field width={8}>
          <Input
            onChange={formik.handleChange}
            value={formik.values.name}
            error={formik.errors.name && true}
            name="name"
            placeholder="Nombre del hotel"
          />
          <Input
            onChange={formik.handleChange}
            value={formik.values.city}
            error={formik.errors.city && true}
            name="city"
            placeholder="Ciudad"
          />
        </Form.Field>
        <Form.Field className="hotel-inputs" width={8}>
          <Input
            onChange={formik.handleChange}
            value={formik.values.room}
            error={formik.errors.room && true}
            name="room"
            placeholder="Numero de cuartos"
          />
          <Input
            onChange={formik.handleChange}
            value={formik.values.nit}
            error={formik.errors.nit && true}
            name="nit"
            placeholder="nit"
          />
        </Form.Field>
      </Form.Group>
      <Form.Field>
        <Input
          onChange={formik.handleChange}
          value={formik.values.address}
          error={formik.errors.address && true}
          name="address"
          placeholder="direccion"
        />
      </Form.Field>
      <Button type="submit" loading={isLoading}>
        {rowId ? "Editar Hotel" : "Crear Hotel"}
      </Button>
    </Form>
  );
}

function initialValues(rowId) {
  if (!rowId) {
    return {
      name: "",
      city: "",
      address: "",
      nit: "",
      room: "",
    };
  } else {
    return {
      name: rowId.name,
      city: rowId.city,
      address: rowId.address,
      nit: rowId.nit,
      room: rowId.room,
    };
  }
}
