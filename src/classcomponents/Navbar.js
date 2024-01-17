import React from 'react'
// import PropTypes from 'prop-types'
import {NavLink} from 'react-router-dom'
import App from '../App'

const  Navbar = ()=>  {

  
  
    return (
      <div>
        
        <nav className="navbar fixed-top navbar-expand-lg bg-dark border-bottom border-bottom-dark" data-bs-theme="dark" >
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
        </li>
        
        
       

        <li className='nav-item'><NavLink className='nav-link' to="/business">Business</NavLink></li>
        <li className='nav-item'><NavLink className='nav-link' to="/entertainment">Entertainment</NavLink></li>
        <li className='nav-item'><NavLink className='nav-link' to="/sports">Sports</NavLink></li>
        <li className='nav-item'><NavLink className='nav-link' to="/science">Science</NavLink></li>
        <li className='nav-item'><NavLink className='nav-link' to="/health">Health</NavLink></li>
      </ul>


      <form className="d-flex" role="search">
        <input id='search' className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>


    </div>
  </div>
</nav>
      </div>
    )
    
}
export default Navbar;



