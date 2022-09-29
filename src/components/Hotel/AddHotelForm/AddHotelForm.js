import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { keyBy, keys } from "lodash";
import { Form, Input, Button } from "semantic-ui-react";
import { useDispatch, useSelector } from "react-redux";
import { startAddHotel } from "../../../actions/hotel";
import "./AddHotelForm.scss";

export default function AddHotelForm({ setShowModal }) {
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();
  const { checking, data } = useSelector((state) => state.hotel);

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object({
      name: Yup.string().required(),
      city: Yup.string().required(),
      room: Yup.number().required(),
      // keys(keyBy(data, "nit")) esta logia la cree para que no se repitan los nit
      nit: Yup.string()
        .required()
        .notOneOf(keys(keyBy(data, "nit"))),
      address: Yup.string().required(),
    }),
    onSubmit: (formValues) => {
      dispatch(startAddHotel(formValues, setIsLoading, setShowModal));
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
        Crear Hotel
      </Button>
    </Form>
  );
}

function initialValues() {
  return {
    name: "",
    city: "",
    address: "",
    nit: "",
    room: "",
  };
}
