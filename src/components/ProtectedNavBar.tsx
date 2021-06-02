import * as React from 'react';
import {Link} from 'react-router-dom';
import { Nav, NavItem, NavLink, NavbarBrand, Navbar, Button} from 'reactstrap';
import {BrowserRouter as Router } from 'react-router-dom';

export interface ProtectedNavBarProps {

}

export interface ProtectedNavBarState {

}

class ProtectedNavBar extends React.Component<ProtectedNavBarProps, ProtectedNavBarState>{
    constructor(props: ProtectedNavBarProps) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div><Nav>
                <NavItem>
                    <Link to="/fooditem/create"><NavLink> Add Food Item </NavLink></Link>
                  </NavItem>
                  <NavItem>
               <Link to="/food/replace"><NavLink>Grocery List</NavLink></Link>
                </NavItem> 
                </Nav>         
            </div>
        );
    }
}

export default ProtectedNavBar;