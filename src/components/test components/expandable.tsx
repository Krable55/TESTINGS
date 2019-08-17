import PropTypes from "prop-types";
import React, { Component } from "react";
import ContextMenu from "./ContextMenu";
import menu from "./menu";
import {
  Button,
  Checkbox,
  Grid,
  Header,
  Icon,
  Image,
  Menu,
  Segment,
  Sidebar
} from "semantic-ui-react";
import MainViews from "../MainViews";

const HorizontalSidebar = ({ direction, visible, clickItem }) => (
  <Sidebar
    as={Menu}
    inverted
    vertical
    animation={"push"}
    direction={direction}
    visible={visible}
  >
    <Menu.Item as="a" onClick={() => clickItem(true, "home")}>
      <Icon name="home" />
      Home
    </Menu.Item>
    <Menu.Item as="a" onClick={() => clickItem(true, "gamepad")}>
      <Icon name="gamepad" />
      Games
    </Menu.Item>
    <Menu.Item as="a" onClick={() => clickItem(false, "camera")}>
      <Icon name="camera" />
      Camera
    </Menu.Item>
  </Sidebar>
);
const Expandable = ({ visible, clickItem, context, location }) => (
  <Sidebar.Pushable as={Segment} attached style={{ height: "100vh" }}>
    <HorizontalSidebar
      animation={"push"}
      direction={"left"}
      visible={visible}
      clickItem={clickItem}
    />

    <Sidebar.Pusher>
      {context ? <ContextMenu toggleContext={clickItem} /> : null}
      <MainViews location={location}/>
    </Sidebar.Pusher>
  </Sidebar.Pushable>
);

Expandable.propTypes = {
  animation: PropTypes.string,
  direction: PropTypes.string,
  visible: PropTypes.bool
};

export default Expandable;
