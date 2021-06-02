import * as React from 'react';
import "./Navbar.css";
 import {
  Button,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
import ProtectedNavBar from "./ProtectedNavBar"

import {Link} from "react-router-dom";
import {BrowserRouter as Router } from "react-router-dom";

import FoodItem from "./cards/FoodItem"

export interface SitebarProps {
    token: string
  //  onClick: () => void,
   // clickLogout: string
    
}
 
export interface SitebarState {
    role: string
}
 
class Sitebar extends React.Component<SitebarProps, SitebarState> {
    constructor(props: SitebarProps) {
        super(props);
        this.state = { role: "" };
    }

    clearToken = () => {
      localStorage.clear();
      this.pageRefresh();
    }

    pageRefresh = () => {
      window.location.reload(true);
    }

    protectedNav = () => {
      return localStorage.getItem("role") === "shopper" ? <ProtectedNavBar /> : null }

    render() { 
        return ( 
            <div>
            <Navbar color="light" light expand="md" >
              
              <Link to="/fooditem/"><NavbarBrand>Kitchen Inventory</NavbarBrand></Link>
              {this.protectedNav()}
              {/* <NavbarToggler onClick={this.toggle} /> */}
              {/* <Collapse isOpen={isOpen} navbar> */}
                <Nav className="mr-auto" navbar>
               
                  <UncontrolledDropdown nav inNavbar direction="right" >
                    <DropdownToggle nav caret>
                      View Food Categories
                    </DropdownToggle>
                     <DropdownMenu right>
                     <DropdownItem >
                      <Link to= "/food/bakery"><NavLink>Bakery</NavLink></Link>
                      </DropdownItem>
                     <DropdownItem>
                      <Link to= "/food/beverages"><NavLink>Beverages</NavLink></Link>
                      </DropdownItem>
                      <DropdownItem>
                      <Link to= "/food/cereal"><NavLink>Cereal</NavLink></Link>
                      </DropdownItem>
                      <DropdownItem>
                      <Link to= "/food/condiments"><NavLink>Condiments</NavLink></Link>
                      </DropdownItem>
                      <DropdownItem>
                      <Link to= "/food/supplies"><NavLink>Cooking Supplies</NavLink></Link>
                      </DropdownItem>
                      <DropdownItem>
                      <Link to= "/food/dairy"><NavLink>Dairy</NavLink></Link>
                      </DropdownItem>
                      <DropdownItem>
                      <Link to= "/food/dessert"><NavLink>Dessert</NavLink></Link>
                      </DropdownItem>
                      <DropdownItem>
                     <Link to= "/food/frozen"><NavLink>Frozen</NavLink></Link>
                      </DropdownItem>
                      <DropdownItem>
                      <Link to= "/food/meat"><NavLink>Meat</NavLink></Link>
                      </DropdownItem>
                      <DropdownItem>
                      <Link to= "/food/pasta"><NavLink>Pasta</NavLink></Link>
                      </DropdownItem>
                      <DropdownItem>
                      <Link to= "/food/produce"><NavLink>Produce</NavLink></Link>
                      </DropdownItem>
                      <DropdownItem>
                      <Link to= "/food/spices"><NavLink>Spices</NavLink></Link>
                      </DropdownItem>
                      <DropdownItem>
                      <Link to= "/food/other"><NavLink>Other</NavLink></Link>
                      </DropdownItem>
                      <DropdownItem divider />
                      {/* <DropdownItem>
                      <NavLink to="/fooditem/:replace">Replace</NavLink>
                      </DropdownItem> */}
                    </DropdownMenu>
                  </UncontrolledDropdown> 
                {/* <NavItem>
               <Link to="/food/replace"><NavLink>Grocery List</NavLink></Link>
              </NavItem> */} </Nav>
              <Nav>
                {localStorage.getItem('token') !== null ?
                <NavItem>
                    <Button className='logout' onClick= {()=>this.clearToken()}> Logout  </Button>
                    {/* onClick={this.props.onClick} */}
                    </NavItem> : null }
                    <hr />
              {/* </Collapse> */}
                  </Nav>
            </Navbar>
          </div>
           
         );
    }
}
 
export default Sitebar;