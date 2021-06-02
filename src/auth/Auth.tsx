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

    handleToggle = (event: any) => {
       event.preventDefault();
       this.setState({showLogin: !this.state.showLogin})
    };

    render() { 
        return (
            <div>
                {this.state.showLogin ? ( <SignUp updateToken ={this.props.updateToken} />) : (<Login updateToken={this.props.updateToken} />)}
     {/* <SignUp updateToken ={this.props.updateToken} />
     <Login updateToken={this.props.updateToken} /> */}
     <div>
     {this.state.showLogin ? (<button className ="Authbutton" onClick={this.handleToggle}>Already a member? Login here.</button>) : (<button className="Authbutton" onClick={this.handleToggle}>New here? Signup!</button>)}
     </div>
     </div>
          );
    }
}
 
export default Auth;