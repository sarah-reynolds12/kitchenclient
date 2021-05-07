import * as React from 'react';
//import {Container, Row, Column} from "reactstrap";
//import FoodItem from "./FoodItem";

export interface FoodIndexProps {
    token: string
}
 
export interface FoodIndexState {
    
}
 
class FoodIndex extends React.Component<FoodIndexProps, FoodIndexState> {
    constructor(props: FoodIndexProps) {
        super(props);
        this.state = {   };
    }
    render() { 
        return ( 
            <div>
                INDEX
            </div>
         );
    }
}
 
export default FoodIndex;