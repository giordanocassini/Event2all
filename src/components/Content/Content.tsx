import React from "react";
import { Container } from "react-bootstrap";
import classNames from "classnames";
import NavBar from "./NavBar";

class Content extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }
  render() {
    return (
      <Container
        fluid
        className={classNames("content", { "is-open": this.props.isOpen })}
      >
        <NavBar toggle={this.props.toggle} />
      </Container>
    );
  }
}

export default Content;