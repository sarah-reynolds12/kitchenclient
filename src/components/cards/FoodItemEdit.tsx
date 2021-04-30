import * as React from 'react';
import FoodItem from "./FoodItem";

export interface FoodItemEditProps {
    
}
 
export interface FoodItemEditState {
    edit: string
    
}
 
class FoodItemEdit extends React.Component<FoodItemEditProps, FoodItemEditState> {
    constructor(props: FoodItemEditProps) {
        super(props);
        this.state = { edit : "" };
    }
    render() { 
        return ( 
            <div></div>
         );
    }
}
 
export default FoodItemEdit;