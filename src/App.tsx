import React from 'react';
import './App.css';
//import { Row } from "reactstrap";
import  Auth  from "./auth/Auth";
// import FoodItem from "./components/cards/FoodItem";
// import Kitchenbuild from "./components/cards/Kitchenbuild";
import MainPage from "./components/MainPage";
//import { Route, Switch, Redirect } from "react-router-dom";
import Kitchen from "./components/kitchenareas/Kitchen";
//import FoodItemCard from "./components/cards/FoodItemCard";

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
    let role = localStorage.getItem('role')
    if (token){
      this.setState({ 
        token: token
      })
    }
      if (role){
        this.setState({ 
          role: role
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
    <MainPage token = {this.state.token} role = {this.state.role} />
  ) : (
    <Auth updateToken = {this.updateToken} />
  )
}

// protectedViews() {
  
//   if(this.state.role === "Shopper" && this.state.token) {
//     return <Redirect to = "/kitchen" />
//   } else if (this.state.role === "Household Member" && this.state.token) {
//     return <Redirect to = "/fooditem" />
//   } else {
//     return  <Auth updateToken = {this.updateToken} />
//   }
// }

 render() {
   return (
     <div>
       {this.protectedViews()}
       <Kitchen token = {this.state.token} />
       {/* <FoodItemCard /> */}
       {/* <Switch>
         <Route exact path = "/">
           {this.protectedViews()}
          
         </Route>
         <Route exact path ="/kitchen" >{this.state.token ? <Kitchenbuild token = {this.state.token}/> : <Redirect to = "/"/>}</Route>
         <Route exact path ="/fooditem">{this.state.token ? <FoodItem token = {this.state.token}/> : <Redirect to = "/"/>}</Route>
    </Switch> */}
     </div>
   );
  }
}

export default App;