import React from 'react'
import { CgProfile } from "react-icons/cg";

const Schedule = () => {
  return (
    <div>
    {/* ---------------- Navbar -----------------------*/}
      <nav class="navbar is-white-light" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a role="button" href="/schedule:id" className="navbar-burger burger mt-2" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <div><CgProfile style={{color: '#FDCB00', fontSize: '45px'}}/></div>
        </a>
      </div>
    
      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <a href="/" class="navbar-item">
            Home
          </a>
    
          <a href="/" class="navbar-item">
            Documentation
          </a>
    
          <div class="navbar-item has-dropdown is-hoverable">
            <a href="/" class="navbar-link">
              More
            </a>
    
            <div class="navbar-dropdown">
              <a href="/" class="navbar-item">
                About
              </a>
              <a href="/" class="navbar-item">
                Jobs
              </a>
              <a href="/" class="navbar-item">
                Contact
              </a>
              <hr class="navbar-divider"/>
              <a href="/" class="navbar-item">
                Report an issue
              </a>
            </div>
          </div>
        </div>
    
        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <a href="/" class="button is-primary">
                <strong>Sign up</strong>
              </a>
              <a href="/" class="button is-light">
                Log in
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>

    {/* ---------------- Body -----------------------*/}
    <div className="container mt-5 mx-5">
      {/* --------------- Back to Schedule ------------- */}
      <a href="/dashboard" className="btn-input btn-fullwidth text-bold">Back to Schedule</a>
      
      <form action="">
        {/* --------------- Slide Klausa ------------- */}
        <div className="mt-5 mb-5">
          <span className="button is-warning mr-2"></span>
          <span className="button is-warning mr-1">1</span>
          <span className="button is-warning mr-1">2</span>
          <span className="button is-warning mr-1">3</span>
          <span className="button is-warning mr-1">4</span>
          <span className="button is-warning mr-2">5</span>
          <span className="button is-warning mr-1"></span>
        </div>
        
        {/* --------------- Assessment ------------- */}
        <div>
          <h2 className="mt-5 text-center text-bold">Assessment Result</h2>
          <ul type="radio" className="mt-3 text-center list-circle">
            <li className="btn-list mr-3">0</li>
            <li className="btn-list mr-3">1</li>
          </ul>
        </div>

        {/* --------------- Reason ------------- */}
        <div className="field mt-5">
            <div className="controls">
                <label className="label">Reason</label>
                <textarea className="col-textarea"></textarea>
            </div>
        </div>
        <div className="field mt-5">
            <div className="controls">
                <input type="text" className="col-input" placeholder="Objective"></input>
            </div>
        </div>
        <div className="field mt-5">
            <div className="controls">
                <input type="text" className="col-input" placeholder="No CAR"></input>
            </div>
        </div>
        <a href="/">Attachment</a><br/>
        <div className="field mt-2 col-2">
          <div></div>
          <button className="btn-input">Next</button>
        </div>
      </form>
    </div>
    </div>
  )
}

export default Schedule