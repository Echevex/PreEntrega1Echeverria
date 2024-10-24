import logo from '../assets/logo.png';
function Navbar () {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
      <img src={logo} alt="Logo" className="logo-image" />
     
      </div>
      <ul className="navbar-menu">
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Acerca de nostros</a></li>
        <li><a href="#">Ofertas</a></li>
        <li><a href="#">Contacto</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;