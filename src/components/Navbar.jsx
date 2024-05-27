const Navbar = () => {
  return (
    <nav className="navbar" style={{ color: "white" }}>
      <div className="container">
        <div className="navbar-brand">jocoding</div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <a href="#header" className="nav-link">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#feature" className="nav-link">
              Feature
            </a>
          </li>
          <li className="nav-item">
            <a href="#portfolio" className="nav-link">
              Portfolio
            </a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-link">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
