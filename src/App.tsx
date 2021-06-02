import React from 'react';
import './App.css';
//import { Row } from "reactstrap";
import  Auth  from "./auth/Auth";
import FoodItem from "./components/cards/FoodItem";
//import Kitchenbuild from "./components/cards/Kitchenbuild";
import MainPage from "./components/MainPage";
import { Route, Switch, Redirect } from "react-router-dom";
import Kitchen from "./components/kitchenareas/Kitchen";
//import FoodItemCard from "./components/cards/FoodItemCard";
import Category from "./components/kitchenareas/Categories";
import Navbar from "./components/Navbar";
import Grocery from "./components/kitchenareas/GroceryList";
import FoodIndex from "./components/cards/FoodIndex";

export interface AppProps {
//onClick: () => void, 

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

clearToken = () => {
  localStorage.clear();
  this.setState({token: ''})
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
      <Navbar token = {this.state.token} />
       <Switch>
         <Route exact path = "/">
           {this.protectedViews()}
          
         </Route>
         {/* <Route exact path ="/kitchen" >{this.state.token ? <Kitchenbuild token = {this.state.token}/> : <Redirect to = "/"/>}</Route> */}
         <Route exact path ="/fooditem/create">{this.state.token ? <FoodItem token = {this.state.token}/> : <Redirect to = "/"/>}</Route>
         <Route exact path ="/fooditem/">{this.state.token ? <Kitchen token = {this.state.token}/> : <Redirect to = "/"/>}</Route>
         <Route exact path ="/food/:category">{this.state.token ? <Category token = {this.state.token}/> : <Redirect to = "/"/>}</Route>
         <Route exact path ="/fooditem/:itemamount">{this.state.token ? <Grocery token ={this.state.token}/>: <Redirect to = "/"/>}</Route>
         
    </Switch>
     </div>
   );
  }
}

export default App;