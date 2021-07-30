import React from "react";
import { Link, navigate, useLocation } from "@reach/router";
import Button from "antd-button-color";
import {
  HomeOutlined,
  LeftSquareOutlined,
  PoweroffOutlined
} from "@ant-design/icons";

import AuthService from "../../services/auth.service";

const MainButton = () => {
  const location = useLocation();

  if (location.pathname !== "/") {
    return (
      <Link to="/">
        <Button type="primary" icon={<HomeOutlined />}>
          Return to main
        </Button>
      </Link>
    );
  }
  return null;
};

const BackButton = () => {
  const location = useLocation();

  if (location.pathname !== "/") {
    return (
      <Link to="../">
        <Button type="primary" icon={<LeftSquareOutlined />}>
          Back
        </Button>
      </Link>
    );
  }
  return null;
};

export default function Header() {
  const handleClick = () => {
    AuthService.logout();
    navigate("/login");
  };

  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <MainButton />
        <BackButton />
        <Button
          type="primary"
          icon={<PoweroffOutlined />}
          onClick={handleClick}
        >
          Logout
        </Button>
      </nav>
    </div>
  );
}
