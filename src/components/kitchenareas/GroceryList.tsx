import * as React from 'react';
import FoodItemCard from "../cards/FoodItemCard";
import {CardColumns} from "reactstrap";
import { IFood } from "./KitchenAreaInterface";
import { RouteComponentProps, withRouter } from 'react-router-dom';

export interface GroceryProps extends RouteComponentProps <{grocery:string}> {
    token: string;
}
 
export interface GroceryState {
    allFoodData: IFood[];
}
 
class Grocery extends React.Component<GroceryProps, GroceryState> {
    constructor(props: GroceryProps) {
        super(props);
        this.state = { allFoodData: [] };
    }
        componentDidMount = () => {
            this.fetchFood()
            
        }
        
        fetchFood = () => {
            const grocery = this.props.match.params.grocery
        let token = this.props.token ? this.props.token : localStorage.getItem("token")
    fetch(`http://localhost:3000/fooditem/get`, {
          method: 'GET',
          headers: new Headers({
              'Content-Type': 'application/json',
              Authorization: token ? token : '',
          })
      }).then(
              (response) => response.json()
          ).then((data: IFood[]) => {
              console.log(data)
              const filteredData = data.filter(food => food.itemamount.toLowerCase() === grocery)
              this.setState({allFoodData: filteredData});
              //console.log(this.Categorydata);
          });
    
    }

    render() { 
        return ( 
        <CardColumns>
            Category Page??
            {this.state.allFoodData.length > 0 ? (this.state.allFoodData.map((food: IFood, index: number) => (<FoodItemCard token= {this.props.token} food= {food} key={index} fetchFood={this.fetchFood}/>))) : (<></>)
            }
        </CardColumns>
         );
    }
}
 
export default withRouter(Grocery);