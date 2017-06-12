import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarItems, Item, NavbarBrand, Nav, NavItem, NavLink, FormGroup, FormControl, Button} from 'react-bootstrap';

class OLXNavbar extends React.Component{

  render(){
    const dropdownItems = [
    {href: '#', name: 'Overview'},
    {href: '#', name: 'Setup'},
    {href: '#', name: 'Usage'},
];
    return(

      <Navbar className = "navbar-fixed-top">
  <Navbar.Header>
    <Navbar.Brand>
      <a href="#">Aricent-OLX</a>
    </Navbar.Brand>
    <Navbar.Toggle />
  </Navbar.Header>
  <Navbar.Collapse>
    <Navbar.Form pullLeft>
      <FormGroup>
        <FormControl type="text" placeholder="Search" />
        <Button type="submit" className = "btn btn-default">
          <i className="glyphicon glyphicon-search"></i>
        </Button>
      </FormGroup>
    </Navbar.Form>
  </Navbar.Collapse>
</Navbar>
    );
  }
}

export default OLXNavbar;
