import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { startLogout } from "../../actions/auth";
import { Icon, Image } from "semantic-ui-react";
import UserImage from "../../assets/png/user.png";
import "./TopBar.scss";
import { Link } from "react-router-dom";

export default function TopBar() {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(startLogout());
  };
  return (
    <div className="top-bar">
      <div className="top-bar__right">
        <div className="text">
          <Link to="/">
            <div className="ir">Ir al hotel</div>
          </Link>
          <Image src={UserImage} />
          {user.name}
        </div>

        <Icon name="power off" onClick={logout} />
      </div>
    </div>
  );
}
