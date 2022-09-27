import React, { useState } from "react";
import { Button, Icon, Form, Input } from "semantic-ui-react";
import "./LoginForm.scss";

export default function LoginForm({ setSelectedForm }) {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-form">
      <h1>Exclusivo para administradores</h1>
      <Form>
        <Form.Field>
          <Input type="text" name="email" placeholder="Correo electronico" />
        </Form.Field>
        <Form.Field>
          <Input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Contraseña"
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
