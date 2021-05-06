import * as React from 'react';
import { IFood } from "./FoodItemInterface"

import {
    Card,
    // CardImg,
    // CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
    Button,
  } from "reactstrap";
  

export interface FoodItemCardProps {
   token: string; 
    food: IFood;
}
 
 
const FoodItemCard: React.SFC<FoodItemCardProps> = (props) => {
    
        return ( 
            <div>
                {/* <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
        <CardTitle tag="h5">Special Title Treatment</CardTitle>
        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
        <Button>Button</Button>
      </Card> */}

      <Card>
          <CardBody>
              {props.food.fooditem}
              <CardTitle> {props.food.brandname}</CardTitle>
              <CardSubtitle>{props.food.itemamount}</CardSubtitle>
              <Button> Button </Button>
          </CardBody>
      </Card>
                
                Food Item Card</div>
         );
    }

 
export default FoodItemCard;