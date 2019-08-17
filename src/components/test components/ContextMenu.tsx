import React, { Component } from "react";
import { connect } from "react-redux";
import { Segment, Grid, GridColumn, Button } from "semantic-ui-react";
import { ContainerContext } from "../container";
import {
  INCREMENT_HOME_ACTION,
  INCREMENT_HOME,
  actionCreators
} from "../Reducers/contextMenuReducer";

class ContextMenu extends Component {
  state = {};
  menu = {
    home: () => <Button onClick={this.props.home}>Home</Button>
  };

  render() {
    console.log("PROPS", this.props);
    return (
      <Segment attached>
        <Grid centered>
          <GridColumn width={3} textAlign="center">
            Test
          </GridColumn>
          <GridColumn textAlign="center" width={10}>
            {this.menu[this.props.location]()}
            {/* <ContainerContext.Consumer>
            {context =>{
              let ContextComponent = context.menu[this.props.location]
             return ContextComponent ? <ContextComponent location={this.props.location} onClick={this.props.home}/>: null
            }
            }
          </ContainerContext.Consumer> */}
          </GridColumn>
          <GridColumn textAlign="center" width={3}>
            Test
          </GridColumn>
        </Grid>
      </Segment>
    );
  }
}

const mapContextStatetoProps = state => {
  const { contextMenu } = state;
  return {
    home: contextMenu.home,
    gamepad: contextMenu.gamepad,
    context: contextMenu.context
  };
};
const mapContextDispatchToProps = dispatch => {
  // const { INCREMENT_HOME} = actionCreators;
  return {
    home: () => dispatch(INCREMENT_HOME),
    gamepad: info => dispatch(),
    context: info => dispatch()
  };
};
export default connect(
  mapContextStatetoProps,
  mapContextDispatchToProps
)(ContextMenu);
