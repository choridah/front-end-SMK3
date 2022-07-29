import React from 'react'

const Schedule = () => {
  return (
    <div>
    {/* ---------------- Navbar -----------------------*/}
      <nav class="navbar is-white-light" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="https://bulma.io">
          <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28"/>
        </a>
    
        <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
    
      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <a class="navbar-item">
            Home
          </a>
    
          <a class="navbar-item">
            Documentation
          </a>
    
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">
              More
            </a>
    
            <div class="navbar-dropdown">
              <a class="navbar-item">
                About
              </a>
              <a class="navbar-item">
                Jobs
              </a>
              <a class="navbar-item">
                Contact
              </a>
              <hr class="navbar-divider"/>
              <a class="navbar-item">
                Report an issue
              </a>
            </div>
          </div>
        </div>
    
        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <a class="button is-primary">
                <strong>Sign up</strong>
              </a>
              <a class="button is-light">
                Log in
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>

    {/* ---------------- Body -----------------------*/}
    <div className="container mt-5 mx-5">
      {/* --------------- Create Schedule ------------- */}
      <button className="button is-warning is-fullwidth">Back to Schedule</button>
      
      <form action="">
        {/* --------------- Slide Klausa ------------- */}
        <div className="mt-5 mb-5">
          <span className="button is-warning mx-1"></span>
          <span className="button is-warning mx-1">1</span>
          <span className="button is-warning mx-1">2</span>
          <span className="button is-warning mx-1">3</span>
          <span className="button is-warning mx-1">4</span>
          <span className="button is-warning mx-1">5</span>
          <span className="button is-warning mx-1"></span>
        </div>
        
        {/* --------------- Assessment ------------- */}
        <div>
          <h2 className="mt-5">Assessment Result</h2>
          <ul type="radio" className="mt-3">
            <li className="button is-primary mr-3">0</li>
            <li className="button is-primary mr-3">1</li>
          </ul>
        </div>

        {/* --------------- Reason ------------- */}
        <div className="field mt-5">
            <div className="controls">
                <label className="label">Reason</label>
                <textarea className="textarea"></textarea>
            </div>
        </div>
        <div className="field mt-5">
            <div className="controls">
                <input type="text" className="input" placeholder="Objective"></input>
            </div>
        </div>
        <div className="field mt-5">
            <div className="controls">
                <input type="text" className="input" placeholder="No CAR"></input>
            </div>
        </div>
        <a href="">Attachments</a><br/>
        <button className="button is-warning">Next</button>
      </form>
    </div>
    </div>
  )
}

export default Schedule