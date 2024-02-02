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
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className="hamburger d-block d-sm-none float-left order-1"
        />
        <Image
          src="/logo.png"
          width={142}
          height={39}
          className="d-block d-sm-flex justify-content-center order-2"
        />
        <Container className="nav-div">
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto pages text-center order-3">
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
            <Form className="d-md-none d-lg-flex d-xs-flex justify-content-end order-4">
              <FormControl
                type="text"
                placeholder="Search"
                className="search"
              />
              <Button variant="bg-white">Login</Button>
            </Form>

            {/* Displayed on larger devices */}
            <Nav className="d-none d-md-flex order-5">
              {/* <button className="w-25 d-flex justify-content-center">Login</button> */}
              <Form
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginLeft: "1rem",
                }}
              >
                <Form.Check type="switch" id="custom-switch" label="Language" />
              </Form>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default CollapsibleExample;
