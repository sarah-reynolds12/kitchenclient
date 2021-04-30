import React from 'react';
import './App.css';
//import { Row } from "reactstrap";
import  Auth  from "./auth/Auth";
//import FoodItem from "./components/cards/FoodItem";
//import Kitchenbuild from "./components/cards/Kitchenbuild";
import MainPage from "./components/MainPage";
import { Route, Switch, Redirect } from "react-router-dom";

export interface AppProps {

}

export interface AppState {
  token: string
  role: string
}

class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = { token: '', role: ''};
  }

  componentDidMount() {
    let token = localStorage.getItem('token')
    if (token){
      this.setState({ 
        token: token
      })
    }
  }
   
updateToken = (token: string, role: string) => {
  localStorage.setItem('token', token);
  this.setState({
    token: token
  })
  this.updateRole(role);
}

updateRole = (role : string ) => {
  localStorage.setItem('role', role);
  this.setState({
    role: role
  })
}

protectedViews = () => {
  return localStorage.getItem('token') ? (
    <MainPage />
  ) : (
    <Auth updateToken = {this.updateToken} />
  )
}

testViews() {
  debugger
  if(this.state.role === "Shopper" && this.state.token) {
    return <Redirect to = "/kitchen" />
  } else if (this.state.role === "Household Member" && this.state.token) {
    return <Redirect to = "/kitchen" />
  } else {
    return  <Auth updateToken = {this.updateToken} />
  }
}

 render() {
   return (
     <div>
       <Switch>
         <Route exact path = "/user">
           {this.testViews()}
           {/* {this.state.role === "Shopper" && this.state.token ? (
             <Redirect to = "/kitchen" />
           ) : (this.state.role === "Household Member" && this.state.token) ? 
            <Redirect to = "/kitchen" /> : (           
             <Auth updateToken = {this.updateToken} />
           )} */}
         </Route>
         <Route exact path ="/kitchen" component= {Kitchen}></Route>
    {/* <MainPage updateToken = {this.updateToken} /> */}
{/* <FoodItem updateToken = {this.updateToken}/> */}
{/* <Kitchenbuild updateToken = {this.updateToken} /> */}
    {/* <Auth updateToken = {this.updateToken} /> */}
    </Switch>
    {/* {this.protectedViews()} */}
     </div>
   );
 }
}

export default App;