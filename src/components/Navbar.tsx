import * as React from 'react';
// import React from "react";
//  import {
//   Collapse,
//   Navbar,
//   NavbarToggler,
//   NavbarBrand,
//   Nav,
//   NavItem,
//   NavLink,
//   UncontrolledDropdown,
//   DropdownToggle,
//   DropdownMenu,
//   DropdownItem,
//   NavbarText
// } from 'reactstrap';

// import  Auth from "../auth/Auth";
// import { Login } from "../auth/Login";
// import { SignUp } from "../auth/SignUp";
// import { Kitchen } from "./Kitchen";
// import { Pantry } from "./Pantry";
// import { Spicerack } from "./Spicerack";
// import { Fridge } from "./Fridge";
// import { Freezer } from "./Freezer";

export interface NavbarProps {
    
}
 
export interface NavbarState {
    
}
 
class Navbar extends React.Component<NavbarProps, NavbarState> {
    constructor(props: NavbarProps) {
        super(props);
        this.state = {  };
    }
    render() { 
        return ( 
           // <Navbar>            </Navbar>
           <div>Hello from Navbar</div>
         );
    }
}
 
export default Navbar;