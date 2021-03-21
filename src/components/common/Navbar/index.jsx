import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import InputForm from "./InputForm";

const NavBar = () => {
  return (
    <>
      <Navbar bg="dark" expand="xl">
        <Navbar.Brand className="">
          <h5> beauty wall spot</h5>
          <span>-to live an Artful life....</span>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav mr-auto"
          className="bg-white"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <InputForm />

          <Nav className="ml-auto">
            {LinkInfo.map(({ path, name }) => (
              <Nav.Link
                key={name}
                as={NavLink}
                to={path}
                className="text-light text-capitalize font-weight-bold"
                exact
                activeClassName="true">
                {name}
              </Nav.Link>
            ))}
          </Nav>

          <Button variant="outline-light" className="ml-sm-5 font-weight-bold">
            Log in
          </Button>
          <Button variant="light" className="ml-3 font-weight-bold">
            Sign up
          </Button>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavBar;

const LinkInfo = [
  {
    path: "/paintings",
    name: "paintings",
  },

  {
    path: "/drawings",
    name: "drawings",
  },

  {
    path: "/sculpture",
    name: "sculpture",
  },

  {
    path: "/crafts",
    name: "handmade crafts",
  },
];
