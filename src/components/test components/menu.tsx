import React, { Component } from "react";
import { Menu } from "semantic-ui-react";

const menu = ({onClick}) => {
  return (
    <Menu inverted attached>
      <Menu.Item name="Menu" onClick={() => onClick(null)} />
    </Menu>
  );
};

export default menu;
