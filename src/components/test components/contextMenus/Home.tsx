import React, { Component } from "react";
import { Button } from "semantic-ui-react";

interface HomeInterface {
  save: string
}
export default class Home extends Component {
  render() {
    return <Button>Home</Button>;
  }
}
