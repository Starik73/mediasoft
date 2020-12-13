import React from "react";
import { Container, Navbar, Button } from "react-bootstrap";
import Clock from '../Clock';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { itemsCountSelector } from '../../selectors/cart-selectors';
import ThemeContext from '../../utils/ThemeContext';

const NavMenu = () => {
  const itemsCount = useSelector(itemsCountSelector);
  const { theme, toggleTheme } = React.useContext(ThemeContext);

  return (

    <Navbar sticky="top" bg="dark" expand="lg" variant="dark">
      <Container>
        <NavLink to='/'>
          <Navbar.Brand href="#home">
            ReactShop
        </Navbar.Brand>
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Button
          variant={theme === "light" ? "primary" : "warning"}
          onClick={toggleTheme} className="m-2"
        >Тема</Button>
        <Navbar.Brand>
          <NavLink to='/cart'>
            <span>Товаров в корзине: </span>{itemsCount}
          </NavLink>
        </Navbar.Brand>
        <Navbar.Brand>
          <Clock />
        </Navbar.Brand>
      </Container>
    </Navbar>

  );

};

export default NavMenu;