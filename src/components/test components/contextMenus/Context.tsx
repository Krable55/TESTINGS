import React, { Component } from "react";
import { Button } from "semantic-ui-react";

interface ContextInterface {
  save: string;
}

export default class Context extends Component<ContextInterface, {}> {
  render() {
    return (
      <>
        <Button onClick={() => console.log(this.props.save)}>Context</Button>
        <Button>Test</Button>
      </>
    );
  }
}
