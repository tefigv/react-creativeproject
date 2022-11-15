import { Outlet, Link } from "react-router-dom";
import {Nav, NavBar} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";


const Layout = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <LinkContainer class="navbar-brand" to="/"><Nav.Link><h1 class='logo'>Bite</h1></Nav.Link></LinkContainer>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                          <LinkContainer class="nav-link" to="/shop"><Nav.Link>Shop</Nav.Link></LinkContainer>
                        </li>
                        <li class="nav-item">
                          <LinkContainer class="nav-link" to="/sustainability"><Nav.Link >Sustainability</Nav.Link></LinkContainer>
                        </li>
                         <li class="nav-item">
                          <LinkContainer class="nav-link" to="/about"><Nav.Link >About</Nav.Link></LinkContainer>
                        </li>
                    </ul>
                </div>    
            </nav> 

      <Outlet />
    </>
  )
};

export default Layout;