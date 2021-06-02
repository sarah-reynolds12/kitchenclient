import * as React from 'react';
import { IFood } from "./FoodItemInterface";
import {CardColumns} from "reactstrap";
import FoodItemCard from "./FoodItemCard";


export interface FoodTableProps {
   token: string,
    food: IFood[],
    fetchFood: Function,
}

export interface FoodTableState {
    
 } 
 
class FoodTable extends React.Component<FoodTableProps, FoodTableState> {
    constructor(props: FoodTableProps) {
        super(props);
        this.state = {};
    }

    render(){
        return ( 
            <CardColumns>
                {/* {this.props.food.length > 0 ? (this.props.food.map(food: IFood, index: number) => (<FoodItemCard fetchFood={this.props.fetchFood} token={this.props.token} food={food} key={index}/>))) : (<></>)} */}
            </CardColumns>
         );
    }
}

export default FoodTable;