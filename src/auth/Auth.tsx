import React from 'react';
import { Login } from "./Login";
import { SignUp } from "./SignUp";
//import { Button } from "reactstrap";

export interface AuthProps {
    updateToken: Function;
}
 
export interface AuthState {
    showLogin: boolean
    
}
 
class Auth extends React.Component<AuthProps, AuthState> {
    constructor(props: AuthProps) {
        super(props);
        this.state = { showLogin : true };
    }

    // handleToggle = (event: MouseEvent) => {
    //     if(this.state.showLogin === false) {
    //         return this.setState({showLogin: true});
    //     }
    //     if (this.state.showLogin === true) {
    //         return this.setState({showLogin: false})
    //     }
    // };

    render() { 
        return (
            <div>
                {/* {this.state.showLogin ? ( 
     <SignUp 
     updateToken = {this.props.updateToken} 
     handleToggle={this.handleToggle} />) : (
     <Login 
     updateToken = {this.props.updateToken} 
     handleToggle = {this.handleToggle}/> )} */}
     <SignUp updateToken ={this.props.updateToken} />
     <Login updateToken={this.props.updateToken} />
     </div>
          );
    }
}
 
export default Auth;