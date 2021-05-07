import * as React from 'react';
import { IFood } from "./FoodItemInterface";
//import Kitchen from "../kitchenareas/Kitchen";

import {
    Card,
    //CardImg,
    //CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
    Button,
  } from "reactstrap";
  

export interface FoodItemCardProps {
   token: string; 
    food: IFood;
}

// export interface FoodItemCardState {
//     edit: string
// }
 
 
const FoodItemCard: React.SFC<FoodItemCardProps> = (props) => {
//    const deleteFood = (food) => {
//     fetch(`http://localhost:3000/fooditem/delete/${food.id}`, {
//             method: "DELETE",
//             headers: new Headers ({
//              'Content-Type': 'application/json',
//                Authorization: props.token,
//            //    Authorization: token ? token : ''
//          })
//         }).then(() => props.fetchFood()) 
//           .then((response) => response.json()).then((data) => {
//            this.setState({edit: ''});
//        })
//     }
    
        return ( 
            <div>
      <Card> 
          <CardBody>
              {props.food.fooditem} : {props.food.brandname} 
              <br /><br />
              {/* <CardTitle> {props.food.brandname}</CardTitle> */}
              <CardSubtitle> How much is left: {props.food.itemamount} <br />
              {props.food.foodcategory}</CardSubtitle>
              <Button color ="warning"> Update </Button>
              {/* <Button color ="danger" onClick= {() => {deleteFood(food)}}> Delete </Button> */}
              <Button color = "danger"> Delete</Button>
          </CardBody>
      </Card>
                
               </div>
         );
    }

 
export default FoodItemCard;