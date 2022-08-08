import React from 'react'
import logoGreskit from "../../img/logo-greskit.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Footer from '../bar/Footer';

const Login = () => {
  return (
    <section className="hero has-background-white-light is-fullheight" id="#main-content">
      <div className="hero-body">
        <div className="container">
          <div className="column is-centered">
            <div className="column is-4-desktop">
                <div className="box">
                  <div className="label-sign">LOGIN</div>
                  <hr/>
                  <img src={logoGreskit} alt="Logo Greskit"/>
                  <h5 className="text-center mt-2">Sesuai PP 50 Tahun 2012</h5>
                  <form action="/dashboard" method="" className="mb-5">
                      <div className="field mt-5">
                          <div className="controls">
                              <input type="text" className="col-input" placeholder="Username"></input>
                          </div>
                      </div>
                      <div className="field mt-5">
                          <div className="controls">
                              <input type="password" className="col-input" placeholder="********"></input>
                          </div>
                      </div>
                      <Row>
                        <Col xs={7}><a href="/change-password" className="text-smaller">forgot password?</a></Col>
                        <Col xs={5}><button className="btn-input">Login</button></Col>
                      </Row>
                  </form>
                  <div className="text-center text-smaller text-long-range-top">Doesn't have any account? <a href="/register">Register</a></div>
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