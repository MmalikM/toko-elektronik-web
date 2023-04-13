import { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { fetchCategories } from '../store/action/actionCreatorCategory';


function NavigationBar() {
  const categories = useSelector((state)=> state.categories.categories)
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(fetchCategories())
  },[])
  console.log(categories);


  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">
          <img src="https://cdn.discordapp.com/attachments/1054968473568170016/1086709316951736350/Screenshot_2023-03-18_at_20.30.06.png" style={{height: "50px"}} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <NavLink 
              className="nav-link"
              to="/" 
              style={({isActive})=>({
                textDecoration:"none",
                color: isActive? "blue":"inherit",
              })} 
              >Shop
              </NavLink>
            <Nav.Link href="#action2">Sale</Nav.Link>
            <NavDropdown title="Category" id="navbarScrollingDropdown">
              {
                categories.map(el=>(
                  <NavDropdown.Item href="" key={el.id}>{el.name}</NavDropdown.Item>
                ))
              }
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Contact
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;