import React from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import SplitButton from 'react-bootstrap/SplitButton';
import { FiLogOut } from "react-icons/fi";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Logout() {
  const navigate = useNavigate();

  const Logout = async() => {
    try {
      await axios.delete('http://localhost:5000/logout');
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className="mb-2">
        {[''].map((direction) => (
          <SplitButton
            key={direction}
          >
            <Dropdown.Item as="button">
              <Row>
                <Col xs={4}>
                  <button className="btn-icon" onClick={ Logout }><FiLogOut style={{color: '#FDCB00', fontSize: '25px'}} /></button>
                </Col>
                <Col xs={8}>
                  <h4 className="text-black text-bold mt-1">Logout</h4>
                </Col>
              </Row>
            </Dropdown.Item>
          </SplitButton>
        ))}
      </div>
    </>
  );
}

export default Logout;