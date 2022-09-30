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
          <div className="h-100" id="fernando">
            <div
              className={classNames("sidebar","h-100", {
                "is-open": this.props.isOpen,
              })}
            >
              <div className="sidebar-header">
                <img src="./images/logotipo2.png" alt="logo" />
                <br />
                <img src="./images/mood.png" alt="logo" />
                <span style={{color: "white"}}>Thalita Pereira</span>
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

              <Nav className="flex-column pt-2">
                {/* <p className="ml-3">Heading</p> */}

                <Nav.Item className="active">
                  <Nav.Link href="/">
                    <FontAwesomeIcon icon={faHome} className="mr-2" />
                    Home
                  </Nav.Link>
                </Nav.Item>

                {/* <SubMenu
            title="Pages"
            icon={faCopy}
            items={["Link", "Link2", "Active"]}
          /> */}

                <Nav.Item>
                  <Nav.Link href="/">
                    <FontAwesomeIcon icon={faBriefcase} className="mr-2" />
                    About
                  </Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link href="/">
                    <FontAwesomeIcon icon={faImage} className="mr-2" />
                    Portfolio
                  </Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link href="/">
                    <FontAwesomeIcon icon={faQuestion} className="mr-2" />
                    FAQ
                  </Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link href="/">
                    <FontAwesomeIcon icon={faPaperPlane} className="mr-2" />
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
