import logo from '../logo.svg'
import react from 'react'
import {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import{ Nav, Navbar } from 'react-bootstrap'

class Navigation extends Component{
  render(){
    return(
      <div>
        <Navbar bg="light" variant="light" sticky="top" expand="md" collapseOnSelect>
        <Navbar.Brand href="/" className='site-name'>
          Content Generator
        </Navbar.Brand>

        <Navbar.Toggle />

        <Navbar.Collapse>
          <Nav>
            <Nav.Link href="product-description"> Product Description </Nav.Link>
            <Nav.Link href="cold-emails"> Cold Emails </Nav.Link>
            <Nav.Link href="tweets"> Tweets </Nav.Link>
            <Nav.Link href="insta-captions"> Instagram Captions </Nav.Link>
          </Nav>
        </Navbar.Collapse>

        </Navbar>
      </div>
    )
  }
}

export default Navigation
