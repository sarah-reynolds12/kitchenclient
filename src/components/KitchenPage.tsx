import * as React from 'react';
import { Card, CardTitle, Button, CardText } from "reactstrap";
import Kitchenbuild from "./cards/Kitchenbuild";
import FoodItem from "./cards/FoodItem";

export interface KitchenPageProps {
    token: string
}
 
export interface KitchenPageState {
    kitchendata : string  
}
 
class KitchenPage extends React.Component<KitchenPageProps, KitchenPageState> {
    constructor(props: KitchenPageProps) {
        super(props);
        this.state = {
            kitchendata : ''
         };
    
  fetch(`http://localhost:3000/kitchen/get`, {
        method: 'GET',
        headers: new Headers({
            'Content-Type': 'application/json',
            Authorization : this.props.token
            //Authorization: token ? token : ''
        })
    }).then(
            (response) => response.json()
        ).then((data) => {
            // this.props.updateToken(data.sessionToken)
            // console.log(data.sessionToken);
            this.setState({kitchendata: ""});
            //console.log(this.kitchendata);
        })
    } 
//     else {
//         console.log("You cannot create a kitchen.")
//     }    
// }
    
    switchKitchen = () => {
        if (this.state.kitchendata === "0" ) {
            return <Kitchenbuild token = {this.props.token} />
        } else if (this.state.kitchendata > "0") {
            return  <FoodItem token = {this.props.token} />
        } 
    }
    
    

    render() { 
        return (
            <div>
                
                {this.switchKitchen()}
                {/* <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
        <CardTitle tag="h5">Special Title Treatment</CardTitle>
        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
        <Button>Button</Button>
      </Card> */}
                Kitchen Page
                
                </div>
          );
    }
}
 
export default KitchenPage;