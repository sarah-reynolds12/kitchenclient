import * as React from 'react';
import {Container, Row, Col} from "reactstrap";
import FoodItem from "./FoodItem";
import FoodTable from "./FoodTable";
import {IFood} from "./FoodItemInterface";


export interface FoodIndexProps {
    token: string
}
 
export interface FoodIndexState {
    food: IFood[],
}
 
class FoodIndex extends React.Component<FoodIndexProps, FoodIndexState> {
    constructor(props: FoodIndexProps) {
        super(props);
        this.state = { food: [] };
    }

    fetchFood = () => {
        let token = this.props.token ? this.props.token : localStorage.getItem('token')
        fetch(`http://localhost:3000/fooditem/get`, {
      method: 'GET',
      headers: new Headers({
          'Content-Type': 'application/json',
          Authorization: token ? token : '',
      })
  }).then(
          (response) => response.json()
      ).then((data) => {console.log(data) 
        this.setState({food: data})})
    }

componentDidMount() {
    this.fetchFood()
}

    render() { 
        return ( 
            <div>
                {/* <FoodItem token={this.props.token} fetchFood={this.fetchFood} />
                {this.state.fetchFood.length > 0 ? 
                <FoodTable token={this.props.token} food={this.props.food} fetchFood={this.props.fetchFood}/> : null} */}
            </div>
         );
    }
}
 
export default FoodIndex;