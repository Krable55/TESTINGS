import React, { Component } from "react";
import { connect } from "react-redux";
import ContextMenu from "./test components/ContextMenu";
import Menu from "./test components/menu";
import Expandable from "./test components/expandable";
import MainViews from "./MainViews";
import { Button } from "semantic-ui-react";
import Home from "./test components/contextMenus/Home";
import Messages from "./test components/contextMenus/Messages";
import Context from "./test components/contextMenus/Context";
type ContainerMainState = {
  menu: boolean;
  context: boolean;
  location: string;
};
export const ContainerContext = React.createContext();
export class ContainerProvider extends Component {
  state = {
    noContext: false,
    save: null,
    home: "home",
    gamepad: "gamepad",
    context: "context",
    info: null
  };
  save(info) {
    this.setState({
      save: info
    });
  }

  render() {
    console.log("Props", this.props);
    return (
      <ContainerContext.Provider
        value={{
          menu: {
            home: (OnClick, save, data) => {
              return <Button onClick={() => OnClick(data)}>Home</Button>;
            },
            gamepad: <Messages save={this.state.save} data={this.state.info} />,
            context: <Context save={this.state.save} data={this.state.info} />
          },
          save: (func, data) => this.setState({ save: func, info: data })
        }}
      >
        {this.props.children}
      </ContainerContext.Provider>
    );
  }
}

export default class ContainerMain extends Component<{}, ContainerMainState> {
  state = {
    menu: false,
    context: false,
    location: "landing"
  };

  menuClick = (e, name, bool) => {
    this.setState((prevState, props) => ({
      menu: !prevState.menu
      // context: bool
    }));
  };

  toggleContext = (bool, location) => {
    this.setState((prevState, props) => ({
      context: bool,
      location: location
    }));
  };
  render() {
    return (
      <>
        <ContainerProvider>
          <Menu onClick={this.menuClick} />
          {this.state.context ? (
            <ContextMenu
              location={this.state.location}
              toggleContext={this.toggleContext}
            />
          ) : null}
          <Expandable
            visible={this.state.menu}
            location={this.state.location}
            clickItem={this.toggleContext}
          />
        </ContainerProvider>
      </>
    );
  }
}
