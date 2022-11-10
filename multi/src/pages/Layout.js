import { Outlet, Link } from "react-router-dom";


const Layout = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <Link class="navbar-brand" to="/index"><h1 class='logo'>Bite</h1></Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                          <Link class="nav-link" to="/shop">Shop</Link>
                        </li>
                        <li class="nav-item">
                          <Link class="nav-link" to="/sustainability">Sustainability</Link>
                        </li>
                         <li class="nav-item">
                          <Link class="nav-link" to="/about">About</Link>
                        </li>
                    </ul>
                </div>    
            </nav> 

      <Outlet />
    </>
  )
};

export default Layout;