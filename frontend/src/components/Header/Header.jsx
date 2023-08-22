import {Navbar, Nav,NavDropdown, Button, Container} from 'react-bootstrap';
import logo from '../../assets/logo.svg';
import { LinkContainer } from 'react-router-bootstrap';
import React from 'react'

export const Header = () => {
  return (
    <header className="header">
		<Navbar className='header__content' expand='md' collapseOnSelect>
              <LinkContainer to="/">
                <Navbar.Brand className="brand">
                    <img className='brand__icon' src={logo}  alt="Organick"/>
                    <span className="brand__title"> Organick </span>
                </Navbar.Brand>
              </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto nav">
                    <Nav.Link href="#">Home</Nav.Link>
                    <Nav.Link href="#">About</Nav.Link>
                    <NavDropdown title="Pages" id="pages-dropdown">
                        <NavDropdown.Item href="#">Page 1</NavDropdown.Item>
                        <NavDropdown.Item href="#">Page 2</NavDropdown.Item>
                        <NavDropdown.Item href="#">Page 3</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#">Shop</Nav.Link>
                    <Nav.Link href="#">Projects</Nav.Link>
                    <Nav.Link href="#">News</Nav.Link>
                    
                </Nav>
                <div className="header__actions">
                    <div className="header__search-input-wrapper">
                        <input className="header__search-input" type="text" />
                    </div>

                    <LinkContainer to="/cart">
                      <Nav.Link className="cart"> <span className='cart__number'> Cart ( ) </span></Nav.Link>
                    </LinkContainer>
                    
                    <LinkContainer to="/login">
                      <Nav.Link > <span className='SignIn'> Sign In </span></Nav.Link>
                    </LinkContainer>
                    </div>
                </Navbar.Collapse>
           
        </Navbar>
	</header>
  )
}

