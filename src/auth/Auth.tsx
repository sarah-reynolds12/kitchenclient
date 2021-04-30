import React from 'react';
import { Login } from "./Login";
import { SignUp } from "./SignUp";
import  Kitchenbuild  from "../components/cards/Kitchenbuild";
//import { Button } from "reactstrap";

export interface AuthProps {
    updateToken: Function
}
 
export interface AuthState {
    showLogin: boolean
    
}
 
class Auth extends React.Component<AuthProps, AuthState> {
    constructor(props: AuthProps) {
        super(props);
        this.state = { showLogin : true };
    }
    render() { 
        return (
            <div>
     <SignUp updateToken = {this.props.updateToken} />
     <Login updateToken = {this.props.updateToken}/>
     <Kitchenbuild updateToken = {this.props.updateToken}/>
     </div>
          );
    }
}
 
export default Auth;