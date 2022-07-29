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
                    <div>REGISTER</div>
                    <hr/>
                    <from>
                        <div className="field mt-5">
                            <div className="controls">
                                <input type="text" className="input" placeholder="Full Name"></input>
                            </div>
                        </div>
                        <div className="field mt-5">
                            <div className="controls">
                                <input type="text" className="input" placeholder="Email"></input>
                            </div>
                        </div>
                        <div className="field mt-5">
                            <div className="controls">
                                <textarea className="textarea" placeholder="Address"></textarea>
                            </div>
                        </div>
                        <div className="field mt-5">
                            <div className="controls">
                                <input type="text" className="input" placeholder="Contact Number"></input>
                            </div>
                        </div>
                        <div className="field mt-5">
                            <div className="controls">
                                <input type="text" className="input" placeholder="Company"></input>
                            </div>
                        </div>
                        <div className="field mt-5">
                            <div className="controls">
                                <input type="password" className="input" placeholder="Password"></input>
                            </div>
                        </div>
                        <div className="field mt-5">
                            <div className="controls">
                                <input type="password" className="input" placeholder="Confirm Password"></input>
                            </div>
                        </div>
                        <div className="field mt-5">
                            <button className="button is-warning">Register</button>
                        </div>
                    </from>
                    <span>Already have an account? </span><span><a href="/">Login</a></span>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Register