import React from "react";
import "./style.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Header = () => {
    return (
        <Container fluid className="header-container">
            <Row>
                <Col data-test-id="header-title" className="title">
                <h1>Employee Directory</h1>
                </Col>
            </Row>
            <Row>
                <Col data-test-id="header-text" className="text">
                <p>Browse employees by name or use search bar to find employee info.</p>
                </Col>
            </Row>
        </Container>
    )
}

export default Header;