import React, { useState, useEffect } from 'react'
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';

import { CgProfile } from "react-icons/cg";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Logout from "../dropdown/DropdownNavbar";

const Navbar = () => {
  const [setUsername] = useState('');
  const [token, setToken] = useState('');
  const [expire, setExpire] = useState('');
  const navigate = useNavigate();
  useEffect(() => {
    refreshToken();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const refreshToken = async() => {
    try {
      const response = await axios.get('http://server.greskit.com:5000/reactjs/smk3/token');
      setToken(response.data.accessToken);
      const decoded = jwt_decode(response.data.accessToken);
      // console.log(decoded);
      setUsername(decoded.username);
      setExpire(decoded.exp);
    } catch (error) {
      if (error.response) {
        navigate("/");
      }
    }
  }

  const axiosJWT = axios.create();

  axiosJWT.interceptors.request.use(async(config) => {
    const currentDate = new Date();
    if(expire * 1000 < currentDate.getTime()) {
      const response = await axios.get('http://server.greskit.com:5000/reactjs/smk3/token');
      config.headers.Authorization = `Bearer ${ response.data.accessToken }`;
      setToken(response.data.accessToken);

      const decoded = jwt_decode(response.data.accessToken);
      setUsername(decoded.username);
      setExpire(decoded.exp);
    }
    return config;
  }, (error) => {
    return Promise.reject(error);
  });

  const getUsers = async() => {
    const response = await axiosJWT.get('http://server.greskit.com:5000/reactjs/smk3/users', { 
      headers:{
        Authorization: `Bearer ${ token }`
      }
    });
    console.log(response.data);
  }

  return (
    <nav role="navigation" aria-label="main navigation">
        <Row>
          <Col xs={8}></Col>
          <Col xs={2}>
            <Logout />
          </Col>
          <Col xs={2}>
            <button className="navbar-burger burger mt-2" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample"
            onClick={ getUsers }
            >
              <div>
                <CgProfile style={{color: '#FDCB00', fontSize: '45px'}}/>
              </div>
            </button>
          </Col>
        </Row>
    </nav>
  )
}

export default Navbar