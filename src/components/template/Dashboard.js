import React from 'react'

const Dashboard = () => {
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
      <button className="button is-warning is-fullwidth">Create Schedule</button>
      
      {/* --------------- Search ------------- */}
      <form className="my-5">
        <input type="text" className="input" placeholder="Search"></input>
        <button className="button is-warning">=</button>
      </form>

      {/* --------------- Schedules ------------- */}
      <div className="box">
        <span className="mr-5">31/08/22</span>
        <span className="mr-5"><a href="#">Schedule 1</a></span>
        <span><a href="#">Download</a></span>
      </div>
    </div>
    </div>
  )
}

export default Dashboard