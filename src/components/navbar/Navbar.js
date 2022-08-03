import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DropDirectioLogOut from "../dropdown/DropdownNavbar";

const Navbar = () => {
  return (
    <nav role="navigation" aria-label="main navigation">
        <Row>
          <Col xs={8}></Col>
          <Col xs={4}>
            <DropDirectioLogOut />
          </Col>
        </Row>
    </nav>
  )
}

export default Navbar