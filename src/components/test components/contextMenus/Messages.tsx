import React, { Component } from "react";
import { Button } from "semantic-ui-react";

interface MessagesInterface {
  save: string;
}
const Messages = (props: MessagesInterface) => {
  
    return (
      <Button onClick={() => console.log(this.props.save)}>Games</Button>
    );
  
}

export default Messages