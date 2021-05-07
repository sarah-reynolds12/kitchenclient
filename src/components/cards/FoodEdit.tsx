import * as React from 'react';
import {IFood} from "./FoodItemInterface";

export interface FoodEditProps {
    token: string;
    food: IFood;
    fetchFood: Function;
}
 
export interface FoodEditState {
    
}
 
class FoodEdit extends React.Component<FoodEditProps, FoodEditState> {
    constructor(props: FoodEditProps) {
        super(props);
        this.state = {   };
        const updateFood = () => {
            fetch(`http://localhost:3000/fooditem/update/${props.food.id}`, {
                    method: "DELETE",
                    headers: new Headers ({
                     'Content-Type': 'application/json',
                       Authorization: props.token,
                   //    Authorization: token ? token : ''
                 })
                })
                 //.then((response) => response.json()).then((data) => {
                .then(() => props.fetchFood()) 
              }


    }
    render() { 
        return (
            <div>
                Food Edit
            </div>
          );
    }
}
 
export default FoodEdit;