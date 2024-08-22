import React from "react";
import { CheckCircleOutlined, MinusOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import { Link } from "react-router-dom";
const items = [
  {
    key: "sub1",
    label: "Navigation One",
    icon: <CheckCircleOutlined />,
    children: [
      {
        icon: <MinusOutlined />,
        key: "g1",
        label: <Link to={"/"}>All Todos</Link>,
      },
      {
        icon: <MinusOutlined />,
        key: "g2",
        label: <Link to={"/add-todo"}>Add todos</Link>,
      },
    ],
  },
];
const Navbar = () => {
  const onClick = (e) => {
    console.log("click ", e);
  };
  return (
    <Menu
      theme="dark"
      onClick={onClick}
      style={{
        width: "100vw",
      }}
      className="flex items-center justify-center py-4 space-x-4"
      defaultSelectedKeys={["1"]}
      defaultOpenKeys={["sub1"]}
      mode="horizontal"
      items={items}
    />
  );
};
export default Navbar;
