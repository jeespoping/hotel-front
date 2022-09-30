import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { map } from "lodash";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Form, Input, Button, Dropdown, FormGroup } from "semantic-ui-react";
import "./AddRoomForm.scss";
import { httpConToken } from "../../../helpers/http";
import Swal from "sweetalert2";

export default function AddRoomForm({ setShowModal }) {
  const [hotels, setHotels] = useState([]);

  const { data, checking } = useSelector((state) => state.hotel);

  const [isLoading, setIsLoading] = useState(false);

  const AddRoom = async (formData, setIsLoading) => {
    setIsLoading(true);
    try {
      const { data } = await httpConToken.post("/habitacion", formData);
      if (data.res) {
        setShowModal(false);
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: data.message,
        });
      }
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  const types = [
    {
      key: "ESTANDAR",
      value: "ESTANDAR",
      text: "Estándar",
    },
    {
      key: "JUNIOR",
      value: "JUNIOR",
      text: "Junior",
    },
    {
      key: "SUITE",
      value: "SUITE",
      text: "Suite",
    },
  ];

  const accommodations = [
    {
      key: "SENCILLA",
      value: "SENCILLA",
      text: "Sencilla",
    },
    {
      key: "DOBLE",
      value: "DOBLE",
      text: "Doble",
    },
    {
      key: "TRIPLE",
      value: "TRIPLE",
      text: "Triple",
    },
    {
      key: "CUADRUPLE",
      value: "CUADRUPLE",
      text: "Cuádruple",
    },
  ];

  const formik = useFormik({
    initialValues: initialValueForm(),
    validationSchema: Yup.object({
      hotel_id: Yup.string().required(),
      amount: Yup.number().required(),
      type: Yup.string().required(),
      accommodation: Yup.string()
        .required()
        .when("type", {
          is: "ESTANDAR",
          then: Yup.string().oneOf(["SENCILLA", "DOBLE"]),
        })
        .when("type", {
          is: "JUNIOR",
          then: Yup.string().oneOf(["TRIPLE", "CUADRUPLE"]),
        })
        .when("type", {
          is: "SUITE",
          then: Yup.string().oneOf(["SENCILLA", "DOBLE", "TRIPLE"]),
        }),
    }),
    onSubmit: (formData) => {
      AddRoom(formData, setIsLoading);
    },
  });

  useEffect(() => {
    const arrayHotels = [];
    map(data, (hotel) => {
      arrayHotels.push({
        key: hotel.id,
        value: hotel.id,
        text: hotel.name,
      });
    });
    setHotels(arrayHotels);
  }, [data]);

  if (checking) return null;

  return (
    <Form onSubmit={formik.handleSubmit} className="add-room-form">
      <FormGroup>
        <Form.Field width={8}>
          <Form.Dropdown
            placeholder="La habitación pertenece ..."
            search
            selection
            options={hotels}
            value={formik.values.hotel_id}
            onChange={(_, data) => {
              formik.setFieldValue("hotel_id", data.value);
            }}
            error={formik.errors.hotel_id && true}
          />
          <Input
            name="amount"
            error={formik.errors.amount && true}
            onChange={formik.handleChange}
            value={formik.values.amount}
            placeholder="Numero de cuartos"
          />
        </Form.Field>
        <Form.Field width={8}>
          <Form.Dropdown
            placeholder="Tipo de habitación"
            fluid
            search
            selection
            options={types}
            value={formik.values.type}
            onChange={(_, data) => {
              formik.setFieldValue("type", data.value);
            }}
            error={formik.errors.type && true}
          />
          <Form.Dropdown
            placeholder="Acomodación"
            fluid
            search
            selection
            options={accommodations}
            lazyLoad
            value={formik.values.accommodation}
            onChange={(_, data) => {
              formik.setFieldValue("accommodation", data.value);
            }}
            error={formik.errors.accommodation && true}
          />
        </Form.Field>
      </FormGroup>
      <Button type="submit" loading={isLoading}>
        Crear habitación
      </Button>
    </Form>
  );
}

function initialValueForm() {
  return {
    hotel_id: "",
    amount: "",
    type: "",
    accommodation: "",
  };
}
