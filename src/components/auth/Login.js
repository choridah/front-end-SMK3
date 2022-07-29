import React from 'react'
import logoGreskit from "../../img/logo-greskit.png";

const Login = () => {
  return (
    <section class="hero has-background-white-light is-fullheight">
      <div class="hero-body">
        <div class="container">
          <div className="column is-centered">
            <div className="column is-4-desktop">
                <div className="box">
                    <div>LOGIN</div>
                    <hr/>
                    <img src={logoGreskit} alt="Logo Greskit"/>
                    <from>
                        <div className="field mt-5">
                            <div className="controls">
                                <input type="text" className="input" placeholder="Username"></input>
                            </div>
                        </div>
                        <div className="field mt-5">
                            <div className="controls">
                                <input type="password" className="input" placeholder="********"></input>
                            </div>
                        </div>
                        <div className="field mt-5">
                            <button className="button is-warning is-fullwidth">Login</button>
                        </div>
                    </from>
                    <div>forgot password?</div>
                    <span>Doesn't have any account? </span><a href="/register">Register</a>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Login