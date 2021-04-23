import React from 'react';
import './App.css';
// import  { SignUp } from "./auth/SignUp";
// import { Login } from "./auth/Login"
//import { Row } from "reactstrap";
import { Auth } from "./auth/Auth";

export interface AppProps {

}

export interface AppState {
  token: string
}

class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = { token: ''};
  }
   
updateToken = (token: string) => {
  localStorage.setItem('token', token);
  this.setState({
    token: token
  })
}
 render() {
   return (
     <div>
     {/* <SignUp updateToken = {this.updateToken} />
     <Login updateToken = {this.updateToken}/> */}

     <Auth updateToken = {this.updateToken} />
     </div>
   );
 }
}

export default App;