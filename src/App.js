import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavMenu from './components/NavMenu';
import MainPage from './components/MainPage';
import { Content } from './components/Content';
import Cart from './components/Cart';
import Footer from './components/Footer';
import ThemeContext from "./utils/ThemeContext";

import './App.css';

function App() {

  const [theme, setTheme] = React.useState("light");
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      return;
    }

    setTheme("light");
  };

  return (
    <BrowserRouter>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <NavMenu />
        <Switch>
          <Route exact path="/">
            <MainPage />
            <Content />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
        </Switch>
        <Footer />
      </ThemeContext.Provider>
    </BrowserRouter>
  );
}

export default App;
