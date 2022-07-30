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
                      <div className="field mt-2 col-2">
                        <a href="/change-password" className="text-smaller mt-2">forgot password?</a>
                        <button className="is-warning btn-input">Login</button>
                      </div>
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