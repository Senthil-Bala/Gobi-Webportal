// CollapsibleExample.jsx

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import Image from "next/image";
import "./Header.css";

function CollapsibleExample() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" className="navs">
        <Container className="nav-div">
          <Navbar.Brand
            href="#home"
            className="text-white d-flex justify-content-center align-items-center"
          >
            <Image src="/logo.png" width={142} height={39} />
          </Navbar.Brand>

          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            // className="navbar-toggler-icon"
          />

          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto pages text-center">
              <Nav.Link href="#features" className="text-white">
                Home
              </Nav.Link>
              <Nav.Link href="#pricing" className="text-white">
                Shopping
              </Nav.Link>
              <Nav.Link href="#pricing" className="text-white">
                Jobs
              </Nav.Link>
            </Nav>

            {/* Displayed on small and medium devices */}
            <Form className="d-md-none d-lg-flex">
              <FormControl
                type="text"
                placeholder="Search"
                className="search"
              />
              <Button variant="outline-light">Login</Button>
            </Form>

            {/* Displayed on larger devices */}
            <Nav className="d-none d-md-flex">
              {/* <button className="w-25 d-flex justify-content-center">Login</button> */}
              <Form
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginLeft: "1rem",
                }}
              >
                <Form.Check
                  type="switch"
                  id="custom-switch"
                  label="Language"
                />
              </Form>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default CollapsibleExample;
