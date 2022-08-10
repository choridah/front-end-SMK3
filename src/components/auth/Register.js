import React from 'react'
import logoGreskit from "../../img/logo-smk3.png";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Footer from '../bar/Footer';

const Register = () => {
  return (
    <section className="hero has-background-white-light is-fullheight">
      <div className="hero-body">
        <div className="container">
          <div className="column is-centered">
            <div className="column is-2-desktop">
                <div className="box">
                    <img src={logoGreskit} alt="Logo Greskit"/>
                    <div className="label-sign mt-3">REGISTER</div>
                    <hr/>
                    <from>
                        <div className="field mt-5">
                            <div className="controls">
                                <input type="text" className="col-input" placeholder="Full Name"></input>
                            </div>
                        </div>
                        <div className="field mt-5">
                            <div className="controls">
                                <input type="text" className="col-input" placeholder="Username"></input>
                            </div>
                        </div>
                        <div className="field mt-5">
                            <div className="controls">
                                <input type="text" className="col-input" placeholder="Email"></input>
                            </div>
                        </div>
                        <div className="field mt-5">
                            <div className="controls">
                                <textarea className="col-textarea" placeholder="Address"></textarea>
                            </div>
                        </div>
                        <div className="field mt-5">
                            <div className="controls">
                                <input type="text" className="col-input" placeholder="Contact Number"></input>
                            </div>
                        </div>
                        <div className="field mt-5">
                            <div className="controls">
                                <input type="text" className="col-input" placeholder="Company"></input>
                            </div>
                        </div>
                        <div className="field mt-5">
                            <div className="controls">
                                <input type="password" className="col-input" placeholder="Password"></input>
                            </div>
                        </div>
                        <div className="field mt-5">
                            <div className="controls">
                                <input type="password" className="col-input" placeholder="Confirm Password"></input>
                            </div>
                        </div>
                        <Row>
                            <Col xs={7}></Col>
                            <Col xs={5}><button className="btn-input">Register</button></Col>
                        </Row>
                    </from>
                    <div className="text-center text-smaller text-long-range-top">Already have an account? <a href="/">Login</a></div>
                </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  )
}

export default Register