import React from 'react'
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  return (
    <nav class="navbar is-white-light" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a role="button" href="/schedule:id" className="navbar-burger burger mt-2" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <div><CgProfile style={{color: '#FDCB00', fontSize: '45px'}}/></div>
        </a>
      </div>
    </nav>
  )
}

export default Navbar