import React from 'react'
import logoGreskit from "../../img/logo-greskit.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Login = () => {
  return (
    <section className="hero has-background-white-light is-fullheight">
      <div className="hero-body">
        <div className="container">
          <div className="column is-centered">
            <div className="column is-4-desktop">
                <div className="box">
                  <div className="label-sign">LOGIN</div>
                  <hr/>
                  <img src={logoGreskit} alt="Logo Greskit"/>
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
    </section>
  )
}

export default Login