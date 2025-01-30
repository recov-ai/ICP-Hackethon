import '../../scss/LandingPage/Navbar.scss';

const Navbar = () => {
    return (
      <nav className="navbar">
        <img src='/images/logo-metalog.png' className="navbar-logo" />
        <ul className="navbar-links">
          <li><a href="/">Home</a></li>
          <li><a href="/our-programs">Our Programs</a></li>
          <li><a href="/contact-us">Contact Us</a></li>
        </ul>
      </nav>
    );
  };
  
  export default Navbar;
  
