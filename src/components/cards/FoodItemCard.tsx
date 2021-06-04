import * as React from 'react';
import { IFood } from "./FoodItemInterface";
//import Kitchen from "../kitchenareas/Kitchen";
import FoodEdit from "./FoodEdit";
import './FoodCard.css'

import {
    Card,
    //CardImg,
    //CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
    Button,
    CardText,
    ButtonGroup,
    CardColumns,
  } from "reactstrap";
  

export interface FoodItemCardProps {
   token: string; 
    food: IFood;
    fetchFood: Function;
}

// export interface FoodItemCardState {
//     edit: string
// }
 
 
const FoodItemCard: React.SFC<FoodItemCardProps> = (props) => {
   const deleteFood = () => {
    fetch(`http://localhost:3000/fooditem/delete/${props.food.id}`, {
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
    
    
        return ( 
            <div>
              <CardColumns>
      <Card style={{width: '13rem'}}> 
          <CardBody >
            <CardTitle>{props.food.fooditem} : {props.food.brandname} </CardTitle>  
           
              <CardSubtitle> {props.food.itemamount} </CardSubtitle> 
            <CardText> 
            <small className="text-muted">Category: {props.food.foodcategory} </small>
            </CardText>
           

     <FoodEdit fetchFood={props.fetchFood} token={props.token} food={props.food} />
              <Button className='deletebtn' onClick= {() => {deleteFood()}}> Delete </Button>

                    
          </CardBody>
      </Card>
      </CardColumns>
                
               </div>
         );
    }

 
export default FoodItemCard;