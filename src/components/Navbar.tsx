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

import {Link} from "react-router-dom";

import FoodItem from "./cards/FoodItem"

export interface SitebarProps {
    token: string
  //  onClick: () => void,
   // clickLogout: string
    
}
 
export interface SitebarState {
    
}
 
class Sitebar extends React.Component<SitebarProps, SitebarState> {
    constructor(props: SitebarProps) {
        super(props);
        this.state = {  };
    }
    render() { 
        return ( 
            <div>
            <Navbar color="light" light expand="md" >
              <Link to="/fooditem/"><NavbarBrand>Kitchen Inventory</NavbarBrand></Link>
              {/* <NavbarToggler onClick={this.toggle} /> */}
              {/* <Collapse isOpen={isOpen} navbar> */}
                <Nav className="mr-auto" navbar>
                <NavItem>
                    <Link to="/fooditem/create"><NavLink> Add Food Item </NavLink></Link>
                  </NavItem>
                  {/* <NavItem>
                    <Link to="/food/produce"><NavLink>Produce</NavLink></Link>
                  </NavItem>
                  <NavItem>
                    <Link to= "/food/condiments"><NavLink>Condiments</NavLink></Link>
                  </NavItem>
                  <NavItem>
                    <Link to= "/food/bakery"><NavLink>Bakery</NavLink></Link>
                  </NavItem>
                  <NavItem>
                    <Link to= "/food/spices"><NavLink>Spices</NavLink></Link>
                  </NavItem>
                  <NavItem>
                    <Link to= "/food/meat"><NavLink>Meat</NavLink></Link>
                  </NavItem>
                  <NavItem>
                    <Link to= "/food/beverages"><NavLink>Beverages</NavLink></Link>
                  </NavItem>
                  <NavItem>
                    <Link to= "/food/dairy"><NavLink>Dairy</NavLink></Link>
                  </NavItem>
                  <NavItem>
                    <Link to= "/food/frozen"><NavLink>Frozen</NavLink></Link>
                  </NavItem>
                  <NavItem>
                    <Link to= "/food/dessert"><NavLink>Dessert</NavLink></Link>
                  </NavItem>
                  <NavItem>
                    <Link to= "/food/supplies"><NavLink>Cooking Supplies</NavLink></Link>
                  </NavItem>
                  <NavItem>
                    <Link to= "/food/cereal"><NavLink>Cereal</NavLink></Link>
                  </NavItem> */}
                  <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                      Food Categories
                    </DropdownToggle>
                     <DropdownMenu right>
                     <DropdownItem>
                      <Link to= "/food/bakery"><NavLink>Bakery</NavLink></Link>
                      </DropdownItem>
                     <DropdownItem>
                      <Link to= "/food/beveraves"><NavLink>Beverages</NavLink></Link>
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
                      <Link to= "/food/produce"><NavLink>Produce</NavLink></Link>
                      </DropdownItem>
                      <DropdownItem>
                      <Link to= "/food/spices"><NavLink>Spices</NavLink></Link>
                      </DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem>
                      <NavLink to="/fooditem/:replace">Replace</NavLink>
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown> 
                </Nav>
                <NavItem>
               <Link to="/food/replace"><NavLink>Grocery List</NavLink></Link>
                </NavItem>
                <NavItem>
                    <Button> Logout  </Button>
                    {/* onClick={this.props.onClick} */}
                    </NavItem>
              {/* </Collapse> */}
            </Navbar>
          </div>
           
         );
    }
}
 
export default Sitebar;