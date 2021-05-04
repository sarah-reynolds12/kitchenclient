import * as React from 'react';
import { Card, CardTitle, CardText, Button} from "reactstrap";
export interface FoodItemCardProps {
    token: string 
}
 
export interface FoodItemCardState {
    
}
 
class FoodItemCard extends React.Component<FoodItemCardProps, FoodItemCardState> {
    constructor(props: FoodItemCardProps) {
        super(props);
        this.state = {   };
    }
    render() { 
        return ( 
            <div>
                <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
        <CardTitle tag="h5">Special Title Treatment</CardTitle>
        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
        <Button>Button</Button>
      </Card>
                
                Food Item Card</div>
         );
    }
}
 
export default FoodItemCard;