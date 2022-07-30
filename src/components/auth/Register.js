import React from 'react'
import logoGreskit from "../../img/logo-greskit.png";

const Register = () => {
  return (
    <section class="hero has-background-white-light is-fullheight">
      <div class="hero-body">
        <div class="container">
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
                        <div className="field mt-2 col-2">
                            <div></div>
                            <button className="is-warning btn-input btn-max-content">Register</button>
                        </div>
                    </from>
                    <div className="text-center text-smaller text-long-range-top">Already have an account? <a href="/">Login</a></div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Register