import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faBriefcase,
  faPaperPlane,
  faQuestion,
  faImage,
  faCopy,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
// import SubMenu from "./SubMenu";
import { Nav, Button } from "react-bootstrap";
import classNames from "classnames";
import "./sideBar.scss";

class SideBar extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <div className="vh-100">
        <div className="h-100 d-flex">
          <div className="h-100 stylesidebar">
            <div
              className={classNames("sidebar", "h-100", {
                "is-open": this.props.isOpen,
              })}
            >
              <div className="sidebar-header p-3 m-4 ">
                <img
                  src="./images/logotipo2.png"
                  alt="logo"
                  className="p-4 aligh-itens-center justify-content-center"
                />
                <br />
                <img src="./images/mood.png" className="p-3" alt="logo" />
                <span style={{ color: "white" }}>Thalita Pereira</span>
                {/* <Button
                  variant="link"
                  onClick={this.props.toggle}
                  style={{ color: "#fff" }}
                  className="mt-4"
                >
                  <FontAwesomeIcon icon={faTimes} pull="right" size="xs" />
                </Button> */}
                {/* <h3>react-bootstrap sidebar</h3> */}
              </div>

              <Nav className="flex-column ">
                {/* <p className="ml-3">Heading</p> */}

                <Nav.Item className="active p-2">
                  <Nav.Link href="/">
                    <FontAwesomeIcon icon={faHome} className="px-2" />
                    Home
                  </Nav.Link>
                </Nav.Item>

                {/* <SubMenu
            title="Pages"
            icon={faCopy}
            items={["Link", "Link2", "Active"]}
          /> */}

                <Nav.Item className="p-2">
                  <Nav.Link href="/">
                    <FontAwesomeIcon icon={faBriefcase} className="px-2" />
                    About
                  </Nav.Link>
                </Nav.Item>

                <Nav.Item className="p-2">
                  <Nav.Link href="/">
                    <FontAwesomeIcon icon={faImage} className="p-2" />
                    Portfolio
                  </Nav.Link>
                </Nav.Item>

                <Nav.Item className="p-2">
                  <Nav.Link href="/">
                    <FontAwesomeIcon icon={faQuestion} className="px-2" />
                    FAQ
                  </Nav.Link>
                </Nav.Item>

                <Nav.Item className="p-2">
                  <Nav.Link href="/">
                    <FontAwesomeIcon icon={faPaperPlane} className="px-2" />
                    Contact
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </div>
          </div>
          <div className="h-100">asd</div>
        </div>
      </div>
    );
  }
}
export default SideBar;
