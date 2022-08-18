import React from 'react'
import { Link } from 'react-router-dom';
import logoSmk3 from '../../img/logo-smk3.png';
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
                    <img src={logoSmk3} alt="Logo SMK3"/>
                    <div className="label-sign mt-3">REGISTER</div>
                    <hr/>
                    <form action="../php/auth/register.php" method="POST">
                        <div className="field mt-5">
                            <div className="controls">
                                <input type="text" name="fullName" className="col-input" placeholder="Full Name"/>
                            </div>
                        </div>
                        <div className="field mt-5">
                            <div className="controls">
                                <input type="text" name="username" className="col-input" placeholder="Username"/>
                            </div>
                        </div>
                        <div className="field mt-5">
                            <div className="controls">
                                <input type="text" name="email" className="col-input" placeholder="Email"/>
                            </div>
                        </div>
                        <div className="field mt-5">
                            <div className="controls">
                                <textarea name="address" className="col-textarea" placeholder="Address"></textarea>
                            </div>
                        </div>
                        <div className="field mt-5">
                            <div className="controls">
                                <input type="text" name="contactNumber" className="col-input" placeholder="Contact Number"/>
                            </div>
                        </div>
                        <div className="field mt-5">
                            <div className="controls">
                                <input type="text" name="company" className="col-input" placeholder="Company"/>
                            </div>
                        </div>
                        <div className="field mt-5">
                            <div className="controls">
                                <input type="password" name="password" className="col-input" placeholder="Password"/>
                            </div>
                        </div>
                        <div className="field mt-5">
                            <div className="controls">
                                <input type="password" name="confirm_pass" className="col-input" placeholder="Confirm Password"/>
                            </div>
                        </div>
                        <Row>
                            <Col xs={7}></Col>
                            <Col xs={5}><button type="submit" className="btn-input">Register</button></Col>
                        </Row>
                    </form>
                    <div className="text-center text-smaller text-long-range-top">Already have an account? <Link to="/">Login</Link></div>
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