import { Link } from "react-router-dom";
import { useState } from "react";
import {AiFillShop} from "react-icons/ai";
import {FaShoppingCart} from "react-icons/fa";
import {FaUserAlt} from "react-icons/fa"
import Container from 'react-bootstrap/Container';
import {Nav, Navbar, NavLink} from 'react-bootstrap';
import NavDropdown from 'react-bootstrap/NavDropdown';
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
const Header = () => {
  
  
  /*
  <header>
      <nav className="navbar fixed-top navbar-expand-sm navbar-light bg-white border-bottom">
        <div className="container-fluid">
          <a className="navbar-brand" href="#" >
            <AiFillShop className="ms-1" size={50}/>
            SHOP
          </a>
          
          <div className="navbar-collapse collapse "id="navbarNavDropdown">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link">
                  Explore
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle" 
                  href="#" role="button" data-bs-toggle="dropdown" 
                  aria-expanded="false"
                >
                 <FaUserAlt/> 
                </a>
                <ul className="dropdown-menu dropdown-menu-end">
                  <li>
                    <Link to="/login" className="dropdown-item">
                      Log In
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item">Log Out</Link>
                  </li>
                </ul>
              </li>
            </ul>
            <button type="button" className="btn btn-outline-dark me-3 d-none d-lg-inline">
              <FaShoppingCart
              />
              <span className="ms-3 badge rounded-pill bg-dark">0</span>
            </button>
            
          </div>
          <div className="d-inline-block d-lg-none">
            <button type="button" className="btn btn-outline-dark">
              <FaShoppingCart/>
              <span className="ms-3 badge rounded-pill bg-dark">0</span>
            </button>
            <button className="navbar-toggler p-0 border-0 ms-3" type="button" data-bs-toggle="collapse"          data-bs-target="##navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation" >
            <span className="navbar-toggler-icon"></span>
            </button>
          </div>
        </div>
      </nav>
    </header>
  */
  return (
    <div className="container">
      <Navbar collapseOnSelect expand="sm"> 
        <div className="container-fluid mt-4">
          <a className="navbar-brand text-center fs-3 d-flex" href="#" >
            <AiFillShop className="ms-1" size={50}/>
            <div className="align-self-center">SHOP</div> 
          </a>
          <div className=" d-flex justify-end">
            <button type="button" className="btn btn-outline-dark me-3 d-sm-none">
              <FaShoppingCart
              />
              <span className="ms-3 badge rounded-pill bg-dark">0</span>
            </button>
            <Navbar.Toggle aria-controls="navbarScroll" data-bs-target="#navbarScroll">
              <span className="navbar-toggler-icon"></span>
            </Navbar.Toggle>
          </div>
          <Navbar.Collapse id="navbarScroll">
            <Nav className="container d-flex justify-content-between"> 
              <NavLink  eventKey="1" as={Link} to="/home"className="ms-md-5">EXPLORE</NavLink>
              <NavLink  eventKey="2" as={Link} to="/login"> LOG IN</NavLink>

            </Nav>
            
            
          </Navbar.Collapse>
          <button type="button" className="btn btn-outline-dark me-3 d-none d-md-block">
              <FaShoppingCart
              />
              <span className="ms-3 badge rounded-pill bg-dark">0</span>
            </button>
        </div>
      </Navbar>

    </div>
  )
}
export default Header;