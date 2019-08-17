import React, { Component } from "react";

const ViewContext = React.createContext();
export const ViewConsumer = ViewContext.Consumer;

export default class MainViews extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        {this.props.location === "landing" && <div>Landing page</div>}
        {this.props.location === "home" && <div>Home View</div>}
        {this.props.location === "gamepad" && <div>Games View</div>}
        {this.props.location === "camera" && <div>Camera View</div>}
      </>
    );
  }
}
