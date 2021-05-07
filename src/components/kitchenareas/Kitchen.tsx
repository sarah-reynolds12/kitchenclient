import * as React from 'react';
import FoodItemCard from "../cards/FoodItemCard";
import {CardColumns} from "reactstrap";
import { IFood } from "./KitchenAreaInterface";

export interface KitchenProps {
    //url: string;
  token: string;
}
 
export interface KitchenState {
    allFoodData: IFood[];
}
 
class Kitchen extends React.Component<KitchenProps, KitchenState> {
    constructor(props: KitchenProps) {
        super(props);
        this.state = { allFoodData: [] };
    }
    componentDidMount = () => {
        let token = this.props.token ? this.props.token : localStorage.getItem("token")
       // const fetchFood = () => {
    fetch(`http://localhost:3000/fooditem/get`, {
          method: 'GET',
          headers: new Headers({
              'Content-Type': 'application/json',
              Authorization: token ? token : '',
          })
      }).then(
              (response) => response.json()
          ).then((data: IFood[]) => {
              console.log(data)
              this.setState({allFoodData: data});
              //console.log(this.kitchendata);
          });

}

// Kitchen.useEffect(() => {
//     fetchFood();
// }, [])

    render() { 
        return ( 
       <CardColumns>
           {this.state.allFoodData.length > 0 ? (this.state.allFoodData.map((food: IFood, index: number) => (<FoodItemCard token= {this.props.token} food= {food} key={index}/>))) : (<></>)
           }
       </CardColumns>
        );
    }
}

 
export default Kitchen;