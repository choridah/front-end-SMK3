import React from 'react'
import { CgProfile } from "react-icons/cg";
import { MdOutlineManageSearch } from "react-icons/md";
import { FiDownloadCloud } from "react-icons/fi";

const Dashboard = () => {
  return (
    <div>
    {/* ---------------- Navbar -----------------------*/}
      <nav className="navbar is-white-light" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a role="button" href="/dashboard" className="navbar-burger burger mt-2" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <div><CgProfile style={{color: '#FDCB00', fontSize: '45px'}}/></div>
        </a>
      </div>
    
      <div id="navbarBasicExample" href="/" className="navbar-menu">
        <div href="/" className="navbar-start">
          <a href="/" className="navbar-item">
            Home
          </a>
    
          <a href="/" className="navbar-item">
            Documentation
          </a>
    
          <div href="/" className="navbar-item has-dropdown is-hoverable">
            <a href="/" className="navbar-link">
              More
            </a>
    
            <div href="/" className="navbar-dropdown">
              <a href="/" className="navbar-item">
                About
              </a>
              <a href="/" className="navbar-item">
                Jobs
              </a>
              <a href="/" className="navbar-item">
                Contact
              </a>
              <hr href="/" className="navbar-divider"/>
              <a href="/" className="navbar-item">
                Report an issue
              </a>
            </div>
          </div>
        </div>
    
        <div href="/" className="navbar-end">
          <div href="/" className="navbar-item">
            <div href="/" className="buttons">
              <a href="/" className="button is-primary">
                <strong>Sign up</strong>
              </a>
              <a href="/" className="button is-light">
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
      <a href="/" className="btn-input btn-fullwidth text-bold">Create Schedule</a>
      
      {/* --------------- Search ------------- */}
      <form className="my-5 col-2-search mr-3">
        <input type="text" className="col-input" placeholder="Search"></input>
        <button className="btn-input"><MdOutlineManageSearch style={{fontSize: '45px'}}/></button>
      </form>

      {/* --------------- Schedules ------------- */}
      <div className="box">
        <div className="col-3">
          <div>31/08/22</div>
          <div><a href="/schedule:id">Schedule 1</a></div>
          <div><a href="/dashboard"><FiDownloadCloud style={{color: '#FDCB00', fontSize: '25px'}}/></a></div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Dashboard