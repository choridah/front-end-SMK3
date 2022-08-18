import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import logoSmk3 from "../../img/logo-smk3.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Footer from '../bar/Footer';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // const [setMsg] = useState('');
  const navigate = useNavigate();
    
  const Auth = async(e) => {
    e.preventDefault();
    try {
        await axios.post('http://localhost:5000/login', {
            username: username,
            password: password
        });
        // navigate.push("/"); // can't move to dashboard page
        navigate("/dashboard");
    } catch (error) {
        if(error.response) {
            // setMsg(error.response.data.msg);
            console.log(error.response.data.msg);
        }
    }
  }

  return (
    <section className="hero has-background-white-light is-fullheight" id="#main-content">
      <div className="hero-body">
        <div className="container">
          <div className="column is-centered">
            <div className="column is-4-desktop">
                <div className="box">
                  <div className="label-sign">LOGIN</div>
                  <hr/>
                  <img src={logoSmk3} alt="Logo SMK3"/>
                  <h5 className="text-center mt-3">Sesuai PP 50 Tahun 2012</h5>
                  <form onSubmit={ Auth } className="mb-5">
                      <div className="field mt-5">
                          <div className="controls">
                              <input type="text" name="username" className="col-input" placeholder="Username" 
                              value={ username }
                              onChange={
                                  (e) => setUsername(e.target.value)
                              } 
                              required/>
                          </div>
                      </div>
                      <div className="field mt-5">
                          <div className="controls">
                              <input type="password" name="password" className="col-input" placeholder="********" 
                              value={ password }
                              onChange={
                                  (e) => setPassword(e.target.value)
                              } 
                              required/>
                          </div>
                      </div>
                      <Row>
                        <Col xs={7}><a href="/change-password" className="text-smaller">forgot password?</a></Col>
                        <Col xs={5}><button className="btn-input">Login</button></Col>
                      </Row>
                  </form>
                  <div className="text-center text-smaller text-long-range-top">Doesn't have any account? <Link to="/register">Register</Link></div>
                </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  )
}

export default Login