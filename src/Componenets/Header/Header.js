import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css';




const Header = () => {
   
    return ( 
       <Navbar collapseOnSelect expand="lg" bg="light" variant="dark">
       <Container>
                <Navbar.Brand href="#home" className='text-danger fw-bold'>
                    <img
                       src="/logo1.png"
                       width="30"
                        height="30"
                      className="d-inline-block align-top"
                     alt="React Bootstrap logo"/>
                       Udemy     
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
         <Navbar.Collapse id="responsive-navbar-nav">
           <Nav className="me-auto">
             <Nav.Link href="/" className='text-secondary ms-5'>Home</Nav.Link>
             <Nav.Link href="../../Pages/Courses" className='text-secondary'>Courses</Nav.Link>
             <Nav.Link href="/FAQ" className='text-secondary'>FAQ</Nav.Link>
             <Nav.Link href="/Blog" className='text-secondary'>Blog</Nav.Link>        
           </Nav>
           <Nav>
             <Nav.Link href="#deets" className='text-secondary'>Logout</Nav.Link>    
               </Nav>             
  </Navbar.Collapse>    
       </Container>
     </Navbar>
    );
};

export default Header;