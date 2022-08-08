import React from 'react'
import { CgProfile } from "react-icons/cg";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Logout from "../dropdown/DropdownNavbar";

const Navbar = () => {
  return (
    <nav role="navigation" aria-label="main navigation">
        <Row>
          <Col xs={8}></Col>
          <Col xs={2}>
            <Logout />
          </Col>
          <Col xs={2}>
            <a role="button" href="/" className="navbar-burger burger mt-2" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
              <div>
                <CgProfile style={{color: '#FDCB00', fontSize: '45px'}}/>
              </div>
            </a>
          </Col>
        </Row>
    </nav>
  )
}

export default Navbar