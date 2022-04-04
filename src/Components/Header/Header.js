import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Queen's Abaya Store</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto flex gap-4 text-xl ">
                            <CustomLink to='/'>Home</CustomLink>
                            <CustomLink to='/reviews'>Reviews</CustomLink>
                            <CustomLink to='/dashboard'>Dashboard</CustomLink>
                            <CustomLink to='/blogs'>Blogs</CustomLink>
                            <CustomLink to='/about'>About</CustomLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;