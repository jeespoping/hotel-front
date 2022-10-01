import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  Container,
  Grid,
  GridColumn,
  Icon,
  Menu as Menuweb,
} from "semantic-ui-react";
import { startLogout } from "../../actions/auth";

import "./Menu.scss";

export default function Menu() {
  const { user, checking } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(startLogout());
  };

  if (checking) return null;

  return (
    <div className="menu">
      <Container>
        <Grid>
          <Grid.Column width={6} className="menu__left">
            <Menuweb>
              <Link to="/">
                <Menuweb.Item>Hoteles</Menuweb.Item>
              </Link>
            </Menuweb>
          </Grid.Column>
          <GridColumn width={10} className="menu__right">
            <Menuweb>
              {!user ? (
                <Link to="/login">
                  <Menuweb.Item>Iniciar sesion</Menuweb.Item>
                </Link>
              ) : (
                <>
                  <Link to="/dashboard">
                    <Menuweb.Item>Dashboard</Menuweb.Item>
                  </Link>
                  <Menuweb.Item>
                    <Icon name="power off" onClick={logout} />
                  </Menuweb.Item>
                </>
              )}
            </Menuweb>
          </GridColumn>
        </Grid>
      </Container>
    </div>
  );
}
