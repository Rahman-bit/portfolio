import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom'
import '../scss/app.scss';

function NavigationBar() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container fluid className='navbar_main'>
        <Navbar.Brand>
          <Link to={'/'}> Syed
            {/* <img className="bannerImg" src={'src/assets/logo.jpg'} /> */}
          </Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link><Link to={'/'}>Home</Link></Nav.Link>
            <Nav.Link><Link to={'/resume'}>Resume</Link></Nav.Link>
            <Nav.Link><Link to={'/about'}>About</Link></Nav.Link>
            <Nav.Link><Link to={'/portfolio'}>Portfolio</Link></Nav.Link>
            <Nav.Link><Link to={'/contact'}>Contact</Link></Nav.Link>
            <Nav.Link><Link to={'/admin'}>Admin</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;