import { useNavigate } from "react-router-dom";
import {
  Badge,
  Navbar,
  Nav,
  NavDropdown
} from "react-bootstrap";
import logo from "../../assets/logo.svg";
import { LinkContainer } from "react-router-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import React from "react";
import { useLogoutMutation } from "../../slices/usersApiSlice";
import { logout } from "../../slices/authSlice";

export const Header = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const { userInfo } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [logoutApiCall] = useLogoutMutation();

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <header className="header">
      <Navbar className="header__content" expand="md" collapseOnSelect>
        <LinkContainer to="/">
          <Navbar.Brand className="brand">
            <img className="brand__icon" src={logo} alt="Organick" />
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
              <Nav.Link className="cart">
                {" "}
                <span className="cart__number">
                  {" "}
                  Cart{" "}
                  {cartItems.length > 0 && (
                    <Badge pill bg="success" style={{ marginBottom: "10px" }}>
                      {cartItems.reduce((a, c) => a + c.qty, 0)}
                    </Badge>
                  )}{" "}
                </span>
              </Nav.Link>
            </LinkContainer>

            {userInfo ? (
              <NavDropdown title={userInfo.name} id="username">
                <LinkContainer to="/profile">
                  <NavDropdown.Item>Profile</NavDropdown.Item>
                </LinkContainer>
                <NavDropdown.Item onClick={logoutHandler}>
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <LinkContainer to="/login">
                <Nav.Link>
                  {" "}
                  <span className="SignIn"> Sign In </span>
                </Nav.Link>
              </LinkContainer>
            )}
            {userInfo && userInfo.isAdmin && (
              <NavDropdown title="Admin" id="adminmenu" className="custom-dropdown">
                <LinkContainer to="/admin/productlist" >
                  <NavDropdown.Item >Products</NavDropdown.Item>
                </LinkContainer>

                <LinkContainer to="/admin/userlist" >
                  <NavDropdown.Item>Users</NavDropdown.Item>
                </LinkContainer>

                <LinkContainer to="/admin/orderlist">
                  <NavDropdown.Item>Orders</NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>
            )}
          </div>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};
