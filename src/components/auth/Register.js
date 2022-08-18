import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import logoSmk3 from '../../img/logo-smk3.png';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Footer from '../bar/Footer';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [fullName, setFullName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [company, setCompany] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [msg, setMsg] = useState('');
    const navigate = useNavigate();
    
    const handleSubmitRegister = async(e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/users', {
                fullName: fullName,
                username: username,
                email: email,
                address: address,
                contactNumber: contactNumber,
                company: company,
                password: password,
                confirmPassword: confirmPassword
            });
            // navigate.push("/"); // can't move to dashboard page
            navigate("/dashboard");
        } catch (error) {
            if(error.response) {
                setMsg(error.response.data.msg);
                // console.log(error.response.data);
            }
        }
    }

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
                    <p>{ msg }</p>
                    <form onSubmit={ handleSubmitRegister }>
                        <div className="field mt-5">
                            <div className="controls">
                                <input type="text" name="fullName" className="col-input" placeholder="Full Name"
                                value={fullName}
                                onChange={
                                    (e) => setFullName(e.target.value)
                                } 
                                />
                            </div>
                        </div>
                        <div className="field mt-5">
                            <div className="controls">
                                <input type="text" name="username" className="col-input" placeholder="Username"
                                value={username}
                                onChange={
                                    (e) => setUsername(e.target.value)
                                } 
                                required/>
                            </div>
                        </div>
                        <div className="field mt-5">
                            <div className="controls">
                                <input type="text" name="email" className="col-input" placeholder="Email" 
                                value={email}
                                onChange={
                                    (e) => setEmail(e.target.value)
                                } 
                                />
                            </div>
                        </div>
                        <div className="field mt-5">
                            <div className="controls">
                                <textarea name="address" className="col-textarea" placeholder="Address"
                                value={address}
                                onChange={
                                    (e) => setAddress(e.target.value)
                                } 
                                >
                                </textarea>
                            </div>
                        </div>
                        <div className="field mt-5">
                            <div className="controls">
                                <input type="text" name="contactNumber" className="col-input" placeholder="Contact Number" 
                                value={contactNumber}
                                onChange={
                                    (e) => setContactNumber(e.target.value)
                                } 
                                />
                            </div>
                        </div>
                        <div className="field mt-5">
                            <div className="controls">
                                <input type="text" name="company" className="col-input" placeholder="Company" 
                                value={company}
                                onChange={
                                    (e) => setCompany(e.target.value)
                                } 
                                />
                            </div>
                        </div>
                        <div className="field mt-5">
                            <div className="controls">
                                <input type="password" name="password" className="col-input" placeholder="Password" 
                                value={password}
                                onChange={
                                    (e) => setPassword(e.target.value)
                                } 
                                required/>
                            </div>
                        </div>
                        <div className="field mt-5">
                            <div className="controls">
                                <input type="password" name="confirmPassword" className="col-input" placeholder="Confirm Password" 
                                value={confirmPassword}
                                onChange={
                                    (e) => setConfirmPassword(e.target.value)
                                } 
                                required/>
                            </div>
                        </div>
                        <Row>
                            <Col xs={7}></Col>
                            <Col xs={5}><button className="btn-input">Register</button></Col>
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

export default Register;