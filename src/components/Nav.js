import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavBarHeader() {
  const [keyword, setKeyword] = useState("");
  const handleOnChange = (event) => {
    setKeyword(event.target.value);
  };
  const searchWithLink = () => {
    setKeyword("");
  };
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">
          Movie rating
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/home">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/grid">
              Grid
            </Nav.Link>
            <Nav.Link as={Link} to="/todo">
              ToDo
            </Nav.Link>
          </Nav>
          <Form className="d-flex" method="GET" action={`/search/${keyword}`}>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={keyword}
              onChange={handleOnChange}
            />
            <Button type="submit" variant="outline-secondary">
              Search
            </Button>
            <button className="btn" type="button" onClick={searchWithLink}>
              <Nav.Link as={Link} to={`/search/${keyword}`}>
                S.Link
              </Nav.Link>
            </button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarHeader;
