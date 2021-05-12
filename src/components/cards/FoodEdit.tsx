import * as React from 'react';
import {IFood} from "./FoodItemInterface";
import {
    Card,
    //CardImg,
    //CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
    Button,
  } from "reactstrap";


export interface FoodEditProps {
    token: string;
    food: IFood;
    fetchFood: Function;
}
 
export interface FoodEditState {
    
}
 
class FoodEdit extends React.Component<FoodEditProps> {
    constructor(props: FoodEditProps) {
        super(props);
        this.state = {   };
        const updateFood = () => {
            fetch(`http://localhost:3000/fooditem/update/${props.food.id}`, {
                    method: "PUT",
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
                <Card> 
          <CardBody>
              {/* {props.food.fooditem} : {props.food.brandname} 
              <br /><br />
              {/* <CardTitle> {props.food.brandname}</CardTitle> */}
              {/* <CardSubtitle> How much is left: {props.food.itemamount} <br />
              {props.food.foodcategory}</CardSubtitle>
              <Button color ="warning" onClick = {() => {updateFood()}}> Update </Button> */} 
            
              
          </CardBody>
      </Card>
            </div>
          );
    }
}
 
export default FoodEdit;