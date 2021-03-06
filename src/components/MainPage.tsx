import * as React from 'react';
//import Navbar from "./Navbar";
import FoodItem from "./cards/FoodItem";
//import Kitchenbuild from "./cards/Kitchenbuild";
//import KitchenPage from "./KitchenPage";
//import Kitchen from "./kitchenareas/Kitchen"
import Category from "./kitchenareas/Categories";

export interface MainPageProps {
    token : string
    role : string
}
 
export interface MainPageState {
    //showPage : true
}
 
class MainPage extends React.Component<MainPageProps, MainPageState> {
    constructor(props: MainPageProps) {
        super(props);
        this.state = { };
    }

    roleSwitch = () => {
        if (localStorage.getItem('role') === "shopper" ) {
            return <FoodItem token = {this.props.token} />
        } else if (localStorage.getItem('role') === "householdmember") {
            return  <Category token = {this.props.token} />
        } 
    }

    render() { 
        return ( 
            <div>
               
                {this.roleSwitch()}
                {/* <FoodItem token = {this.props.token} />
                <Kitchenbuild token = {this.props.token} /> */}
            </div>
         );
    }
}
 
export default MainPage;