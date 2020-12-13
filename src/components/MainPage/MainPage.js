import React from "react";
import { Container, Jumbotron, Button } from "react-bootstrap";
import Timer from '../Timer';
import ThemeContext from "../../utils/ThemeContext";

const MainPage = () => {

    const { theme, toggleTheme } = React.useContext(ThemeContext)

    return (
        <Container className={theme === "light" ? "bg-ligth" : "bg-dark"}>
            <Jumbotron className={theme === "light" ? "bg-ligth" : "bg-dark"} style={{ border: '1px solid green' }}>
                <h1>Тестовое приложение - магазин для MediaSoft</h1>
                <p>
                    Включены 6 товаров, реализован таймер, корзина.
                </p>
                <p>
                    <Button variant={theme === "light" ? "primary" : "warning"}
                        onClick={toggleTheme} className="m-2">
                        Изменить тему
                    </Button>
                    <Timer />
                </p>
            </Jumbotron>
        </Container>
    );
};

export default MainPage;