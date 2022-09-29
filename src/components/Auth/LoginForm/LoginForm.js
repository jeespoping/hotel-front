import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { startLogin } from "../../../actions/auth";
import { Button, Icon, Form, Input } from "semantic-ui-react";
import "./LoginForm.scss";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object({
      email: Yup.string().required().email(),
      password: Yup.string().required(),
    }),
    onSubmit: async (formData) => {
      dispatch(startLogin(formData, setIsLoading));
    },
  });

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-form" onSubmit={formik.handleSubmit}>
      <h1>Exclusivo para administradores</h1>
      <Form>
        <Form.Field>
          <Input
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.errors.email && true}
            type="text"
            name="email"
            icon="mail outline"
            placeholder="Correo electronico"
          />
        </Form.Field>
        <Form.Field>
          <Input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Contraseña"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.errors.email && true}
            icon={
              showPassword ? (
                <Icon
                  name="eye slash outline"
                  link
                  onClick={handleShowPassword}
                />
              ) : (
                <Icon name="eye" link onClick={handleShowPassword} />
              )
            }
          />
        </Form.Field>
        <Button type="submit" loading={isLoading}>
          Iniciar sesión
        </Button>
      </Form>
    </div>
  );
}

function initialValues() {
  return {
    email: "",
    password: "",
  };
}
