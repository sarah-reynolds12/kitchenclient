import * as React from 'react';
import { IFood } from "./FoodItemInterface"

import {
    Table,
    Button,
  } from "reactstrap";
  

export interface FoodTableProps {
   token: string; 
    food: IFood;
}
 
 
const FoodTable: React.SFC<FoodTableProps> = (props) => {
    
        return ( 
            <div>
      {/* <Card>
          <td>{props.food.fooditem}</td>
              <td> {props.food.brandname}</td>
              <td>{props.food.itemamount}</td>
              <td> {props.food.foodcategory}</td>
              <td>
              <Button color = "warning"> Update </Button>
              <Button color = "danger"> Delete </Button>
              </td>
          </CardBody>
      </Card> */}
                
                Food Item Card</div>
         );
    }

 
export default FoodTable;