import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink, useNavigate } from 'react-router-dom';

function NewNavbar() {
  const navigate = useNavigate()
  const logoutHandler = (e) =>{
    e.preventDefault()
    localStorage.clear()
    navigate("login")
  }
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <img src="https://cdn.discordapp.com/attachments/1054968473568170016/1086709316951736350/Screenshot_2023-03-18_at_20.30.06.png" alt="" style={{width:"75px"}}/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            
              <NavLink 
              className="nav-link"
              to="/" 
              style={({isActive})=>({
                textDecoration:"none",
                color: isActive? "blue":"white",
              })} 
              >Home
              </NavLink>
           
              <NavLink
              className="nav-link"
              to="categories" 
              style={({isActive})=>({
                textDecoration:"none",
                color: isActive? "blue":"white",
              })} 
              >
                Category
              </NavLink>
          
          </Nav>
          <Nav>
           
            <NavLink
              className="nav-link"
              to="register" 
              style={({isActive})=>({
                textDecoration:"none",
                color: isActive? "blue":"white",
              })} 
              >
                Register
            </NavLink>
            <NavLink
              className="nav-link"
              onClick = {logoutHandler}
              >
                Logout
              </NavLink>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NewNavbar;