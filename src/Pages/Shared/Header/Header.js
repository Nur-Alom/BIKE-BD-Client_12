import React from 'react';
import './Header.css';
import img from '../../../images/favicon.png';
import { Container, Nav, Navbar, NavbarBrand } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Header = () => {
    const { user, logout } = useAuth();
    return (
        <div>
            <Navbar bg="dark" variant="dark fixed-top" expand="lg">
                <Container>
                    <NavbarBrand to="/home">Bike-BD <img style={{ width: "30px" }} src={img} alt="" /><img style={{ width: "20px" }} src='' alt="" /></NavbarBrand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto nav-options">
                            <NavLink className="nav" to="/home">Home</NavLink>
                            <NavLink className="nav" to="/allProducts">More</NavLink>
                            <NavLink className="nav" to="/home">Dashboard</NavLink>
                            {user.email ? <li style={{ color: "white", margin: "5px" }}>| {user.displayName}</li> : ''}
                            {!user.email ?
                                <NavLink className="user-btn bg-success text-white py-1 px-3 rounded-3" to="/login"><i className="fas fa-sign-in-alt"></i> Login</NavLink>
                                :
                                <button onClick={logout} className="user-btn bg-danger text-white py-1 px-3 rounded-3 border-0"><i className="fas fa-sign-out-alt"></i> Logout</button>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;