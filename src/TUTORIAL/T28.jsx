import { Button } from "react-bootstrap";
import { Alert ,Nav,NavDropdown,Navbar,Container} from "react-bootstrap";

// import 'bootstrap/dist/css/bootstrap.min.css'; Import this in main.jsx
function App() {

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

      <h1>Add bootstrap in React js</h1>
      <Alert variant="success">Hello, BT installed</Alert>
      <Button onClick={()=>alert("Bootstrap button")} variant="danger">Bootstrap button</Button>
      <Button variant="success"> Ok</Button>
      <Button variant="warning"> Ok</Button>
      <button onClick={()=>alert("Simple button")}>Simple button
      </button>


    </>
  )
}

export default App; 
