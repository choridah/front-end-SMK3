import React from 'react'
import { FcKey } from "react-icons/fc";

const ChangePassword = () => {
  return (
    <section class="hero has-background-white-light is-fullheight">
      <div class="hero-body">
        <div class="container">
          <div className="column is-centered">
            <div className="column is-4-desktop">
              <div  className="icon-key"><FcKey/></div>
              <div className="label-sign">Forgot Your Password?</div>
              <from className="mb-5">
                  <div className="field mt-5">
                      <div className="controls">
                          <input type="password" className="col-input" placeholder="********"></input>
                      </div>
                  </div>
                  <div className="field mt-2 col-2">
                    <div></div>
                    <button className="btn-input text-bottom">Send</button>
                  </div>
              </from>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ChangePassword