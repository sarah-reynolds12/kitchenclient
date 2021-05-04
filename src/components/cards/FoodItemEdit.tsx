import * as React from 'react';
//import FoodItem from "./FoodItem";

export interface FoodItemEditProps {
    token: string
}
 
export interface FoodItemEditState {
    edit: string
    
}
 
class FoodItemEdit extends React.Component<FoodItemEditProps, FoodItemEditState> {
    constructor(props: FoodItemEditProps) {
        super(props);
        this.state = { edit : "" };

        fetch(`http://localhost:3000/fooditem/get`, {
            method: "GET",
            headers: new Headers ({
                'Content-Type': 'application/json',
                Authorization: this.props.token
            })
        })
        .then((response) => response.json()).then((data) => {
            this.setState({edit: ''});
        })
    }
    render() { 
        return ( 
            <div></div>
         );
    }
}
 
export default FoodItemEdit;