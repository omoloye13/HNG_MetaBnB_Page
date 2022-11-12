import logo from "../Images/logo.png";

const NavBar =()=>{
    return(
        <>
    <nav class="navbar navbar-expand-lg fixed-top">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
        <img src={logo} alt="meta_bnb_logo" />
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div class="offcanvas-header">
        {/* <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5> */}
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-between flex-grow-1">
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Place to stay</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">NFTs</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Community</a>
          </li>
        
        </ul>
        <div className="flex justify-content-start">
            <ul className="navbar-nav">
            <li class="nav-item cont">
            <a class="nav-link con" href="#">Connect wallet</a>
          </li>
            </ul>
        </div>
     
      </div>
    </div>
  </div>
</nav>
        </>
    );

}
export default NavBar;