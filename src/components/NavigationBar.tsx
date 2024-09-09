import Container from 'react-bootstrap/Container';
import { useState, useEffect, useRef } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import '../scss/app.scss';

function NavigationBar() {
  const [expanded, setExpanded] = useState(false);
  const navRef = useRef<HTMLButtonElement | null>(null);

  const handleDocumentClick = (e:any) => {
    if (navRef.current && !navRef.current.contains(e.target as Node)) {
      setExpanded(false);
      // console.log('Clicked outside the navbar, collapsing.');
    } else {
      // console.log('Clicked inside the navbar.');
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleDocumentClick);
    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      expanded={expanded}
      onToggle={() => setExpanded(!expanded)}
      className="bg-body-tertiary"
    >
      <Container fluid className="navbar_main">
        <Navbar.Brand>
          <Link to="/">Sayyed</Link>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={()=> setExpanded(!expanded)}
          ref ={navRef}
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/resume">Resume</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/portfolio">Portfolio</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            {/* <Nav.Link as={Link} to="/admin">Admin</Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
