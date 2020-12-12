import React from "react";
import { Container, Row, Col, Jumbotron, Button, Card } from "react-bootstrap";
import Timer from '../Timer';
import ThemeContext from "../../utils/ThemeContext";

const MainPage = () => {

    const { theme, toggleTheme } = React.useContext(ThemeContext)

    return (
        <Container className={theme === "light" ? "bg-ligth" : "bg-dark"}>
            <Jumbotron className={theme === "light" ? "bg-ligth" : "bg-dark"} style={{ border: '1px solid green' }}>
                <h1>Тестовое приложение для MediaSoft</h1>
                <p>
                    This is a simple hero unit, a simple jumbotron-style component for calling
                    extra attention to featured content or information.
                </p>
                <p>
                    <Button variant={theme === "light" ? "primary" : "warning"}
                        onClick={toggleTheme} className="m-2">
                        Изменить тему
                    </Button>
                </p>
            </Jumbotron>
            <p>
                <Timer />
            </p>
            <Row className={theme === "light" ? "bg-ligth" : "bg-dark"}>
                <Col>
                    <Card className={theme === "light" ? "bg-ligth" : "bg-dark"} style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://picsum.photos/200/100" />
                        <Card.Body>
                            <Card.Title>Product Title</Card.Title>
                            <Card.Text className={theme === "light" ? "bg-ligth" : "bg-dark"}>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                        </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                            <span className="p-2">$100</span>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className={theme === "light" ? "bg-ligth" : "bg-dark"} style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://picsum.photos/201/100" />
                        <Card.Body>
                            <Card.Title>Product Title</Card.Title>
                            <Card.Text className={theme === "light" ? "bg-ligth" : "bg-dark"}>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                        </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                            <span className="p-2">$150</span>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className={theme === "light" ? "bg-ligth" : "bg-dark"} style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://picsum.photos/202/100" />
                        <Card.Body>
                            <Card.Title>Product Title</Card.Title>
                            <Card.Text className={theme === "light" ? "bg-ligth" : "bg-dark"}>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                        </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                            <span className="p-2">$100</span>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );

};

export default MainPage;