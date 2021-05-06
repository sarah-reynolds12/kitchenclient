import * as React from 'react';
import "./Navbar.css";
 import {
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

// import  Auth from "../auth/Auth";
// import { Login } from "../auth/Login";
// import { SignUp } from "../auth/SignUp";
// import { Kitchen } from "./Kitchen";
// import  Pantry  from "./kitchenareas/Pantry";
// import { Spicerack } from "./kitchenareas/Spicerack";
// import { Fridge } from "./kitchenareas/Fridge";
// import { Freezer } from "./kitchenareas/Freezer";
import FoodItem from "./cards/FoodItem"

export interface SitebarProps {
    token: string
    
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
              <NavbarBrand href="/fooditem/get">Kitchen Inventory</NavbarBrand>
              {/* <NavbarToggler onClick={this.toggle} /> */}
              {/* <Collapse isOpen={isOpen} navbar> */}
                <Nav className="mr-auto" navbar>
                <NavItem>
                    <NavLink href="/fooditem/create" > Add Food Item </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/fooditem/:fridge">Fridge</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href= "/fooditem/:freezer">Freezer</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/fooditem/:pantry">Pantry</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/fooditem/:spices">Spices</NavLink>
                  </NavItem>
                  {/* <NavItem>
                    <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
                  </NavItem> */}
                  <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                      Item Amounts
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>
                      <NavLink href="/fooditem/:full">Full</NavLink>
                      </DropdownItem>
                      <DropdownItem>
                      <NavLink href="/fooditem/:half">Half</NavLink>
                      </DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem>
                      <NavLink href="/fooditem/:replace">Replace</NavLink>
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </Nav>
                <NavbarText>
                <NavLink href="/kitchen/get">Account</NavLink>
                </NavbarText>
              {/* </Collapse> */}
            </Navbar>
          </div>
           
         );
    }
}
 
export default Sitebar;