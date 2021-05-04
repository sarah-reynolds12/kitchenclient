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

export interface SitebarProps {
    
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
              <NavbarBrand href="/">Kitchen Inventory</NavbarBrand>
              {/* <NavbarToggler onClick={this.toggle} /> */}
              {/* <Collapse isOpen={isOpen} navbar> */}
                <Nav className="mr-auto" navbar>
                  <NavItem>
                    <NavLink href="/kitchen-inventory/client/my-app/src/components/kitchenareas/Fridge.tsx">Fridge</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/kitchen-inventory/client/my-app/src/components/kitchenareas/Freezer.tsx">Freezer</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/kitchen-inventory/client/my-app/src/components/kitchenareas/Pantry/">Pantry</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/kitchen-inventory/client/my-app/src/components/kitchenareas/Spices/">Spices</NavLink>
                  </NavItem>
                  {/* <NavItem>
                    <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
                  </NavItem> */}
                  <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                      Kitchen
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>
                        Update Kitchen Areas
                      </DropdownItem>
                      <DropdownItem>
                        Trash
                      </DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem>
                        Reset
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </Nav>
                {/* <NavbarText>Simple Text</NavbarText> */}
              {/* </Collapse> */}
            </Navbar>
          </div>
           
         );
    }
}
 
export default Sitebar;