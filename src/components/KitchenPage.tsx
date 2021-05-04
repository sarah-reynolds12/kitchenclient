import * as React from 'react';
import { Card, CardTitle, Button, CardText } from "reactstrap";
import Kitchenbuild from "./cards/Kitchenbuild";
import FoodItem from "./cards/FoodItem";
import { IKitchen } from "./UI/Interface"

export interface KitchenPageProps {
    token: string
}
 
export interface KitchenPageState {
    kitchendata : IKitchen[]
}
 
class KitchenPage extends React.Component<KitchenPageProps, KitchenPageState> {
    constructor(props: KitchenPageProps) {
        super(props);
        this.state = {
            kitchendata : []
         };
        }

        componentDidMount = () => {
            let token = this.props.token ? this.props.token : localStorage.getItem("token")
        fetch(`http://localhost:3000/kitchen/get`, {
              method: 'GET',
              headers: new Headers({
                  'Content-Type': 'application/json',
                  Authorization: token ? token : '',
              })
          }).then(
                  (response) => response.json()
              ).then((data : IKitchen[]) => {
                  console.log(data)
                  this.setState({kitchendata: data});
                  //console.log(this.kitchendata);
              })

    }
       
    
    render() { 
        return (
            <div>
                
            {this.state.kitchendata === null ? (<Kitchenbuild token = {this.props.token} />) : (<FoodItem token = {this.props.token} />)}
                {/* {this.switchKitchen()} */}
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