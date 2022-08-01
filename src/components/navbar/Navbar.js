import React from 'react'
import { CgProfile } from "react-icons/cg";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Navbar = () => {
  return (
    <nav role="navigation" aria-label="main navigation">
        <Row>
          <Col xs={8}></Col>
          <Col xs={4}>
            <a role="button" href="/schedule:id" className="navbar-burger burger mt-2" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
              <div><CgProfile style={{color: '#FDCB00', fontSize: '45px'}}/></div>
            </a>
          </Col>
        </Row>
    </nav>
  )
}

export default Navbar