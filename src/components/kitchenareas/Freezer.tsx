import React from "react";
import FoodItem from "../cards/FoodItem"
//import { Card } from "reactstrap";

export interface FreezerProps {
    token: string
}
 
export interface FreezerState {
        freezerdata: string
}
 
class Freezer extends React.Component<FreezerProps, FreezerState> {
    constructor(props: FreezerProps) {
        super(props);
        this.state = { 
            freezerdata: ''
          };
    }
    componentDidMount = () => {
        let token = this.props.token ? this.props.token : localStorage.getItem("token")

    fetch(`http://localhost:3000/fooditem/:freezer`, {
        method: 'GET',
        headers: new Headers({
            'Content-Type': 'application/json',
            Authorization: token ? token : '',
        })
    }).then(
        (response) => response.json()).then((data) => {console.log(data)
        this.setState({freezerdata: data})
    })
}


    render() { 
        return ( 
            <div>
                Freezer Page
            </div>
         );
    }
}
 
export default Freezer;