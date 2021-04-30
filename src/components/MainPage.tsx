import {  } from "module";
//import Navbar from "../Navbar";
import FoodItem from "./cards/FoodItem";

export interface MainPageProps {
    updateToken: Function
}
 
export interface MainPageState {
    showPage : true
}
 
class MainPage extends React.Component<MainPageProps, MainPageState> {
    constructor(props: MainPageProps) {
        super(props);
        this.state = { };
    }
    render() { 
        return ( 
            <div>
                {/* <Navbar /> */}
                <FoodItem updateToken = {this.updateToken} />
            </div>
         );
    }
}
 
export default MainPage;